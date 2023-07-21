

const Cards = () => {
  return (
    <div
      className="w-11/12 h-fit sm:w-4/5 md:w-auto md:h-[350px] lg:w-auto custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col justify-start px-6 py-4 my-5 "
        key={`${about.title} - ${index}`}
    >
      <div className="flex justify-start">
        <img src={about.image} alt="" width="50px" />
      </div>
        <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
          <div className="flex flex-col ml-4">
            <div className="text-customLightBg3">
              {about.description}
            </div>
          </div>
        </div>
      </div>
  )
}