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
import DondeLoUtilizamos from "../../components/detalle/donde-lo-utilizamos-card"
// import ParaQueSirve from "../../components/detalle/para-que-sirve"
import PreguntasFrecuentes from "../../components/detalle/preguntas-frecuentes-card"
import TipsCard from "../../components/detalle/tips-card"
import QueEsCard from "../../components/detalle/que-es-card"

const StyledCosmiatra = styled.div`
  background-color: ${colors.salmon__50};
`

const CosmeatriaYAparatologia = (props) => {
  const {
    data: { contentfulCosmiatriaYAparatologia: data },
  } = props

  return (
    <Layout menuColor={colors.charcoal}>
      <StyledCosmiatra>
        <Container>
          <Hero
            imagen={data.featuredImage}
            nombre={data.nombre}
            descripcion={data.descripcion}
          />
          <QueEsCard
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
      </StyledCosmiatra>
      <Testimonios />
      <Consultas />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulCosmiatriaYAparatologia(id: { eq: $id }) {
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
CosmeatriaYAparatologia.propTypes = {
  data: PropTypes.string.isRequired,
}
export default CosmeatriaYAparatologia
