import React from "react"

// Libraries
import styled from "styled-components"
import PropTypes from "prop-types"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Utils
import breakpoints from "../../utils/breakpoints"

const StyledTratamientosCard = styled(Link)`
  margin-bottom: 20px;
  margin-top: 40px;

  ${breakpoints.medium`
      max-width: 384px;
  `}

  .text-section {
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 10px;
    background-color: white;
  }

  .imaga-section {
    max-width: 384px;
    width: 100%;
  }
`

const TratamientosCard = (props) => {
  const { imagen, nombre, slug } = props

  return (
    <StyledTratamientosCard to={slug}>
      <div>
        <div className="image-section" style={{ maxWidth: "500px" }}>
          <GatsbyImage
            image={getImage(imagen)}
            style={{
              width: "100%",
              height: "443px",
            }}
          />
        </div>

        <div className="text-section">
          <p className="text--m text-center color--charcoal">
            <span className="color--salmon">{nombre}</span>
          </p>
        </div>
      </div>
    </StyledTratamientosCard>
  )
}

TratamientosCard.propTypes = {
  imagen: PropTypes.instanceOf(PropTypes.shape({})).isRequired,
  nombre: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default TratamientosCard
