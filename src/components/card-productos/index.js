import React from "react"

// Libraries
import PropTypes from "prop-types"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { BLOCKS } from "@contentful/rich-text-types"
import { Link } from "gatsby"

// Utils
import { colors } from "../../utils/variables"
import breakpoints from "../../utils/breakpoints"

const StyledProductCard = styled(Link)`
  .product-card-container {
    padding: 24px;
    height: 100%;
    margin-bottom: 32px;
    color: ${colors.charcoal};
    text-decoration: none;
    background-color: white;

    ${breakpoints.medium`
      padding: 80px;
    `}

    .image-section {
      max-width: 308px;
      width: 100%;
    }

    .text-section {
      max-width: 295px;
      width: 100%;
      margin-top: 48px;

      ${breakpoints.small`
        margin-top: 0;
      `}

      ${breakpoints.large`
        max-width: 385px;
      `}
    }

    .line {
      width: 81px;
      border: 1px solid ${colors.salmon};
      display: flex;
      margin-top: 16px;
      margin-bottom: 16px;

      ${breakpoints.medium`
      margin-top: 24px;
      margin-bottom: 38px;
    `}
    }

    ul {
      margin-bottom: 40px;
      li {
        margin-bottom: 16px;
        display: flex;

        &::before {
          content: "-";
          color: ${colors.salmon__500};
          margin-right: 8px;
        }
      }
    }

    ol {
      li {
        margin-bottom: 16px;
        display: flex;
        counter-increment: li;

        &::before {
          content: counter(li);
          color: ${colors.salmon__500};
          margin-right: 8px;
        }
      }
    }

    .
  }
`

const ProductCard = (props) => {
  const { imagen, nombre, usos } = props

  const image = getImage(imagen)

  const renderOptions = {
    renderText: (text) =>
      text
        .split("\n")
        .reduce(
          (children, textSegment, index) => [
            ...children,
            index > 0 && <br key={children} />,
            textSegment,
          ],
          []
        ),
  }

  return (
    <StyledProductCard to="/">
      <div className="product-card-container d-flex flex-column flex-sm-row justify-content-between align-items-start">
        <div className="image-section">
          {imagen && <GatsbyImage image={image} alt="" />}
        </div>
        <div className="text-section">
          <h2 className="heading--s">{nombre}</h2>
          <span className="line" />
          <div className="render-section">
            <p className="text--s">{renderRichText(usos, renderOptions)}</p>
          </div>
        </div>
      </div>
    </StyledProductCard>
  )
}

ProductCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  usos: PropTypes.string.isRequired,
}

export default ProductCard
