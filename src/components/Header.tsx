import { Link } from "react-router-dom"

import Logo from "../assets/logo.png"

export function Header() {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div>
        <img src={Logo} alt="" width={300} className="mt-4" />
      </div>

      <div className="mt-6 mx-8 flex justify-center items-center">
        <div className="flex flex-wrap items-center justify-center gap-6 py-2 px-6 rounded-xl bg-lac-blue-dark">
          <a
            to={"#"}
            className="text-lg font-semibold text-white hover:text-sky-400"
          >
            Colesterol LDL/VLDL
          </a>{" "}
          <span className="text-white max-sm:hidden">|</span>
          <a
            to={"#"}
            className="text-lg font-semibold text-white hover:text-sky-400"
          >
            Índice de Homa
          </a>
        </div>
      </div>
    </div>
  )
}
