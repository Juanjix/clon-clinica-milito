import React from "react"

// Libraries
import styled from "styled-components"
import PropTypes from "prop-types"

// Utils
import { colors, fonts } from "../../utils/variables"
import breakpoints from "../../utils/breakpoints"

// Components
import Icon from "../../assets/icons/icon-quote.inline.svg"

const StyledTestimonio = styled.div`
  border: 1px solid ${colors.salmon__500};
  padding: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  margin-right: 8px;
  margin-left: 8px;

  ${breakpoints.medium`
    // max-width: 440px;
    margin-right: 16px;
    margin-left: 16px;
  `}

  .icon-quote {
    svg {
      width: 48px;
      height: 48px;
    }
  }

  .quote {
    margin-top: 48px;
    margin-bottom: 16px;
  }

  span {
    width: 56px;
    border: 1px solid ${colors.salmon};
    margin-bottom: 16px;
  }

  .autor {
    font-family: ${fonts.secondary};
  }
`

const Testimonio = (props) => {
  const { testimonio, autor } = props

  return (
    <StyledTestimonio>
      <div className="icon-quote">
        <Icon />
      </div>

      <p className="text--s quote text-center">{testimonio}</p>

      <span />
      <p className="text--s color--salmon autor">{autor}</p>
    </StyledTestimonio>
  )
}

Testimonio.propTypes = {
  testimonio: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
}

export default Testimonio
