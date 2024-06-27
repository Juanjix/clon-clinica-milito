import React from "react"

// Libraries
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

// Utils
import { colors } from "../../utils/variables"
import breakpoint from "../../utils/breakpoints"

// Components
import Layout from "../../layouts/layout-primary"
import Container from "../../components/container"

// Sections
import Hero from "../../components/detalle/hero-card"
import DondeLoUtilizamos from "../../components/detalle/donde-lo-utilizamos-card"
// import ParaQueSirve from "../../components/detalle/para-que-sirve"
import TipsCard from "../../components/detalle/tips-card"
import QueEsCard from "../../components/detalle/que-es-card"

import PreguntasFrecuentes from "../../components/detalle/preguntas-frecuentes-card"
import Consultas from "../../sections/home/consultas"
import Testimonios from "../../sections/home/testimonios/index"

const StyledCirugiasDetalle = styled.div`
  background-color: ${colors.salmon__50};
  padding-bottom: 64px;

  ${breakpoint.medium`
    padding-bottom: 96px;
  
  `}
`

const CirugiasDetalle = (props) => {
  const {
    data: { contentfulCirugias: data },
  } = props

  return (
    <Layout menuColor={colors.charcoal}>
      <StyledCirugiasDetalle>
        <Container>
          <Hero
            imagen={data.featuredImage}
            nombre={data.nombre}
            descripcion={data.descripcion.descripcion}
          />
          <QueEsCard
            title={data.queEs.title}
            descripcion={data.queEs.descripcion}
          />
          <DondeLoUtilizamos
            title={data.dondeLoUtilizamos.title}
            listaDeDetalles={data.dondeLoUtilizamos.listaDeDetalles}
          />
          {data.tip ? <TipsCard tip={data.tip} /> : <div />}
          {/* {data.ParaQueSirve ? (
            <ParaQueSirve
              title={data.paraQueSirve.title}
              detalle={data.paraQueSirve.detalle.detalle}
            />
          ) : (
            <div />
          )} */}
          {data.preguntasFrecuentes === null ? (
            <div />
          ) : (
            <PreguntasFrecuentes data={data.preguntasFrecuentes} />
          )}
        </Container>
      </StyledCirugiasDetalle>
      <Testimonios />
      <Consultas />
    </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    contentfulCirugias(id: { eq: $id }) {
      nombre
      id
      descripcion {
        descripcion
      }

      featuredImage {
        gatsbyImageData(quality: 100)
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

CirugiasDetalle.propTypes = {
  data: PropTypes.string.isRequired,
}

export default CirugiasDetalle
