import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const bgImage = "bgImages/cyber-city.webp"
  return (
    <main
      id="layout"
      className="grid h-screen w-full gap-4 overflow-x-hidden p-4 md:grid-cols-2 grid-rows-[100px_auto_100px]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {children}
    </main>
  )
}

export default Layout
