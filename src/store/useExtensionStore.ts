import { create } from "zustand";
import { data } from "../assets/data.tsx";

type State = {
  extensionList: typeof data;
  currentFilter: string;
};

type Actions = {
  filterExtensionList: (filter: string) => void;
  removeExtension: (name: string) => void;
};

export const useExtensionStore = create<State & Actions>((set, get) => ({
  extensionList: data,
  currentFilter: "all",
  filterExtensionList: (filter = "all") => {
    const { currentFilter,extensionList } = get();
    if (filter === currentFilter) return; // No change, avoid re-render

    const filteredList =
      filter === "all"
        ? data
        : extensionList.filter(
            (extension) =>
              (extension.isActive && filter === "active") ||
              (!extension.isActive && filter === "inactive")
          );

    set({
      extensionList: filteredList,
      currentFilter: filter,
    });
  },
  removeExtension: (name) => {
    const { extensionList } = get();
    const updatedList = extensionList.filter(
      (extension) => extension.name !== name
    );
    set({ extensionList: updatedList });
  },
}));
