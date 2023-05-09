import { ReactNode } from 'react'

type BoxProps = {
  color?: string
  title?: string
  className?: string
  children?: ReactNode
}
export default function Box({
  className,
  color,
  title,
  children
}: BoxProps) {
  return (
    <div className={`pa-2 border-${color} ${className}`}>
      {title && <h3 className={`txt-${color} text-center`}>{title}</h3>}
      {children}
    </div>
  )
}
