import { useState } from "react";
import { useExtensionStore } from "../store/useExtensionStore";
import { Button } from "./Button";

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
  const removeExtension = useExtensionStore((state) => state.removeExtension);
  const [enabled, setEnabled] = useState(isActive);

  const headingId = `${name.replace(/\s+/g, "-").toLowerCase()}-heading`;
  const descriptionId = `${name
    .replace(/\s+/g, "-")
    .toLowerCase()}-description`;

  return (
    <article
      className="p-4 space-y-5 border shadow-md border-neutral-200 bg-neutral-0 rounded-2xl md:space-y-10"
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
    >
      <div className="flex gap-4">
        <img className="self-start" src={logo} alt={`${name} logo`} />
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-neutral-900" id={headingId}>
            {name}
          </h2>
          <p className="text-sm text-neutral-600" id={descriptionId}>
            {description}
          </p>
        </div>
      </div>

      <form>
        <fieldset className="flex items-center justify-between">
          <legend className="sr-only">Extension Actions</legend>
          <Button label="Remove" onClick={() => removeExtension(name)} />

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              // checked={isActive}
              // aria-checked={isActive}
            />
            <div className="relative w-11 h-6 bg-neutral-300 peer-focus-visible:outline peer-focus-visible:outline-red-400 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-neutral-0 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-0 after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-700 peer-focus-visible:outline-offset-2"></div>
            <span className="sr-only">{enabled ? "Enabled" : "Disabled"}</span>
          </label>
        </fieldset>
      </form>
    </article>
  );
}
