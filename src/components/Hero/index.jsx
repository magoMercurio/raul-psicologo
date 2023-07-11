import { motion } from "framer-motion"
import heroImg from '../../assets/imgs/heroimg.webp'
import CallToAction from "../CallToActionBtn"

const Hero = () => {

  return (
    <section className="  flex flex-col justify-center items-center  mb-0 w-full hero-bg-img bg-cover " id="home">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >  
      <p className="custom-block-big-title text-customLightBg3 break-words text-center text-sm sm:text-base font-bold mt-24 mb-20 ml-20 mr-20 " >Bienvenido/a a un espacio  crecimiento personal y de sanación, donde encontrarás el apoyo y la guía necesarios para alcanzar tu bienestar emocional.</p>

        <div className="w-full flex flex-col md:flex-row justify-center items-center text-center gap-6 p-4  mb-10 mt-20 "  >
          <figure className='w-fit flex justify-center items-center' >
          <img src= {heroImg} alt="heroImg" className=" rounded-[45%] bg-customLightBg1 w-[40%] sm:w-[50%] md:w-60  lg:w-[70%] shadow-lg "  />
          </figure>

          <div className='flex flex-col justify-center items-center' >
            <div className="text-customPrimary text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide px-8 sm:px-8 md:px-20 lg:px-4" >
              <span className="inline">Raúl Dávila</span>
            </div>
            <div className="text-customSecondary  mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide px-8 sm:px-20 md:px-24 lg:px-24" >
              Psicólogo
            </div>
            
          </div>
        </div>
        <div className="relative w-full flex justify-center items-center mb-[-35px]">
          <CallToAction />
        </div>
        </motion.div>
      </section>
    )
}

export default Hero