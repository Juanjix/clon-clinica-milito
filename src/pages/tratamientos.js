import React from "react"

// Libraries
import { graphql } from "gatsby"
import PropTypes from "prop-types"

// Utils
import { colors } from "../utils/variables"

// Components
import Layout from "../layouts/layout-primary"
import Hero from "../components/especialidades-hero"
import EspecialidadesContainer from "../components/especialidades-container"

const Tratamientos = (props) => {
  const {
    data: { contentfulEspecialidades: data },
  } = props

  return (
    <Layout menuColor={colors.charcoal}>
      <Hero {...data} />
      <EspecialidadesContainer data={data} />
    </Layout>
  )
}
export const query = graphql`
  query {
    contentfulEspecialidades(tipo: { eq: "Tratamientos" }) {
      tipo
      title
      imagen {
        gatsbyImageData(height: 620, width: 620, quality: 100)
      }
      especialidad {
        ... on ContentfulTratamientos {
          id
          categorias
          nombre
          slug
          title
          featuredImage {
            gatsbyImageData
          }
        }
      }
    }
  }
`

Tratamientos.propTypes = {
  data: PropTypes.shape({
    contentfulEspecialidades: PropTypes.shape({
      title: PropTypes.string.isRequired,
      imagen: PropTypes.shape({}).isRequired,
      especialidad: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        featuredImage: PropTypes.shape({}),
      }).isRequired,
    }),
  }).isRequired,
}

export default Tratamientos
