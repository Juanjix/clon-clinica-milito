import React from "react"

// Libraries
import PropTypes from "prop-types"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

// Utils
import breakpoint from "../../utils/breakpoints"

// Icon
import Pattern from "../../assets/icons/pattern-salmon.inline.svg"

// Components
import Container from "../container"

const StyledHero = styled.section`
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 120px;

  ${breakpoint.small`
    margin-top: 60px;
    min-height: 400px;
  `}

  ${breakpoint.medium`
    margin-top: 60px;
    min-height: 500px;
  `}

  ${breakpoint.large`
    min-height: 520px;
    max-height: 90vh;
    margin-top: 70px;
  `}

  .hero-title {
    padding-bottom: 128px;
  }

  .pattern {
    max-width: 375px;
    position: absolute;
    overflow: hidden;
    top: 120px;

    ${breakpoint.small`
      bottom: -4px;
      right: 35%;
      top: auto;
      max-width: 600px;
    `}
  }

  .image-container {
    width: 100vw;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;

    .image {
      margin: 0;

      img {
        width: 100%;
        height: auto;
        display: block;
      }

      ${breakpoint.small`
        max-width: 520px;
        width: 100%;
        height: 100%;
        right: 0;
        position: absolute;
        top: 0;
        bottom: 0;
      `}
      ${breakpoint.medium`
        max-width: 620px;
        width: 100%;
        right: 0;
        position: absolute;
        top: 0;
        bottom: 0;
      `}

      ${breakpoint.large`
        max-width: 700px;
        height: 520px;
      `}
    }
  }
`

const EspecialidadesHero = (props) => {
  const { imagen, title } = props

  return (
    <StyledHero>
      <Container>
        <div className="row align-items-center">
          <motion.div
            initial={{ y: 32, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
            }}
            className="col-12 col-sm-4 col-md-5"
          >
            <h1 className="heading--l maxi text-start text-md-start hero-title color--charcoal">
              {title}
            </h1>
          </motion.div>
          <div className="pattern">
            <Pattern />
          </div>
          <div className="col-12 image-container">
            {imagen ? (
              <GatsbyImage
                image={getImage(imagen)}
                alt=""
                quality={100}
                width={550}
                className="image"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
    </StyledHero>
  )
}

EspecialidadesHero.propTypes = {
  title: PropTypes.string.isRequired,
  imagen: PropTypes.shape({}).isRequired,
}
export default EspecialidadesHero
