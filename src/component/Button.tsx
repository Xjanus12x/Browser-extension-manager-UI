import { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { label: string };

export function Button({
  label,
  type = "button",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 text-sm font-medium border rounded-full shadow-sm bg-neutral-0 text-neutral-900 border-neutral-300 hover:bg-neutral-100 focus-visible:bg-neutral-100 outline-1 outline-red-400 outline-offset-2 focus-visible:border-neutral-0",
        className
      )}
      type={type}
      {...rest}
    >
      {label}
    </button>
  );
}
