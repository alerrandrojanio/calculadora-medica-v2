import { useEffect, useState } from "react"

export function FormCholesterol() {
  const [colesterol, setColesterol] = useState("")
  const [hdl, setHdl] = useState("")
  const [triglicerideos, setTriglicerideos] = useState("")

  const [ldl, setLdl] = useState("")
  const [vldl, setVldl] = useState("")

  const resultadoLdl = (
    parseFloat(colesterol) -
    parseFloat(hdl) -
    parseFloat(triglicerideos) / 5
  ).toFixed(2)
  const resultadoVldl = (parseFloat(triglicerideos) / 5).toFixed(2)

  useEffect(() => {
    setLdl(resultadoLdl.toString())
    setVldl(resultadoVldl.toString())
  }, [colesterol, hdl, triglicerideos])

  return (
    <div className="flex justify-center items-center flex-col gap-8 py-10 px-16">
      <div className="group relative">
        <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
          Colesterol Total (mg/dL)
        </label>
        <input
          type="number"
          className="relative w-96 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark"
          value={colesterol}
          onChange={(e) => setColesterol(e.target.value)}
        />
      </div>

      <div className="group relative">
        <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
          HDL (mg/dL)
        </label>
        <input
          type="number"
          className="relative w-96 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark"
          value={hdl}
          onChange={(e) => setHdl(e.target.value)}
        />
      </div>

      <div className="group relative">
        <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
          Triglicerídeos (mg/dL)
        </label>
        <input
          type="number"
          className="relative w-96 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark"
          value={triglicerideos}
          onChange={(e) => setTriglicerideos(e.target.value)}
        />
      </div>

      <div className="flex w-96 justify-between">
        <div className="group relative">
          <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
            LDL (mg/dL)
          </label>
          <input
            type="number"
            className="relative w-44 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark"
            value={ldl}
            onChange={(e) => setLdl(e.target.value)}
            disabled
          />
        </div>

        <div className="group relative">
          <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
            VLDL (mg/dL)
          </label>
          <input
            type="number"
            className="relative w-44 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark"
            value={vldl}
            onChange={(e) => setVldl(e.target.value)}
            disabled
          />
        </div>
      </div>
    </div>
  )
}
