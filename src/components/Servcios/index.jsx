import { motion } from "framer-motion"
import { servicesData } from '../../Data/data.js'
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";



const Servicios = () => {
  return (
    <>
    <section>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="custom-block-big-title text-customPrimary " > Mis Servicios</h2>
      <ul className="mt-6 mb-6 text-white">
        {
        servicesData.map((service, index) => (
          <li className="mb-4 flex" key={`${service.title} - ${index}`}
          >
            <CheckArrowIcon />
            <span>{ service.description }</span>
          </li>
        ))}
      </ul>
    </motion.div>
    </section>
    </>
  )
}

export default Servicios