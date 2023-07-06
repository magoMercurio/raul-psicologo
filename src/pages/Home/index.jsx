import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import SobreMi from "../../components/SobreMi"
import Servicios from "../../components/Servcios"
import Contacto from "../../components/Contacto"



const Home = () => {
  return (
    <Layout>
      <Hero />
      <SobreMi />
      <Servicios />
      <Contacto />
    </Layout>
  )
}

export default Home
