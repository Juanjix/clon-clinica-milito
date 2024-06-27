import React from "react"

// Libraries
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

// Components
import Doctores from "../../components/doctores"

const StyledEquipo = styled.section`
  background-color: white;
`
const Equipo = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulDoctoresBios(title: { eq: "Todas las bios" }) {
        bios {
          nombre
          apellido
          especializacion
          imagen1 {
            gatsbyImageData(quality: 100)
          }
          imagen2 {
            gatsbyImageData
          }
          bioParte1 {
            bioParte1
          }
          bio {
            raw
          }
        }
      }
    }
  `)
  return (
    <StyledEquipo>
      {data.contentfulDoctoresBios.bios.map((biografia) => (
        <Doctores
          nombre={biografia.nombre}
          apellido={biografia.apellido}
          especializacion={biografia.especializacion}
          bio1={biografia.bioParte1.bioParte1}
          imagen1={biografia.imagen1}
          imagen2={biografia.imagen2}
          bio={biografia.bio}
        />
      ))}
    </StyledEquipo>
  )
}
export default Equipo
