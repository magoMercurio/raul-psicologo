import heroImg from '../../assets/imgs/heroimg.webp'

const Hero = () => {

    return (
      <section className="  flex flex-col justify-center items-center custom-bg-lightGradient1 " id="home">
        <span className="text-customSecondary break-words text-center text-sm sm:text-base  mb-10 sm:mt-10 mt-16  font-bold">Bienvenido/a a un espacio  crecimiento personal y de sanación, donde encontrarás el apoyo y la guía necesarios para alcanzar tu bienestar emocional.</span>

        <div className="w-full flex flex-col md:flex-row justify-center items-center text-center gap-6 p-4  mb-10 ">
          <figure className='w-fit flex justify-center items-center'>
          <img src= {heroImg} alt="heroImg" className=" rounded-[45%] bg-customLightBg1 w-[40%] sm:w-[50%] md:w-[60%]  lg:w-[70%] "  />
          </figure>

          <div className='flex flex-col justify-center items-center'>
            <div className="text-customPrimary text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide px-8 sm:px-8 md:px-20 lg:px-4">
              <span className="inline">Raúl Dávila</span>
            </div>
            <div className="text-customSecondary  mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide px-8 sm:px-20 md:px-24 lg:px-24">
              Psicólogo
            </div>
          </div>
          

        </div>
      </section>
    )

}

export default Hero