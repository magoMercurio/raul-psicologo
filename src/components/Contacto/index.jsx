import { motion } from "framer-motion"
import Form from '../Form'

import InstagramIcon from '../../assets/icons/InstagramIcon'
import FacebookIcon from '../../assets/icons/FacebookIcon'
import LinkedinIcon from '../../assets/icons/LinkedinIcon.jsx'
import mailIcon from '../../assets/icons/envelope.svg'

const Contacto = () => {
  return (
    <>
    <section id="contacto" className="mt-20">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="custom-block-big-title text-customLightBg3 flex flex-col justify-center items-center mt-48 mb-10 " >Contacto</h2>
      <p className="flex flex-col justify-center items-center mb-10 mx-10">
        <span className="text-customPrimary text-center">Estoy aquí para ayudarte en tu camino hacia el bienestar emocional. No dudes en ponerte en contacto conmigo para comenzar tu proceso de transformación.</span>
      </p>
      <div className="flex flex-col justify-around items-center md:flex-row mt-10 mx-10">
        <div className="flex flex-col justify-center items-center md:w-1/2 mb-10">
          <p className="text-customLightBg3 break-words ">Sígueme en mis redes sociales para obtener inspiración diaria, consejos útiles y contenido relevante sobre salud mental y crecimiento personal.</p>
          <div className="w-fit mx-auto lg:mx-0 gap-4 mt-10">
                
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 custom-border-gray bg-customDarkBg2   hover:bg-customLightBg3Hover rounded-xl shadow-md"
                  href="https://www.facebook.com/raul.consciencia"
                  target="_blank"
                  aria-label="facebook" rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-customLightBg3Hover rounded-xl shadow-md"
                  href="https://www.instagram.com/consciencia_rd/"
                  target="_blank"
                  aria-label="instagram" rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-customLightBg3Hover rounded-xl shadow-md"
                  href="https://www.linkedin.com/in/raul-davila-61977415/"
                  target="_blank"
                  aria-label="linkedin" rel="noreferrer"
                >
                  <LinkedinIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-customLightBg3Hover rounded-xl shadow-md"
                  href="mailto:raulpsicologo.contacto@gmail.com"
                >
                  <img src={mailIcon} alt="mail" className="w-6 h-6"/>
                </a>
              </div>
        </div>
      {/* <Form /> Disabled for now*/}
      </div>
      </motion.div>
    </section>
    </>
  )
}

export default Contacto