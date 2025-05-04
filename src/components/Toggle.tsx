import { InputHTMLAttributes } from "react";

type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  isActive: boolean;
};

export function Toggle({ isActive, ...rest }: ToggleProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" {...rest} />
      <div className="relative w-11 h-6 bg-toggle-background peer-focus-visible:outline peer-focus-visible:outline-toggle-ring rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-toggle-thumb-border after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-toggle-thumb-color after:border-toggle-thumb-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-toggle-checked-background peer-focus-visible:outline-offset-2 "></div>
      <span className="sr-only">{isActive ? "Enabled" : "Disabled"}</span>
    </label>
  );
}
