import { clsx } from "clsx";

const sizes = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

const variants = {
  light: "border-gray-900",
  primary: "border-gray-50",
};

export type SpinnerProps = {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  className?: string;
};

export const Spinner = ({
  size = "md",
  variant = "primary",
  className = "",
}: SpinnerProps) => (
  <div
    className={clsx(
      "animate-spin rounded-full border-b-2",
      sizes[size],
      variants[variant],
      className
    )}
  />
);
