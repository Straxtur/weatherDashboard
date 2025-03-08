import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main id="layout" className="w-full h-screen overflow-x-hidden grid md:grid-cols-2 p-4 gap-4">
      {children}
    </main>
  )
}

export default Layout
