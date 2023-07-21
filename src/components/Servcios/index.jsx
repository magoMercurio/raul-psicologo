import { motion } from "framer-motion"
import { servicesData } from '../../Data/data.js'

import  CheckArrowIcon  from "../../assets/icons/CheckArrowIcon";
import imgList1 from '../../assets/imgs/_dd420e26-0b69-46fd-bd82-3c220bc59e54.jpeg'
import imgList2 from '../../assets/imgs/_de552935-976f-45b1-ab52-4294dc8e6a47.jpeg'

const Servicios = () => {
  return (
    <>
    <section id="servicios">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="custom-block-big-title text-customLightBg3 flex flex-col justify-center items-center mb-10 mt-24 " >Servicios</h2>
      <p className="custom-content-title text-customPrimary text-center break-words mb-10 mx-20">Mi objetivo es proporcionarte un apoyo integral y personalizado para que puedas alcanzar una vida más plena y satisfactoria. Cada uno de estos servicios se adapta a tus necesidades individuales, brindándote las herramientas y la orientación necesarias para tu crecimiento personal y emocional.</p>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 ml-10 mr-10">
        <div className="lg:w-1/2 flex items-start" >
          <img src={imgList1} alt="imglist" className="w-60 rounded-lg shadow-2xl" />
        </div>
        <div> 
          <ul className="mt-6 mb-6 p-6 flex flex-col justify-center items-start gap-4 bg-white h-full rounded-lg shadow-2xl">
          {
          servicesData.map((service, index) => (
            <li className="mb-4 mt-4 flex  text-customLightBg3" key={`${service.title} - ${index}`}
            >
              <CheckArrowIcon />
              <span>{ service.description }</span>
            </li>
          ))}
        </ul>
        </div>
        <div className="hidden md:flex  lg:w-1/2 items-end">
          <img src={imgList2} alt="imglist" className="w-60 rounded-lg shadow-2xl" />
        </div>
      </div>
      
    </motion.div>
    </section>
    </>
  )
}

export default Servicios