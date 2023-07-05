import heroImg from '../../assets/imgs/heroimg.webp'

const Hero = () => {

    return (
      <section className="w-screen  flex flex-col justify-center items-center custom-bg-lightGradient1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0" id="home">
        <h1 className="text-customSecondary text-center text-sm sm:text-base  mb-6 sm:mt-10 mt-16  font-bold">Bienvenido/a a un espacio  crecimiento personal y de sanación, donde encontrarás el apoyo y la guía necesarios para alcanzar tu bienestar emocional.</h1>

        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 p-4 ">
          <figure className=' flex justify-center items-center w-[50%]'>
          <img src= {heroImg} alt="heroImg" className=" rounded-[45%] bg-customLightBg1 w-[80%] sm:w-[60%]  lg:w-[80%] "  />
          </figure>

          <div className='w-[50%] flex flex-col justify-center items-center'>
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