import React from "react"

// Libraries
import styled from "styled-components"
import PropTypes from "prop-types"

// Utils
import breakpoints from "../../utils/breakpoints"
import { colors } from "../../utils/variables"

// Components

const StyledParaQueSirve = styled.div`
  padding: 40px 16px;
  background-color: white;
  max-width: 968px;
  margin: 0 auto;

  ${breakpoints.medium`
    padding: 115px 104px;
  `}

  .content {
    max-width: 485px;
  }

  .title-seccion {
    max-width: 220px;
    margin-bottom: 16px;
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
`

const ParaQueSirve = (props) => {
  const { title, detalle } = props
  return (
    <StyledParaQueSirve>
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <div className="title-seccion">
          <h2 className="heading--s color--charcoal">{title}</h2>
          <span className="line" />
        </div>
        <div className="content">
          <p className="text--s color--charcoal">{detalle}</p>
        </div>
      </div>
    </StyledParaQueSirve>
  )
}

ParaQueSirve.propTypes = {
  title: PropTypes.string,
  detalle: PropTypes.string,
}

ParaQueSirve.defaultProps = {
  title: "",
  detalle: "",
}
export default ParaQueSirve
