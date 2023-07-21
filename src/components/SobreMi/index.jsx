import { motion } from "framer-motion";
import { aboutData } from '../../Data/data.js'
import Cards from '../Cards'

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
            <h2 className="mt-6 mb-20  custom-block-big-title text-customLightBg3 text-center ml-20 mr-20 ">
              Terapeuta licenciado en Psicología con formación en Bioneuroemoción.
            </h2>

            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center mt-10">
              {aboutData.map((about, index) => (
                <Cards key={index} 
                title={about.title}
                description={about.description}
                image={about.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </section>
  )
}

export default SobreMi