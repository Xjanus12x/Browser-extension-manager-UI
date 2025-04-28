import { Button } from "./Button";
import { useExtensionStore } from "../store/useExtensionStore";
import ExtensionCard from "./ExtensionCard";
import chitoge from "../assets/images/chitoge.png";
import { cn } from "../utils/cn";

const activeFilterClass =
  "bg-red-700 text-neutral-0 hover:bg-red-500 focus-visible:bg-red-500";

export default function ExtensionGrid() {
  const currentFilter = useExtensionStore((state) => state.currentFilter);
  const extensionList = useExtensionStore((state) => state.extensionList);
  const filterExtensionList = useExtensionStore(
    (state) => state.filterExtensionList
  );

  return (
    <section className="col-start-2 space-y-8 md:space-y-4">
      <header className="space-y-4 text-center sm:flex sm:items-center sm:justify-between">
        <h1
          className="text-2xl font-bold md:text-3xl text-neutral-900"
          id="extension-list"
        >
          Extensions List
        </h1>
        <nav className="space-x-2" aria-label="Extension Filters">
          <Button
            className={cn(currentFilter === "all" && activeFilterClass)}
            label="All"
            onClick={() => filterExtensionList("all")}
          />
          <Button
            className={cn(currentFilter === "active" && activeFilterClass)}
            label="Active"
            onClick={() => filterExtensionList("active")}
          />
          <Button
            className={cn(currentFilter === "inactive" && activeFilterClass)}
            label="Inactive"
            onClick={() => filterExtensionList("inactive")}
          />
        </nav>
      </header>

      <section
        className="grid gap-2.5 extensions-list"
        aria-labelledby="extension-list"
      >
        {extensionList && extensionList.length > 0 ? (
          extensionList.map((extension) => (
            <ExtensionCard {...extension} key={extension.name} />
          ))
        ) : (
          <ExtensionCard
            logo={chitoge}
            name="BAKKA! NOTHING IS LEFT!"
            description="You've removed all extensions. Time to add some back!"
            isActive={false}
          />
        )}
      </section>
    </section>
  );
}
