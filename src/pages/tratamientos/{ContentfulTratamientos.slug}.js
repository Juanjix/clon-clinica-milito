import React from "react"

// Libraries
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

// Components
import Layout from "../../layouts/layout-primary"
import Container from "../../components/container"

// Utils
import { colors } from "../../utils/variables"

// Sections
import Consultas from "../../sections/home/consultas"
import Testimonios from "../../sections/home/testimonios/index"
import Hero from "../../components/detalle/hero-card"
import QueEs from "../../components/detalle/que-es-card"
import DondeLoUtilizamos from "../../components/detalle/donde-lo-utilizamos-card"
import ParaQueSirve from "../../components/detalle/para-que-sirve"
import PreguntasFrecuentes from "../../components/detalle/preguntas-frecuentes-card"
import TipsCard from "../../components/detalle/tips-card"

const StyledTratamientos = styled.div`
  background-color: ${colors.salmon__50};
`

const Tratamientos = (props) => {
  const {
    data: { contentfulTratamientos: data },
  } = props

  return (
    <Layout menuColor={colors.charcoal}>
      <StyledTratamientos>
        <Container>
          <Hero
            imagen={data.featuredImage}
            nombre={data.nombre}
            descripcion={data.descripcion}
          />
          <QueEs
            title={data.queEs.title}
            descripcion={data.queEs.descripcion}
          />
          {data.dondeLoUtilizamos === null ? (
            <div />
          ) : (
            <DondeLoUtilizamos
              title={data.dondeLoUtilizamos.title}
              listaDeDetalles={data.dondeLoUtilizamos.listaDeDetalles}
            />
          )}
          {data.tip ? <TipsCard tip={data.tip} /> : <div />}
          {data.preguntasFrecuentes === null ? (
            <div />
          ) : (
            <PreguntasFrecuentes data={data.preguntasFrecuentes} />
          )}
          {data.ParaQueSirve ? (
            <ParaQueSirve
              title={data.paraQueSirve.title}
              detalle={data.paraQueSirve.detalle.detalle}
            />
          ) : (
            <div />
          )}
        </Container>
      </StyledTratamientos>
      <Testimonios />
      <Consultas />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulTratamientos(id: { eq: $id }) {
      nombre
      id
      descripcion
      featuredImage {
        gatsbyImageData
      }

      dondeLoUtilizamos {
        title
        listaDeDetalles
      }

      preguntasFrecuentes {
        pregunta
        respuesta {
          respuesta
        }
      }

      tip {
        tip
      }

      queEs {
        title
        descripcion {
          raw
        }
      }
    }
  }
`
Tratamientos.propTypes = {
  data: PropTypes.string.isRequired,
}

export default Tratamientos
