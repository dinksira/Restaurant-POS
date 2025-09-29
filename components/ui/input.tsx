import React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
  <input
    className={`border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
    {...props}
  />
)