export function FormCholesterol() {
  return (
    <div className="flex justify-center items-center flex-col gap-8 p-14">
      <div className="group relative">
        <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
          Colesterol Total (mg/dL)
        </label>
        <input
          type="number"
          className="relative w-96 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark"
          // value={colesterol}
          // onChange={(e) => setColesterol(e.target.value)}
        />
      </div>

      <div className="group relative">
        <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
          HDL (mg/dL)
        </label>
        <input
          type="number"
          className="relative w-96 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark"
          // value={colesterol}
          // onChange={(e) => setColesterol(e.target.value)}
        />
      </div>

      <div className="group relative">
        <label className="absolute left-2 top-[-13px] z-10 bg-white text-lac-gray py-0 px-[5px] text-md font-semibold group-focus-within:text-lac-blue-dark">
          Triglicerídeos (mg/dL)
        </label>
        <input
          type="number"
          className="relative w-96 h-14 rounded-lg border-2 border-lac-gray px-2 pt-2 text-center text-2xl font-semibold bg-transparent focus:border-lac-blue-dark focus:outline-none focus:ring-1 focus:ring-lac-blue-dark"
          // value={colesterol}
          // onChange={(e) => setColesterol(e.target.value)}
        />
      </div>
    </div>
  )
}
