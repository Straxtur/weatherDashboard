import { FormEvent } from "react"

interface FormLocationProps {
  setLocate: React.Dispatch<React.SetStateAction<string>>
}

const FormLocation = ({ setLocate }: FormLocationProps) => {
  const handledOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const dataObj = Object.fromEntries(formData.entries())

    setLocate(dataObj.location as string)
  }

  return (
    <form onSubmit={handledOnSubmit}>
      <div className="flex flex-col items-center justify-center gap-4 text-white">
        <div className="flex flex-col items-start justify-start gap-2">
          <label className="text-md" htmlFor="location">
            Ciudad ó País
          </label>
          <input
            name="location"
            placeholder="Madrid, España..."
            type="text"
            className="bg-black/30 px-3 py-2 text-lg"
          />
        </div>
        <button className="h-fit w-full cursor-pointer rounded-lg bg-black/80 px-3 py-1 text-white transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95">
          Buscar
        </button>
      </div>
    </form>
  )
}

export default FormLocation
