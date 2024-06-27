import React from "react"

import PropTypes from "prop-types"

// Libraries
import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

// Icons
import Pattern from "../../assets/icons/pattern.inline.svg"

// Utils
import { colors } from "../../utils/variables"

const StyledTipsCard = styled.div`
  background-color: ${colors.charcoal};
  padding: 40px 16px;
  position: relative;
  max-width: 966px;
  margin: 0 auto;

  ${breakpoints.medium`
    padding: 115px 104px;
  `}

  .pattern {
    display: none;
    ${breakpoints.large`
      display: block;
      position: absolute;
      bottom: 0;
      width: 85%;
    `}
  }

  .text-section {
    max-width: 485px;
  }
`
const TipsCard = (props) => {
  const { tip } = props
  return (
    <StyledTipsCard>
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <h2 className="heading--s color--white mb-3">
          Tips del
          <br /> Dr. Guibert
        </h2>

        <div className="text-section">
          {tip === null ? (
            <p />
          ) : (
            <p className="color--white text--s">{tip.tip}</p>
          )}
        </div>
      </div>
      <div className="pattern">
        <Pattern />
      </div>
    </StyledTipsCard>
  )
}

TipsCard.propTypes = {
  tip: PropTypes.string,
}

TipsCard.defaultProps = {
  tip: "",
}
export default TipsCard
