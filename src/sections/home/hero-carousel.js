import React, { useState } from "react"

// Libraries
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import Slider from "react-slick"

// Utils
import breakpoints from "../../utils/breakpoints"

// icons
import BackgroundPattern from "../../assets/images/home/hero/pattern-mobile.png"

// Components
import Container from "../../components/container/index"

const StyledBackground = styled.div`
  transition: background-color 0.3s ease;
`

const StyledHero = styled.section`
  ${Container} {
    position: absolute;
    bottom: -24px;
    z-index: 999;
    transition: 0.2s all easy;

    ${breakpoints.small`
      bottom: 0 !important;
    `}
    ${breakpoints.large`
      padding: 0 0 0 120px;
    `}
  }

  position: relative;
  min-height: 500px;
  height: calc(100vh + 120px);

  ${breakpoints.medium`
    height: calc(100vh);
  `}

  .ejemplo {
    position: relative;

    .reference {
      display: flex;
      align-items: center;
      margin-bottom: 25px;

      span {
        margin-left: 24px;
        border: 1px solid white;
        display: flex;
        width: 150px;
      }
    }

    .hero__text {
      max-width: 475px;
      width: 100%;
      height: 270px;
      margin-bottom: 30px;

      .paragraph {
        max-width: 385px;
        width: 100%;
      }
    }
  }

  .slick-slider {
    position: relative;
    .slick-list {
      bottom: 0;
      position: relative;
    }

    .hero__image {
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        z-index: 9999;
        bottom: 0;
      }
    }

    .slick-dots {
      background-color: white;
      width: 0px;
      bottom: 5%;
      right: calc(50% + 32px);
      left: calc(50% + 32px;);
      color: white !important;
      display: flex !important;

      ${breakpoints.small`
        left: 0;
        bottom: 20%;

      `}

      .slick-active {
        button::before {
          color: white;
          border: 1px solid white;
          border-radius: 50%;
        }
      }
    }
  }

  .cover {
    position: absolute;
    background-image: url(${BackgroundPattern});
    height: 300px;
    width: 400px;
    overflow-y: hidden;
    bottom: 0px;
    right: 0;
    z-index: 2;

    ${breakpoints.medium`
      width: 500px;
      height: 450px;
      right: 0;
    `}

    ${breakpoints.large`
      width: 900px;
      height: 570px;
      right: 0;
    `}
  }
`

const Hero = (props) => {
  const {
    data: { contentfulHomepageHero },
  } = props

  // Estado para cambiar el color del background
  const [backgroundColor, setBackgroundColor] = useState(
    contentfulHomepageHero.hero[0].backgroundColor
  )
  // Funcion que lo cambia
  const handleSlideChange = (currentIndex) => {
    const currentHero = contentfulHomepageHero.hero[currentIndex]
    setBackgroundColor(currentHero.backgroundColor)
  }

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    arrows: false,
    slide: "> div",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <motion.div
      initial={{ y: 32, opacity: 0, scale: 0.99 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
      }}
    >
      <StyledBackground className={`bg--${backgroundColor}`}>
        <StyledHero>
          <Container>
            <Slider {...settings} afterChange={handleSlideChange}>
              {contentfulHomepageHero.hero.map((d) => (
                <div className="ejemplo">
                  <div className="mb-4 mb-sm-0 text-intro">
                    <div className="d-sm-flex">
                      <div className="hero__text">
                        <h1 className="heading--l maxi mb-3 text-start  text-md-start color--white">
                          {d.titulo}
                          <br />
                          <span className="color--charcoal">
                            {d.tituloEnNegro}
                          </span>
                        </h1>
                        <p className="paragraph text--s text-start text-md-start  mb-5 color--white">
                          {d.subtitulo}
                        </p>
                      </div>

                      <div className="hero__image">
                        <GatsbyImage
                          image={getImage(d.imagen)}
                          quality={100}
                          maxWidth={620}
                          maxHeight={605}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Container>
          <div className="cover" />
        </StyledHero>
      </StyledBackground>
    </motion.div>
  )
}

Hero.propTypes = {
  data: PropTypes.string.isRequired,
}
export default Hero
