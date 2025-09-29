import React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "secondary" | "ghost" | "outline"
  size?: "icon"
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = "secondary",
  size,
  className = "",
  ...props
}) => {
  const base = "px-4 py-2 rounded font-medium transition";
  const variants: Record<string, string> = {
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
    ghost: "bg-transparent text-black hover:bg-gray-100",
    outline: "border border-gray-300 bg-white text-black hover:bg-gray-50",
  };
  const sizes: Record<string, string> = {
    icon: "p-2 w-10 h-10 flex items-center justify-center",
  };

  return (
    <button
      className={[
        base,
        variants[variant] || "",
        size ? sizes[size] : "",
        className,
      ].join(" ")}
      {...props}
    />
  );
};