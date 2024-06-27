import React from "react"

// Libraries
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

// Utils
import breakpoints from "../../utils/breakpoints"

// Components
import Container from "../../components/container"
import Image from "../../assets/images/home/nuestros-servicios/background.png"
import CardServices from "../../components/card-services"

const StyledNuestrosServicios = styled.section`
  padding: 70px 0 0 0;
  background-image: url(${Image});
  background-repeat: no-repeat;
  text-align: center;

  ${Container} {
    max-width: 1220px;
    width: 100%;
  }

  ${breakpoints.medium`
    padding: 117px 0;
  `}

  .title {
    margin-bottom: 34px;
    ${breakpoints.medium`
      margin-bottom: 90px;
    `}
  }
`

const NuestroServicios = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSeccionServicios(title: { eq: "Nuestros Servicios" }) {
        servicios {
          fondo
          tipo
          imagen {
            gatsbyImageData(height: 416, quality: 100)
          }
        }
      }
    }
  `)

  return (
    <StyledNuestrosServicios>
      <Container>
        <h1 className="heading--l title">
          Nuestros <span className="color--salmon">Servicios</span>
        </h1>
        <div className="row justify-content-center text-center">
          {data.contentfulSeccionServicios.servicios.map((servicio, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              key={servicio.tipo}
              className="col-12 col-sm-5 col-lg-4 mb-5"
            >
              <CardServices
                fondo={servicio.fondo}
                tipo={servicio.tipo}
                imagen={servicio.imagen}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </StyledNuestrosServicios>
  )
}

export default NuestroServicios
