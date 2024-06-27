import React from "react"

// libraries
import styled from "styled-components"

// Icons
import Marmol from "../assets/icons/marmol.inline.svg"

// Layout
import Layout from "../layouts/layout-primary"

// Sections
import Form from "../sections/contacto/form-media"
import { colors } from "../utils/variables"
import breakpoints from "../utils/breakpoints"

const StyledContactoPage = styled.div`
  background-color: ${colors.salmon__50};
  padding-top: 120px;
  position: relative;

  ${breakpoints.medium`
    padding-top: 230px;
  `}

  .marmol {
    box-sizing: border-box;
    position: absolute;
    width: 100vw;
    overflow: hidden;
    right: 0;
    top: 0;
    z-index: 1;

    .svg {
      z-index: 1;
    }
  }

  .form-container {
    position: relative;
    z-index: 2;
  }
`

const Contacto = () => (
  <Layout menuColor={colors.charcoal}>
    <StyledContactoPage>
      <div className="marmol">
        <Marmol />
      </div>
      <div className="form-container">
        <Form />
      </div>
    </StyledContactoPage>
  </Layout>
)

export default Contacto
