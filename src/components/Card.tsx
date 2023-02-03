import Figure from "../assets/figure.png"

export function Card() {
  return (
    <div className="w-full h-full m-w-[720px] flex justify-center items-center bg-lac-blue-light">
      <div className="bg-white rounded-3xl w-[1088px] h-[666px] m-auto mx-6 flex justify-between flex-wrap shadow-2xl">
        <div>kdjfksjfksjdkfjd</div>
        <div className="h-[666px] w-[440px] bg-lac-blue-dark rounded-3xl flex justify-center items-end">
          <img src={Figure} alt="" className="mr-10" />
        </div>
      </div>
    </div>
  )
}
