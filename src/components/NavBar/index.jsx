import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Facebookicon from '../../assets/icons/FacebookIcon'
import Logo from '../../assets/imgs/logo.png'


const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Sobre mi", href: "#sombremi", ariaLabel: "Sobre mi" },
  { label: "Servicios", href: "#servicios", ariaLabel: "Servicios" },
  { label: "Contacto", href: "#contacto", ariaLabel: "Contacto" },
  { label: "Blog", href: "#blog", ariaLabel: "Blog" },
]

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-screen h-20 top-0 flex flex-wrap justify-center items-center fixed bg-customLightBg1/90 z-40 backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="#home" >
            <div className="flex justify-start items-center grow basis-0">
              <div>
                <img src={Logo} alt="Logo" className="w-[90px] h-[90px] object-contain mr-4" />
              </div>
                <span className="font-['openSans'] font-bold text-2xl " >Raul Davila Psicologo</span>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2 gap-4">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className="custom-button-colored"
              href="https://www.facebook.com/raul.consciencia"
              target="_blank"
              aria-label="facebook" rel="noreferrer"
            >
              <Facebookicon />
              
            </a>
          </div>
        </motion.div>
        
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customLightBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customLightBg1/90 backdrop-blur-xl  z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customLightBg3  pt-10 
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
              className="custom-button-colored"
              href="https://www.facebook.com/raul.consciencia"
              target="_blank"
              aria-label="facebook" rel="noreferrer"
            >
              <Facebookicon />

            </a>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


export default NavBar