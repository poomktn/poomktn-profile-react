import { CSSProperties, ReactNode } from 'react'

interface BoxProps {
  color?: string
  title?: string
  borderRadius?: string
  borderColor?: string
  backgroundColor?: string
  padding?: string
  margin?: string
  className?: string
  width?: string
  height?: string
  children?: ReactNode
}
export default function Box({
  borderRadius,
  borderColor,
  backgroundColor,
  className,
  color,
  padding,
  margin,
  title,
  width,
  height,
  children
}: BoxProps) {
  const style: CSSProperties = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderRadius: borderRadius,
    padding: padding,
    margin: margin,
    width: width,
    height: height
  }
  return (
    <div className={`pa-2 border-${color} ${className}`} style={style}>
      {title && <h3 className={`txt-${color} text-center`}>{title}</h3>}
      {children}
    </div>
  )
}
