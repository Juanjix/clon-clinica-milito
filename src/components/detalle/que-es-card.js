import React from "react"

// Libraries
import styled from "styled-components"
import PropTypes from "prop-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

// Icon
import Logo from "../../assets/icons/separador-productos.inline.svg"

// Utils
import breakpoints from "../../utils/breakpoints"
import { colors } from "../../utils/variables"

// Components

const StyledQueEsCard = styled.div`
  padding: 40px 16px;
  background-color: white;
  max-width: 968px;
  margin: 0 auto;
  position: relative;

  ${breakpoints.medium`
    padding: 115px 104px;
    padding: 115px 104px;
  `}

  .content {
    max-width: 485px;
  }

  .title-seccion {
    max-width: 220px;
    margin-bottom: 16px;

    ${breakpoints.large`
      margin-bottom: 125px;
    `}
  }

  .line {
    width: 81px;
    border: 1px solid ${colors.salmon};
    display: flex;
    margin-top: 16px;
    margin-bottom: 16px;

    ${breakpoints.medium`
      margin-top: 30px;
      margin-bottom: 0
    `}
  }

  .text {
    max-width: 485px;
  }

  .container-logo {
    display: none;

    ${breakpoints.medium`
      display: block;
      margin-top: 75px;
    `}

    svg {
      position: absolute;
      left: 0;
      ${breakpoints.extraLarge`
        width: 326px;
        height: 293px;
      `}
    }
  }
`

const QueEsCard = (props) => {
  const { title, descripcion } = props

  return (
    <StyledQueEsCard>
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <div className="title-seccion">
          <h2 className="heading--s color--charcoal">{title}</h2>
          <span className="line" />
          <div className="container-logo">
            <Logo />
          </div>
        </div>
        <div className="content">
          <p className="text--s color--charcoal">
            {renderRichText(descripcion)}
          </p>
        </div>
      </div>
    </StyledQueEsCard>
  )
}

QueEsCard.propTypes = {
  title: PropTypes.string,
  descripcion: PropTypes.string,
}

QueEsCard.defaultProps = {
  title: "",
  descripcion: "",
}
export default QueEsCard
