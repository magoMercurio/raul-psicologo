import { motion } from "framer-motion"
import Form from '../Form'

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

      <Form />


      </motion.div>
    </section>
    </>
  )
}

export default Contacto