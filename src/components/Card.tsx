import Figure from "../assets/figure.png"

import { FormCholesterol } from "./FormCholesterol"
import { Header } from "./Header"

export function Card() {
  return (
    <div className="w-full h-full m-w-[720px] flex justify-center items-center p-">
      <div className="bg-white rounded-3xl w-[1088px] h-[666px] m-auto mx-6 flex justify-between flex-wrap shadow-2xl ">
        <div className="h-[640px] m-auto">
          <Header />
          <FormCholesterol />
        </div>
        <div className="h-[666px] w-[440px] bg-lac-blue-dark rounded-3xl flex justify-center items-end">
          <img
            src={Figure}
            alt=""
            className="relative right-16 inline-block w-full "
          />
        </div>
      </div>
    </div>
  )
}
