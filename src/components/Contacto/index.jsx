import { motion } from "framer-motion"
/* import Form from '../Form' */

import InstagramIcon from '../../assets/icons/InstagramIcon'
import FacebookIcon from '../../assets/icons/FacebookIcon'
import LinkedinIcon from '../../assets/icons/LinkedinIcon.jsx'
import mailIcon from '../../assets/icons/envelope.svg'
/* import Logo from '../../assets/imgs/logo.png'
import MobileIcon from '../../assets/icons/MobileIcon' */
import CardContact from "../CardContact"

const Contacto = () => {
  return (
    <>
    <section id="contacto" className=" w-full">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="custom-block-big-title text-customLightBg3 flex flex-col justify-center items-center mt-28 mb-5 " >Contacto</h2>
      <p className="flex flex-col justify-center items-center  mx-10">
        <span className="text-customLightBg3 text-center break-words">Estoy aquí para ayudarte en tu camino hacia el bienestar emocional. No dudes en ponerte en contacto conmigo para comenzar tu proceso de transformación.</span>
      </p>
      <div className="container w-full flex flex-col-reverse md:flex-row-reverse m-auto ">
        <div className="socials flex flex-col justify-center items-center mt-10 mb-10">
          <p className="text-customLightBg3 break-words text-center mx-10 ">Sígueme en mis redes sociales para obtener inspiración diaria, consejos útiles y contenido relevante sobre salud mental y crecimiento personal.</p>
          <div className="w-fit  gap-4 mt-10">
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
      <CardContact
        key="contact"
        nombre="Raúl Dávila Psicologo"
        email="raulpsicologo.contacto@gmail.com"
        telLink="+528681596775"
        tel="(+52) 868 159 6775"

      />
      </div>
      {/* <Form /> Disabled for now*/}
      </motion.div>
    </section>
    </>
  )
}

export default Contacto