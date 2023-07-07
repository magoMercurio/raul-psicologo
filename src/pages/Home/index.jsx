import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import SobreMi from "../../components/SobreMi"
import Servicios from "../../components/Servcios"
import Contacto from "../../components/Contacto"
import ScrollUpButton from "../../assets/icons/ScrollUpButton"





const Home = () => {
  return (
    <Layout>
      <Hero />
      <SobreMi />
      <Servicios />
      <Contacto />
      <ScrollUpButton />
    </Layout>
  )
}

export default Home
