interface CaretRightProps {
  width: string
  height: string
  color?: string
}

export default function CaretRight({ width, height, color = "white" }: CaretRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{ fill: color }}
      viewBox="0 0 256 256"
    >
      <path d="m181.66 133.66-80 80a8 8 0 0 1-11.32-11.32L164.69 128 90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}
