import React from "react"

// Libraries
import { graphql, useStaticQuery } from "gatsby"

// Utils
import { colors } from "../utils/variables"

// Sections
// import Hero from "../sections/home/hero"
import HeroCarousel from "../sections/home/hero-carousel"
import Doctores from "../sections/home/doctores"
import NuestroServicios from "../sections/home/nuestros-servicios"
import Testimonios from "../sections/home/testimonios"
import Consultas from "../sections/home/consultas"
import AprendeconNosotros from "../sections/home/aprende-con-nosotros"
import ComuniadadMilito from "../sections/home/comunidad-milito"

// Layout
import Layout from "../layouts/layout-primary"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomepageHero {
        hero {
          titulo
          tituloEnNegro
          subtitulo
          backgroundColor
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return (
    <Layout menuColor={colors.charcoal}>
      <HeroCarousel data={data} />
      <Doctores />
      <NuestroServicios />
      <Testimonios />
      <Consultas />
      <AprendeconNosotros />
      <ComuniadadMilito />
    </Layout>
  )
}

export default Home
