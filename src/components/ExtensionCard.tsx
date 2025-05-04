import { cn } from "../utils/cn";
import { useExtensionStore } from "../stores/useExtensionStore";
import { Button } from "./Button";
import { Toggle } from "./Toggle";

type ExtensionCardProps = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};
export default function ExtensionCard({
  logo,
  name,
  description,
  isActive,
}: ExtensionCardProps) {
  const isExtensionListEmpty = useExtensionStore(
    (state) => state.extensionList.length === 0
  );
  const removeExtension = useExtensionStore((state) => state.removeExtension);
  const toggleExtension = useExtensionStore((state) => state.toggleExtension);
  const fillExtensionList = useExtensionStore(
    (state) => state.fillExtensionList
  );
  const headingId = `${name.replace(/\s+/g, "-").toLowerCase()}-heading`;
  const descriptionId = `${name
    .replace(/\s+/g, "-")
    .toLowerCase()}-description`;

  return (
    <article
      className="p-4 gap-5 border shadow-md border-card-border bg-card-bg rounded-2xl md:gap-10 grid grid-rows-[auto_auto] content-between"
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
    >
      <div className="flex gap-4">
        <img className="self-start" src={logo} alt={`${name} logo`} />
        <div className="space-y-2">
          <h2
            className="text-lg font-bold text-card-title-foreground"
            id={headingId}
          >
            {name}
          </h2>
          <p
            className={cn(
              "text-sm text-card-description-foreground",
              isActive && "line-clamp-1"
            )}
            id={descriptionId}
          >
            {description}
          </p>
        </div>
      </div>

      <form className="h-fit">
        <fieldset className="flex items-center justify-between">
          <legend className="sr-only">Extension Actions</legend>
          <Button
            className="bg-card-btn-background text-card-btn-foreground border-card-btn-border hover:bg-card-btn-hover-background focus-visible:bg-card-btn-focus-background focus-visible:border-card-btn-focus-border focus-visible:outline-card-btn-ring hover:text-card-btn-hover-foreground hover:border-card-btn-hover-border focus-visible:outline-offset-2"
            label={`${isExtensionListEmpty ? "Reset" : "Remove"}`}
            onClick={() =>
              isExtensionListEmpty ? fillExtensionList() : removeExtension(name)
            }
          />

          <Toggle
            checked={isActive}
            aria-checked={isActive}
            onChange={() => toggleExtension(name)}
            isActive={isActive}
          />
        </fieldset>
      </form>
    </article>
  );
}
