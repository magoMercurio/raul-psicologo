import { Link } from "react-router-dom";
import { socialLinks } from "../../Data/data.js";



import TwitterIcon  from '../../assets/icons/FacebookIcon';
import  CheckArrowIcon  from "../../assets/icons/CheckArrowIcon";
import LinkedinIcon from '../../assets/icons/FacebookIcon'

import Logo from '../../assets/imgs/logo.png'



const Footer = () => {
  return (
    <footer className="bottom-0" >
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
              <Link to="/" >
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white font-['Inter'] font-bold text-xl">
                <img src={Logo} alt="Logo" className="w-16 mr-3" />
              </div>
            </div>
          </Link>
                <div className="font-bold text-xl">
                  Raúl Dávila Psicologo
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-customPrimary leading-loose text-center lg:text-left mx-auto lg:mx-0">
              No esperes más, da el primer paso hacia el cambio positivo. ¡Conéctate conmigo hoy mismo y juntos construiremos un camino hacia tu bienestar emocional!
                <a
                  href="mailto:raulpsicologo.contacto@gmail.com"
                  target="_blank"
                  className="text-customSecondary hover:text-customLightBg3Hover ml-1.5 "
                  aria-label="Mail" rel="noreferrer"
                >
                  Aqui.
                </a>
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="mailto:raulpsicologo.contacto@gmail.com"
                >
                  <CheckArrowIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/mago_d_Mercurio"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.linkedin.com/in/rauldavilaf/"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>


            <div className="w-full lg:w-2/3  lg:pl-16 hidden md:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold">Redes Sociales</h3>
                <ul className="flex flex-row lg:flex-col items-center gap-4 ">
                  {socialLinks.map((socialLink, index) => (
                    <li key={`${socialLink.social} - ${index}`} className="mb-4">
                      <a
                        className="text-customSecondary hover:text-customLightBg3Hover"
                        href={socialLink.link}
                        aria-label=""
                      >
                        {socialLink.social}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023. Creado por Raúl Dávila
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer