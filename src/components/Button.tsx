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
        "px-4 py-2 text-sm font-medium border rounded-full outline-none outline-offset-0 sm:text-base",
        className
      )}
      type={type}
      {...rest}
    >
      {label}
    </button>
  );
}
