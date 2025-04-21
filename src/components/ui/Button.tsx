import { forwardRef } from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
      primary:
        "bg-primary hover:bg-primary-dark text-white focus:ring-primary/50",
      secondary:
        "bg-secondary hover:bg-secondary/80 text-white focus:ring-secondary/50",
      outline:
        "bg-transparent border border-gray hover:bg-gray-light text-gray-dark focus:ring-gray/50",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm rounded",
      md: "px-4 py-2 text-base rounded-md",
      lg: "px-6 py-3 text-lg rounded-lg",
    };

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      const linkProps = isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

      return (
        <Link href={href} className={buttonClasses} {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
