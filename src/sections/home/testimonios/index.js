import React from "react"

// Libraries
import styled from "styled-components"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

// Styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Utils
import breakpoints from "../../../utils/breakpoints"

// Components
import Testimonio from "../../../components/testimonio"
import ArrowRight from "../../../assets/icons/icon-arrow-right.inline.svg"
import ArrowLeft from "../../../assets/icons/icon-arrow-left.inline.svg"
import Container from "../../../components/container"
import { colors } from "../../../utils/variables"

const StyledTestimonios = styled.section`
  padding: 108px 0 120px 0;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${breakpoints.medium`
    padding-bottom: 206px;
  `}

  .title {
    ${breakpoints.medium`
      margin-bottom: 35px;
    `}

    margin-bottom: 70px;
  }

  .slider {
    .slick-arrow {
      width: 46px;
      height: 46px;
    }

    .slick-next {
      bottom: -30%;
      right: 35%;
      top: auto;

      ${breakpoints.small`
        right: 40%;
      `}

      ${breakpoints.large`
        right: 46%;
        bottom: -35%;
        top: auto;
      `}
      &:hover {
        * {
          stroke: ${colors.charcoal};
        }
      }
    }

    .slick-prev {
      bottom: -30%;
      left: 35%;
      top: auto;

      ${breakpoints.small`
        left: 40%;
      `}

      ${breakpoints.large`
        left: 46%;
        bottom: -35%;
        top: auto;
      `}

      &:hover {
        * {
          stroke: ${colors.charcoal};
        }
      }
    }
  }
`

const Testimonios = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSeccionExperienciaMilito(title: { eq: "Experiencia Milito" }) {
        testimonios {
          autor
          testimonio {
            testimonio
          }
        }
      }
    }
  `)

  const settings = {
    slidesToShow: 3,
    speed: 500,
    infinite: true,
    nextArrow: <ArrowRight className="arrow-next" />,
    prevArrow: <ArrowLeft className="arrow-prev" />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  return (
    <StyledTestimonios>
      <Container className="big">
        <h2 className="heading--m text-center title">
          Experiencia <span className="color--salmon">Milito</span>
        </h2>
        <div className="slider text-center">
          <Slider {...settings}>
            {data.contentfulSeccionExperienciaMilito.testimonios.map(
              (testimonio) => (
                <motion.div
                  initial={{ y: 32, opacity: 0, scale: 0.99 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  <Testimonio
                    testimonio={testimonio.testimonio.testimonio}
                    autor={testimonio.autor}
                  />
                </motion.div>
              )
            )}
          </Slider>
        </div>
      </Container>
    </StyledTestimonios>
  )
}
export default Testimonios
