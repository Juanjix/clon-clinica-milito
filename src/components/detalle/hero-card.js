import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

// Libraries
import styled from "styled-components"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

// Icons
import Marmol from "../../assets/icons/marmol.inline.svg"

// Utils
import { colors } from "../../utils/variables"
import breakpoints from "../../utils/breakpoints"

const StyledHeroDetalle = styled.div`
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
    position: relative;
    max-width: 966px;
    margin: 0 auto;

    ${breakpoints.small`
      flex-direction: row;
    `}

    ${breakpoints.large`
      padding-top: 150px;
    `}

    .text-container {
      background-color: ${colors.salmon__500};
      padding: 60px 60px;
      width: 100%;

      ${breakpoints.small`
        padding: 90px 70px 90px 70px;
        width: 100%;
      `}

      ${breakpoints.medium`
        padding: 75px 70px 75px 70px;
      `}

      .nombre {
        margin-bottom: 16px;
      }
    }

    .image-section {
      max-width: 455px;
      ${breakpoints.medium`
        max-width: 505px;
        width: 100%;
      `}
    }

    .line {
      position: absolute;
      box-sizing: border-box;
      border: 1px solid white;
      z-index: 200;
      width: calc(100% - 34px);
      height: calc(100% - 116px - 16px);
      right: 17px;
      top: 116px;
      bottom: -16px;

      ${breakpoints.small`
        right: 24px;
        top: 124px;
        width: calc(100% - 45px);
        height: calc(100% - 132px - 16px);
      `}

      ${breakpoints.large`
        right: 24px;
        top: 174px;
        width: calc(100% - 48px);
        height: calc(100% - 174px - 24px);
      `}
    }
  }

  .marmol {
    box-sizing: border-box;
    overflow: hidden;
    width: 100vw;
    position: absolute;
    right: 0;

    svg {
      z-index: 1;
    }
  }
`

const HeroDetalle = (props) => {
  const { imagen, nombre, descripcion } = props
  const image = getImage(imagen)
  return (
    <StyledHeroDetalle>
      <motion.div
        initial={{ y: 32, opacity: 0, scale: 0.99 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
        <div className="marmol">
          <Marmol />
        </div>
        <div className="card-container">
          <div className="text-container">
            <h2 className="heading--m nombre">{nombre}</h2>
            <p className="text--s color--charcoal">{descripcion}</p>
            <div className="line" />
          </div>
          <div className="image-section px-0">
            {imagen ? <GatsbyImage image={image} alt="" /> : ""}
          </div>
        </div>
      </motion.div>
    </StyledHeroDetalle>
  )
}

HeroDetalle.propTypes = {
  imagen: PropTypes.shape({}),
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
}

HeroDetalle.defaultProps = {
  imagen: null,
  nombre: "",
  descripcion: "",
}
export default HeroDetalle
