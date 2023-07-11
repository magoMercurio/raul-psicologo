import MobileIcon from "../../assets/icons/MobileIcon"
import Logo from '../../assets/imgs/logo.png'

const CardContact = ({ nombre, email, telLink, tel }) => {


  return (
    <div className=" contact-direct-container  flex flex-col justify-center items-center  my-10 mx-5 p-4 bg-customLightBg1 shadow-md rounded-2xl">
    <div className=" logo-container flex justify-start items-center ">
          <div>
            <img src={Logo} alt="Logo" className="w-[90px] h-[90px] object-contain mr-4" />
          </div>
            <span className="font-['openSans'] font-bold text-2xl " >{ nombre }</span>
        </div>
        <div className="w-full">
          <div className="text-customLightBg3  text-center mb-4">
            Puedes contactarme para Agendar tu consulta via Telefonica o Whatsapp.
          </div>
          <div className="text-customLightBg3 text-center text-lg font-bold flex flex-row justify-center hover:text-customLightBg3Hover cursor-pointer" >
          <MobileIcon />
          <a href={`tel:${ telLink }`}>{ tel}</a>
          </div>
          <div className="w-full flex flex-col justify-center items-center  ">
            <p className=" text-customLightBg3 text-center mt-4 "> Correo Electrónico 
            <p className="w-full mt-2 mx-auto text-center">
            <a className=" text-customLightBg3 text-xs sm:text-lg font-bold break-words hover:text-customLightBg3Hover cursor-pointer" href={`mailto:${ email }?subject=Consulta%20`}>{ email }</a></p>
            </p>
          </div>
        </div>

    </div>
  )
}

export default CardContact