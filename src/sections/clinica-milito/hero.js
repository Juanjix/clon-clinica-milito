import React from "react"

// Libraries
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// Utils
import breakpoint from "../../utils/breakpoints"

// Image Background
import Background from "../../assets/icons/separador-doctores.png"
import Pattern from "../../assets/icons/pattern-salmon.inline.svg"

// Components
import Container from "../../components/container/index"

const StyledHero = styled.section`
  background-color: white;
  min-height: calc((100vh - 62px) - 108px);
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 102px;

  ${breakpoint.small`
    margin-top: 60px;
    min-height: 420px;
  `}

  ${breakpoint.medium`
    margin-top: 60px;
    min-height: 450px;
  `}

  ${breakpoint.large`
    max-height: 690px;
    height: 100vh;
    margin-top: 25px;
  `}




  .hero__text {
    margin-bottom: 108px;
    ${breakpoint.small`
      margin-bottom: 100px;
    `}

    ${breakpoint.medium`
      margin-bottom: 0;
    `}
  }

  .hero__image {
    z-index: 2;
    ${breakpoint.small`
      position: absolute;
      right: 0;
      bottom: 0;
    `}

    .separador-1 {
      width: 50%;
      height: 48px;
      background-image: url(${Background});
      background: #ccd2d7;
      background-repeat: no-repeat;
      background-size: 50vw 109px;
      z-index: 2;
      ${breakpoint.medium`
        height: 109px;
      `}
    }

    .separador {
      width: 50%;
      height: 48px;
      background-image: url(${Background});
      background-repeat: no-repeat;
      background-size: 50vw 109px;
      z-index: 2;
      ${breakpoint.medium`
        height: 109px;
      `}
    }
  }

  .pattern {
    max-width: 375px;
    position: absolute;
    overflow: hidden;
    top: 198px;
    height: 100px;

    ${breakpoint.small`
      bottom: 0px;
      right: calc((100vw / 2) - 90px);
      top: auto;
      max-width: 700px;
    `};
  }
`

const Hero = () => (
  <StyledHero>
    <Container>
      <div className="row align-items-center">
        <div className="col-12 col-sm-4 col-md-4 mb-4 mb-sm-0 title-section">
          <h1 className="heading--l maxi mb-3 text-start  text-md-start">
            Clínica <br className="d-md-none" />
            <span className="color--salmon">Milito</span>
          </h1>

          <p className="hero__text text--s text-start text-md-start col-lg-9" />
        </div>

        <div className="col-12 col-sm-7 col-md-6 hero__image px-0">
          <div className="pattern">
            <Pattern />
          </div>
          <StaticImage
            src="../../assets/images/clinica-milito/hero/clinica-milito-hero-image.png"
            alt=""
          />
          <div className="d-flex">
            <div className="separador-1" />
            <div className="separador" />
          </div>
        </div>
      </div>
    </Container>
  </StyledHero>
)

export default Hero
