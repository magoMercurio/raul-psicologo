

const Cards = ( { description, image }) => {
  return (
    <div
      className="w-11/12 h-fit sm:w-4/5 md:w-auto md:h-[370px] lg:w-auto custom-border-gray-darker rounded-xl bg-white shadow-2xl flex flex-col justify-start px-6 py-4 my-5 "
        
    >
      <div className="flex justify-start">
        <img src={image} alt="" width="50px" />
      </div>
        <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
          <div className="flex flex-col ml-4">
            <div className="">
              {description}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cards