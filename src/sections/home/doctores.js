import React from "react"

// Libraries
import styled from "styled-components"
import Slider from "react-slick"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

// Styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Utils
import { colors } from "../../utils/variables/index"
import breakpoint from "../../utils/breakpoints"

// Components
import Container from "../../components/container/index"

// Icons
import ArrowRight from "../../assets/icons/icon-arrow-right.inline.svg"
import ArrowLeft from "../../assets/icons/icon-arrow-left.inline.svg"
import Arrow from "../../assets/icons/icon-arrow.inline.svg"
import Pattern from "../../assets/icons/pattern-salmon.inline.svg"
import Logo from "../../assets/icons/logo-milito-doctores.inline.svg"

const StyledDoctores = styled.section`
  padding: 60px 16px 120px 16px;
  background-color: ${colors.charcoal};

  ${breakpoint.medium`
    padding: 120px 16px;
  `}

  .title {
    margin-top: 24px;
    margin-bottom: 24px;

    ${breakpoint.medium`
      margin-top: 40px;
      margin-bottom: 40px;
    `}
  }

  .line {
    width: 132px;
    border-top: 1px solid ${colors.salmon};
    ${breakpoint.medium`
      width: 280px;
    `}
  }

  .doctores {
    position: relative;
    .doctores__info {
      ${breakpoint.medium`
        padding-bottom: 30px;
      `}
    }

    .doctores__logo {
      display: none;

      ${breakpoint.large`
        display: block;
        position: absolute;
        top: 40px;
        right: 0;
        left: 50px;
        z-index: 9999;
      `}
    }
  }

  .slick-arrow {
    width: 46px;
    height: 46px;
  }

  .slick-next {
    bottom: -10%;
    left: 25%;
    top: auto;

    ${breakpoint.small`
      left: 75px;
    `}

    ${breakpoint.medium`
      left: 60%;
    `}

     ${breakpoint.large`
      left: 57%;
      bottom: 50px;
    `}
      &:hover {
      * {
        stroke: white;
      }
    }
  }

  .slick-prev {
    bottom: -10%;
    left: 16px;
    top: auto;
    z-index: 8888;

    ${breakpoint.medium`
      left: calc(50% + 16px);
    `}

    ${breakpoint.large`
      bottom: 50px;
      z-index: 8888;
    `}

    &:hover {
      * {
        stroke: white;
      }
    }
  }

  .background-pattern {
    display: none;

    ${breakpoint.large`
      display: block;
      svg {
        position: absolute;
        left: auto;
        right: 0;
        top: auto;
        bottom: -780px;
      }
    `}
  }

  .image {
    z-index: 8889;
  }

  .link {
    box-sizing: border-box;
    padding-bottom: 8px;
  }

  .text {
    &:hover {
      svg {
        * {
          stroke: white;
        }
      }
    }
  }
`

const Doctores = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSeccionDoctores(title: { eq: "Homepage - Doctores" }) {
        doctores {
          bio {
            bio
          }
          imagen {
            gatsbyImageData
          }
          nombre
          apellido
          profesion
        }
      }
    }
  `)

  // Carrousel Settings
  const settings = {
    dots: false,
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  }

  return (
    <StyledDoctores>
      <Container>
        <div className="doctores-slider" id="doctores">
          <Slider {...settings}>
            {data.contentfulSeccionDoctores.doctores.map((doctor) => (
              <div className="doctores row d-flex justify-content-evenly mx-0">
                <motion.div className="col-12 col-md-4">
                  <GatsbyImage
                    alt=""
                    quality={100}
                    image={getImage(doctor.imagen)}
                    className="image"
                  />
                  <div className="doctores__logo">
                    <Logo />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 64, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="doctores__info col-12 col-md-5"
                >
                  <div className="d-flex align-items-center justify-content-between mt-5 mt-md-0">
                    <p className="text--xs text-uppercase color--salmon__500">
                      nuestros doctores
                    </p>
                    <span className="line" />
                  </div>

                  <h2 className="color--white title">
                    {doctor.nombre}{" "}
                    <span className="color--salmon__500">
                      {doctor.apellido}
                    </span>
                  </h2>
                  <p className="text--m color--white mb-3">{doctor.bio.bio}</p>

                  <span className="text-decoration-underline text">
                    <Link
                      to="/clinica-milito"
                      className="color--salmon__500 color-hover--white d-flex align-items-center"
                    >
                      Más info sobre {doctor.profesion}
                      <Arrow />
                    </Link>
                  </span>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="background-pattern">
          <Pattern />
        </div>
      </Container>
    </StyledDoctores>
  )
}

export default Doctores
