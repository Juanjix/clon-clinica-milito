import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"

import { renderRichText } from "gatsby-source-contentful/rich-text"

// Libraries
import PropTypes from "prop-types"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { colors } from "../../utils/variables"
import breakpoints from "../../utils/breakpoints"

// Components
import Container from "../container"

const StyledDoctores = styled.div`
  margin: 56px 0;

  ${breakpoints.medium`
    margin: 160px 0;
  `}
  &:last-of-type {
    margin-bottom: 0;
  }
  .line {
    width: 103px;
    border: 1px solid ${colors.salmon};
    display: flex;
    margin-bottom: 16px;
  }

  .image {
    margin-bottom: 18px;

    ${breakpoints.medium`
      margin-bottom: 0;
    `}
  }
`

const Doctores = (props) => {
  const {
    imagen1,
    // imagen2,
    nombre,
    apellido,
    especializacion,
    bio,
    // bio2,
    // active,
  } = props

  const image = getImage(imagen1)
  // const image2 = getImage(imagen2)

  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="h2">{children}</h3>
      ),
    },
  }

  return (
    <StyledDoctores>
      <Container>
        <div className="row justify-content-between align-items-start align-items-md-center ">
          <div className="image col-12 col-sm-5 col-md-3 px-md-0">
            {image && <GatsbyImage image={image} alt="" />}
          </div>
          <div className="col-12 col-sm-6">
            <div className="info">
              <h2 className="heading--m">
                {nombre}
                {apellido}
              </h2>
              <p className="text--m color--salmon">{especializacion}</p>
              <div className="d-md-flex justify-content-between col-12 col-md-10">
                <p className="text--s mt-4">
                  <span className="line" />
                  {bio && bio.raw && renderRichText(bio, renderOptions)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <div className="doctor-info second-part">
          <div className="row flex-sm-row-reverse justify-content-between justify-content-md-end align-items-center">
            <div className="image2 col-12 col-sm-5 col-md-3 px-md-0">
              {imagen2 && <GatsbyImage image={image2} alt="" />}
            </div>
            <div className="col-12 col-sm-6">
              <div className="info mb-5">
                <div className="d-md-flex justify-content-between col-12 col-md-10">
                  <p className="text--s mt-4">
                    <span className="line" />
                    {bio2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* {active && (
          <div className="separador">
            <Background />
          </div>
        )} */}
    </StyledDoctores>
  )
}

Doctores.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  especializacion: PropTypes.string.isRequired,
  bio: PropTypes.shape({
    raw: PropTypes.string,
  }).isRequired,
  // bio2: PropTypes.string.isRequired,
  imagen1: PropTypes.string.isRequired,
  // imagen2: PropTypes.string.isRequired,
  // active: PropTypes.bool,
}

// Doctores.defaultProps = {
//   active: false,
// }

export default Doctores
