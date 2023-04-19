import { useEffect, useState } from "react"
import * as Popover from "@radix-ui/react-popover"
import clsx from "clsx"

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
        {/* <div className="group relative">
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
        </div> */}

        <Popover.Root>
          <Popover.Trigger>
            <div className="group relative">
              <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
                LDL (mg/dL)
              </label>
              <input
                type="number"
                className={clsx(
                  "relative w-44 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark",
                  {
                    "border-green-500 ring-1 ring-green-500 grouptext-green-500:":
                      parseFloat(ldl) >= 100 && parseFloat(ldl) < 130,
                    "border-yellow-400 ring-1 ring-yellow-400":
                      parseFloat(ldl) >= 70 && parseFloat(ldl) < 100,
                    "border-orange-500 ring-1 ring-orange-500":
                      parseFloat(ldl) >= 50 && parseFloat(ldl) < 70,
                    "border-red-500 ring-1 ring-red-500": parseFloat(ldl) < 50,
                  }
                )}
                value={ldl}
                onChange={(e) => setLdl(e.target.value)}
                disabled
              />
            </div>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-lac-blue-dark flex flex-col z-10 gap-2">
              <div className="flex justify-center text-white text-sm">
                VALORES DE REFERÊNCIA
              </div>
              <div className="text-white text-sm flex flex-row gap-6">
                <div className="flex flex-col">
                  <span>RISCO BAIXO</span>
                  <span>RISCO INTERMEDIÁRIO</span>
                  <span>RISCO ALTO</span>
                  <span>RISCO MUITO ALTO</span>
                </div>
                <div className="flex flex-col">
                  <span>INFERIOR A 130 mg/dL</span>
                  <span>INFERIOR A 100 mg/dL</span>
                  <span>INFERIOR A 70 mg/dL</span>
                  <span>INFERIOR A 50 mg/dL</span>
                </div>
                <div className="flex flex-col gap-2 mt-[6px]">
                  <div className="w-3 h-3 border-2 border-white bg-green-500" />
                  <div className="w-3 h-3 border-2 border-white bg-yellow-400" />
                  <div className="w-3 h-3 border-2 border-white bg-orange-500" />
                  <div className="w-3 h-3 border-2 border-white bg-red-500" />
                </div>
              </div>

              <Popover.Arrow
                height={9}
                width={16}
                className="fill-lac-blue-dark"
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>
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
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-lac-blue-dark flex flex-col z-10 gap-2">
              <div className="flex justify-center text-white text-sm">
                VALORES DE REFERÊNCIA
              </div>
              <div className="text-white text-sm flex flex-row gap-6">
                <div className="flex flex-col">
                  <span>RISCO BAIXO</span>
                  <span>RISCO INTERMEDIÁRIO</span>
                  <span>RISCO ALTO</span>
                  <span>RISCO MUITO ALTO</span>
                </div>
                <div className="flex flex-col">
                  <span>INFERIOR A 130 mg/dL</span>
                  <span>INFERIOR A 100 mg/dL</span>
                  <span>INFERIOR A 70 mg/dL</span>
                  <span>INFERIOR A 50 mg/dL</span>
                </div>
                <div className="flex flex-col gap-2 mt-[6px]">
                  <div className="w-3 h-3 border-2 border-white bg-green-500" />
                  <div className="w-3 h-3 border-2 border-white bg-yellow-400" />
                  <div className="w-3 h-3 border-2 border-white bg-orange-500" />
                  <div className="w-3 h-3 border-2 border-white bg-red-500" />
                </div>
              </div>

              <Popover.Arrow
                height={9}
                width={16}
                className="fill-lac-blue-dark"
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  )
}
