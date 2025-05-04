import { Button } from "./Button";
import { useExtensionStore } from "../stores/useExtensionStore";
import ExtensionCard from "./ExtensionCard";
import chitoge from "../assets/images/chitoge.png";

const activeFilterBtnClass =
  "bg-filter-btn-active-background text-filter-btn-active-foreground focus-visible:outline-filter-btn-ring focus-visible:outline-offset-1 focus-visible:border-filter-btn-focus-border border-filter-btn-active-border hover:bg-filter-btn-active-hover-background";

const inactiveFilterBtnClass =
  "focus-visible:outline-filter-btn-ring focus-visible:bg-filter-btn-focus-background focus-visible:border-filter-btn-focus-border text-filter-btn-inactive-foreground  bg-filter-btn-inactive-background border-filter-btn-inactive-border focus-visible:outline-offset-2 hover:bg-filter-btn-inactive-hover-background";

export default function ExtensionGrid() {
  const currentFilter = useExtensionStore((state) => state.currentFilter);
  const filteredExtensionList = useExtensionStore(
    (state) => state.filteredExtensionList
  );
  const filterExtensionList = useExtensionStore(
    (state) => state.filterExtensionList
  );

  return (
    <section className="col-start-2 space-y-8 md:space-y-4">
      <header className="space-y-4 text-center sm:flex sm:items-center sm:justify-between">
        <h1
          className="text-2xl font-bold md:text-3xl text-extension-grid-title"
          id="extension-list"
        >
          Extensions List
        </h1>

        <nav className="space-x-2" aria-label="Extension Filters">
          <Button
            className={
              currentFilter === "all"
                ? activeFilterBtnClass
                : inactiveFilterBtnClass
            }
            label="All"
            onClick={() => filterExtensionList("all")}
          />
          <Button
            className={
              currentFilter === "active"
                ? activeFilterBtnClass
                : inactiveFilterBtnClass
            }
            label="Active"
            onClick={() => filterExtensionList("active")}
          />
          <Button
            className={
              currentFilter === "inactive"
                ? activeFilterBtnClass
                : inactiveFilterBtnClass
            }
            label="Inactive"
            onClick={() => filterExtensionList("inactive")}
          />
        </nav>
      </header>

      <section
        className="grid gap-2.5 extensions-list"
        aria-labelledby="extension-list"
      >
        {filteredExtensionList && filteredExtensionList.length > 0 ? (
          filteredExtensionList.map((extension) => (
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
