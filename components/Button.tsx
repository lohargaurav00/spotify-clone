import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
          w-full
          rounded-full
          bg-green-500
          border
          border-transparent
          px-3
          py-3
          disabled:cursor-not-allowed
          disabled:opacity-50
          text-black
          font-bold
          hover:opacity-75
          transition`,
          className
        )}
        disabled={disabled}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
