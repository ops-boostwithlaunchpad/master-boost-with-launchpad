import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export default function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`max-w-[1400px] mx-auto px-6 md:px-12 ${className}`.trim()}
    >
      {children}
    </Component>
  )
}
