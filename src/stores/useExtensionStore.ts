import { create } from "zustand";
import { data } from "../assets/data.tsx";

export type CurrentFilter = "all" | "active" | "inactive";

type State = {
  extensionList: typeof data;
  filteredExtensionList: typeof data;
  currentFilter: CurrentFilter;
};

type Actions = {
  filterExtensionList: (filter: CurrentFilter) => void;
  removeExtension: (name: string) => void;
  toggleExtension: (name: string) => void;
  fillExtensionList: () => void;
};

export const useExtensionStore = create<State & Actions>((set, get) => {
  const stored = localStorage.getItem("extensionList");
  const initialExtensionList = stored
    ? (JSON.parse(stored) as typeof data)
    : data;

  if (!stored) {
    localStorage.setItem("extensionList", JSON.stringify(initialExtensionList));
  }

  return {
    extensionList: initialExtensionList,
    filteredExtensionList: initialExtensionList, // ✅ return the array
    currentFilter: "all",

    filterExtensionList: (filter: CurrentFilter = "all") => {
      const currentFilter = get().currentFilter;
      const extensionList = get().extensionList;

      if (filter === currentFilter) return;

      const filteredList =
        filter === "all"
          ? extensionList
          : extensionList.filter(
              (ext) =>
                (ext.isActive && filter === "active") ||
                (!ext.isActive && filter === "inactive")
            );

      set({
        filteredExtensionList: filteredList,
        currentFilter: filter,
      });
    },

    removeExtension: (name) => {
      const extensionList = get().extensionList;
      const updatedList = extensionList.filter((ext) => ext.name !== name);

      localStorage.setItem("extensionList", JSON.stringify(updatedList));

      set({
        extensionList: updatedList,
        filteredExtensionList: updatedList,
      });
    },

    toggleExtension: (name) => {
      const currentFilter = get().currentFilter;
      const extensionList = get().extensionList;

      const updatedList = extensionList.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      );
      localStorage.setItem("extensionList", JSON.stringify(updatedList));

      const filteredList =
        currentFilter === "all"
          ? updatedList
          : updatedList.filter(
              (ext) =>
                (ext.isActive && currentFilter === "active") ||
                (!ext.isActive && currentFilter === "inactive")
            );

      set({
        extensionList: updatedList,
        filteredExtensionList: filteredList,
      });
    },

    fillExtensionList: () => {
      localStorage.setItem("extensionList", JSON.stringify(data));

      set({
        extensionList: data,
        filteredExtensionList: data,
      });
    },
  };
});
