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

const Cirugias = (props) => {
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
    contentfulEspecialidades(tipo: { eq: "Cirugías" }) {
      tipo
      title
      imagen {
        gatsbyImageData(height: 550, width: 620, quality: 100)
      }
      especialidad {
        ... on ContentfulCirugias {
          id
          categorias
          descripcion {
            descripcion
          }
          nombre
          slug
          title
          featuredImage {
            gatsbyImageData(width: 384, quality: 100)
          }
        }
      }
    }
  }
`

Cirugias.propTypes = {
  data: PropTypes.shape({
    contentfulEspecialidades: PropTypes.shape({
      title: PropTypes.string.isRequired,
      imagen: PropTypes.shape({}).isRequired,
      especialidad: PropTypes.shape({
        descripcion: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        featuredImage: PropTypes.shape({}),
      }).isRequired,
    }),
  }).isRequired,
}

export default Cirugias
