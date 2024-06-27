import React from "react"

// Libraries
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

// Utils
import breakpoint from "../../utils/breakpoints"
import { colors } from "../../utils/variables/index"

// icons
import Background from "../../assets/icons/pattern.png"
import BackgroundMobile from "../../assets/images/home/hero/pattern-mobile.png"

import Arrow from "../../assets/icons/icon-arrow-left.inline.svg"

// Components
import Container from "../../components/container/index"

const StyledHero = styled.section`
  background-color: ${colors.salmon};
  min-height: 500px;
  height: calc(100vh);
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px 0 50px 0;
  overflow: visible !important;

  ${breakpoint.small`
    height: auto;
    padding: 150px 0 150px 0;
  `}

  ${breakpoint.medium`
    min-height: calc(50vh - 6px + 39px);
  `}

  ${breakpoint.large`
    height: 100vh;
  `}

  .cover {
    position: absolute;
    background-image: url(${BackgroundMobile});
    height: 300px;
    width: 385px;
    overflow: hidden;
    bottom: 0;
    right: 0;
    z-index: 1;

    ${breakpoint.medium`
      display: block;
      background-image: url(${Background});
      height: 75vh;
      width: 60%;
      bottom: 0;
      right: 0;
      z-index: 1;
    `}
  }

  .hero__text {
    max-width: 448px;
    width: 100%;
    padding-bottom: 130px;
    ${breakpoint.small`
      padding-bottom: 0;
    `}
  }

  .hero__image {
    bottom: 0;
    position: absolute;
    z-index: 2;

    img {
      width: 352px;
      ${breakpoint.small`
        width: 392px;
      `}
      ${breakpoint.medium`
        width: 642px;
      `}
      ${breakpoint.large`
        width: 672px;
      `}
    }
  }

  .link-arrow {
    transitions: all easy 0.3s;

    svg {
      transform: rotate(-90deg);
      * {
        stroke: ${colors.charcoal};
      }
      &:hover {
        * {
          stroke: white;
        }
      }
    }
  }

  .pattern {
    position: absolute;
    width: 350px;
    height: 250px;
    bottom: 0;
    overflow: hidden;
    svg {
      position: absolute;
      * {
        stroke: white;
      }
    }
  }
`

const Hero = () => (
  <StyledHero className="cover">
    <Container>
      <div className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-5 mb-4 mb-sm-0 text-intro">
          <motion.div
            initial={{ y: 32, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
            }}
          >
            <h1 className="heading--l maxi mb-3 text-start  text-md-start color--white">
              Especialistas en cirugía plástica
              <span className="color--charcoal"> con resultados naturales</span>
            </h1>

            <p className="hero__text text--s text-start text-md-start col-lg-9 mb-5 color--white">
              Especialistas en Cirugía Plástica y Medicina Estética desde hace
              más de 30 años
            </p>
            <div className="link-arrow d-none d-md-block">
              <a href="#doctores">
                <Arrow />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="col-12 col-sm-6 col-md-7">
          <StaticImage
            className="hero__image"
            src="../../assets/images/home/hero/hero-image.png"
            alt=""
          />
        </div>
        <div className="col-12 col-md-9 cover" />
      </div>
    </Container>
  </StyledHero>
)

export default Hero
