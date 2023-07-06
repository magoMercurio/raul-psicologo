import { motion } from "framer-motion";

import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";

import section1 from '../../assets/imgs/logo.png'
import section2 from '../../assets/imgs/logo.png'
import section3 from '../../assets/imgs/logo.png'
import section4 from '../../assets/imgs/logo.png'



const SobreMi = () => {
  return (
    <section
      className="w-full "
      id="sombremi"
    >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col items-center justify-center  md:pl-4 xl:pr-16 xl:pl-16 mt-20">
        <div className="w-full  mb-10 ">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="mt-6 mb-8  custom-block-big-title text-customLightBg3 text-center ml-20 mr-20">
              Terapeuta licenciado en Psicología con formación en Bioneuroemoción.
            </h2>
            <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-8 ">
              <div className="flex flex-col lg:flex-row items-center gap-8 p-6">
                <p className="mb-10 text-blue-500 leading-loose">
                Durante más de 5 años, he tenido el privilegio de acompañar a personas en su camino hacia la superación de problemas y la búsqueda de una vida más tranquila y plena.
                </p>
                <img src={section1} alt="" className="w-[40%] " />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-8 p-6">
                <p className="mb-10 text-blue-500 leading-loose">
                  Combino los mejores elementos de la terapia psicológica con el poderoso método de la Bio-neuroemoción. Esta combinación única me permite abordar los desafíos desde diferentes perspectivas, facilitando un proceso de transformación profunda y duradera.
                </p>
                <img src={section1} alt="" className="w-[40%] " />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
            <div className="mb-4 py-3 pl-3 pr-2 rounded">
            <p className=" text-blue-500 leading-loose">
              Mi misión es ayudar a las personas a encontrar la paz mental y emocional que tanto anhelan. 
              </p>
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <p className=" text-blue-500 leading-loose">
                Creo en la importancia de crear un espacio seguro y acogedor para mis clientes, donde puedan sentirse escuchados y comprendidos en cada paso del camino.
                </p>
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <p className=" text-blue-500 leading-loose">
                Mi enfoque se basa en una colaboración activa y empática, adaptando mis técnicas y herramientas a las necesidades individuales de cada persona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    )
}

export default SobreMi