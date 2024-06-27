import React from "react"

// Libraries
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

// Utils
import { colors } from "../../utils/variables"

// Components
import Container from "../../components/container"
import Producto from "../../components/card-productos"
import breakpoints from "../../utils/breakpoints"

// Sections

const StyledProductos = styled.section`
  background-color: ${colors.salmon__50};
  padding: 60px 0;

  ${breakpoints.medium`
    padding: 120px 0;
  `}

  ${Container} {
    max-width: 1008px;
  }
`

const ProductosSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSeccionProductos(title: { eq: "Todos los Productos" }) {
        productos {
          nombre
          usos {
            raw
          }
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)
  return (
    <StyledProductos>
      <Container>
        {data.contentfulSeccionProductos.productos.map((producto) => (
          <Producto
            nombre={producto.nombre}
            imagen={producto.imagen}
            usos={producto.usos}
          />
        ))}
      </Container>
    </StyledProductos>
  )
}
export default ProductosSection
