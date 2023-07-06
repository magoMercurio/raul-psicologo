import { motion } from "framer-motion";
import { aboutData } from '../../Data/data.js'

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
      <div className="flex flex-col items-center justify-center  md:pl-4 xl:pr-16 xl:pl-16 ">
        <div className="w-full  mb-10 ">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="mt-6 mb-20  custom-block-big-title text-customLightBg3 text-center ml-20 mr-20">
              Terapeuta licenciado en Psicología con formación en Bioneuroemoción.
            </h2>

            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center mt-10">
            {aboutData.map((about, index) => (
              <div
                className="w-11/12 h-fit sm:w-4/5 md:w-auto md:h-[350px] lg:w-auto custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col justify-start px-6 py-4 my-5"
                key={`${about.title} - ${index}`}
              >
                <div className="flex justify-start">
                  <img src={about.image} alt="" width="50px" />
                </div>
                <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                  <div className="flex flex-col ml-4">
                    <div className="custom-content-text-gray">
                      {about.description}
                    </div>
                  </div>
                </div>
              </div>
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