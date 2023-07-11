import CalendarIcon from "../../assets/icons/CalendarIcon"


const CallToAction = () => {
    return (
        <div className="call-to-action">
          <a href="#contacto" className="flex items-center gap-2 bg-customLightBg2 shadow-xl w-fit h-fit rounded-full hover:transition-colors hover:bg-customLightBg3Hover">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white p-2 my-3 ml-2">
              <CalendarIcon />
            </div>
            <div className="text-white font-bold text-lg pr-2">Agenda Tu Consulta</div>
          </a>
        </div>
    )
}

export default CallToAction