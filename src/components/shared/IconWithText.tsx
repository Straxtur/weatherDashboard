import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const IconWithText = ({ children }: Props) => {
  return <div className="flex h-fit w-fit items-center justify-center gap-2">{children}</div>
}

export default IconWithText
