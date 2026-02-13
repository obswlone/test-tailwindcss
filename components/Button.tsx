import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-primary text-white px-5 py-2 rounded-md hover:bg-primary-shade-1 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
