import React from "react"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props} />
)