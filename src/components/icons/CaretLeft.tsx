interface CaretLeftProps {
  width: string
  height: string
  color?: string
}

export default function CaretLeft({ width, height, color = "white" }: CaretLeftProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{ fill: color }}
      viewBox="0 0 256 256"
    >
      <path d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z" />
    </svg>
  )
}
