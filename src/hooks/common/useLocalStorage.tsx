import { useCallback, useRef, useState } from "react"

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue !== null ? JSON.parse(storedValue) : initialValue
  })

  const initialValueRef = useRef(initialValue)

  const setLocalStorage = useCallback(
    (newValue: T) => {
      setValue(newValue)
      localStorage.setItem(key, JSON.stringify(newValue))
    },
    [key]
  )

  const removeFromLocalStorage = useCallback(() => {
    setValue(initialValueRef.current)
    localStorage.removeItem(key)
  }, [key])

  return [value, setLocalStorage, removeFromLocalStorage] as const
}

export default useLocalStorage
