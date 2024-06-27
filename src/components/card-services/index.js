import React from "react"

// Libraries
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Utils
import breakpoints from "../../utils/breakpoints"

const StyledCard = styled(Link)`
  text-decoration: none;

  .card {
    height: 518px;
    position: relative;

    ${breakpoints.medium`
      height: 571px;
    `}

    &:hover {
      .line-card {
        display: none;
      }
    }

    .line-card {
      position: absolute;
      box-sizing: border-box;
      border: 1px solid white;
      z-index: 200;
      width: calc(100% - 38px);
      height: 480px;
      right: 19px;
      top: 19px;

      ${breakpoints.medium`
        width: calc(100% - 48px);
        height: 525px;
        right: 24px;
        top: 24px;
      `}
    }

    .card-title {
      padding-top: 48px;
      width: 155px;
      margin: 0 auto;
      ${breakpoints.medium`
        padding-top: 56px;
        width: auto;
      `}
    }

    .card-image {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
`

const CardServices = (props) => {
  const { fondo, imagen, tipo } = props

  const image = getImage(imagen)

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[áäàâãåæ]/g, "a")
      .replace(/[éëèê]/g, "e")
      .replace(/[íïìî]/g, "i")
      .replace(/[óöòôõ]/g, "o")
      .replace(/[úüùû]/g, "u")
      .replace(/[ñ]/g, "n")
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "")

  return (
    <StyledCard to={`/${slugify(tipo)}/`}>
      <div className={`bg--${fondo} card`}>
        <div className="line-card" />
        <div className="card-title">
          <h2 className="heading--s color--white tipo text-center">{tipo}</h2>
        </div>
        {imagen && (
          <div className="card-image">
            <GatsbyImage image={image} alt={tipo} />
          </div>
        )}
      </div>
    </StyledCard>
  )
}

CardServices.propTypes = {
  fondo: PropTypes.oneOf(["salmon", "salmon__500", "marron"]).isRequired,
  imagen: PropTypes.shape({}).isRequired,
  tipo: PropTypes.string.isRequired,
}

export default CardServices
