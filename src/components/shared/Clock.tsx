import { useEffect, useState } from "react"

const Clock = () => {
  const [now, setNow] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date().toLocaleTimeString())
    }, 1000)

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="col-span-1 row-span-1 flex items-center justify-center md:col-span-2">
      <div className="glass-card px-6 py-2">
        <span className="text-4xl text-white">{now}</span>
      </div>
    </div>
  )
}

export default Clock
