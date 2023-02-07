import Figure from "../assets/figure.png"

import { FormCholesterol } from "./FormCholesterol"
import { Header } from "./Header"

export function Card() {
  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-3xl w-[1088px] h-[666px] flex justify-between flex-wrap shadow-2xl">
        <div className="h-[666px] w-[440px] m-auto">
          <Header />
          <FormCholesterol />
        </div>
        <div
          className="h-[666px] w-[440px] bg-lac-blue-dark rounded-3xl flex justify-center items-end 
          max-sm:w-full max-sm:h-72 max-sm:rounded-none 
          max-md:w-full max-md:h-80 max-md:rounded-none
          max-lg:w-full max-lg:h-72 max-lg:rounded-none"
        >
          <img
            src={Figure}
            alt=""
            className="relative right-16 inline-block w-[1000px] 
            max-sm:w-72 max-sm:ml-8 
            max-md:w-80 max-md:ml-9
            max-lg:w-72"
          />
        </div>
      </div>
    </div>
  )
}
