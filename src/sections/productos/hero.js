import React from "react"

// Libraries
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// Utils
import breakpoint from "../../utils/breakpoints"

// icons
import Separador from "../../assets/icons/separador-productos.inline.svg"
import Vertical from "../../assets/icons/separador-productos-vertical.inline.svg"

// Components
import Container from "../../components/container/index"

const StyledHero = styled.section`
  background-color: white;
  min-height: calc((100vh - 62px) - 108px);
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 120px;

  ${breakpoint.small`
    margin-top: 60px;
    min-height: calc(35vh);
  `}

  ${breakpoint.large`
    height: 92vh;
    margin-top: 0;
  `}


  .hero__text {
    max-width: 448px;
    width: 100%;
    ${breakpoint.small`
      padding-bottom: 0;
    `}
  }

  .hero__image {
    ${breakpoint.small`
      position: absolute;
      right: 0;
      bottom: 0;
    `}

    ${breakpoint.large`
      img {
        max-height: 100vh;
      }
    `}
  }

  .icons {
    position: absolute;
    overflow: hidden;
    bottom: 0;
    right: 41%;
  }
`

const Hero = () => (
  <StyledHero className="cover">
    <Container>
      <div className="row align-items-center">
        <div className="col-12 col-sm-4 col-md-4 mb-4 mb-sm-0">
          <h1 className="heading--l maxi mb-3 text-start  text-md-start">
            Productos <br />
            <span className="color--salmon">Milito</span>
          </h1>

          <p className="hero__text text--m text-start text-md-start col-lg-9 mb-5 ">
            Cremas especialmente formuladas para que puedas usar en casa.
          </p>
          <div className="icons d-flex flex-column d-none d-md-flex">
            <Vertical />
            <Separador />
          </div>
        </div>

        <div className="col-12 col-sm-7 col-md-5 hero__image px-0">
          <StaticImage
            src="../../assets/images/productos/hero/hero-image.png"
            alt=""
            width={800}
            height={900}
          />
        </div>
      </div>
    </Container>
  </StyledHero>
)

export default Hero
