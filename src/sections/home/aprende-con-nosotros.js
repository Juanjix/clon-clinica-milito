import React, { useState } from "react"

// Libraries
import styled from "styled-components"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"

// Styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Utils
import { colors } from "../../utils/variables/index"

// Components
import Container from "../../components/container"
import Button from "../../components/button"

// Icons
import ArrowRight from "../../assets/icons/icon-arrow-right.inline.svg"
import ArrowLeft from "../../assets/icons/icon-arrow-left.inline.svg"
import breakpoints from "../../utils/breakpoints"

const StyledAprende = styled.section`
  padding: 60px 0px;
  background-color: ${colors.charcoal};

  ${Container} {
    padding: 0;
  }

  ${breakpoints.medium`
    padding: 120px 0px 172px 0px;
  
  `}

  .title {
    margin-bottom: 32px;

    ${breakpoints.medium`
      margin-bottom: 80px;
    `}
  }

  .sliders {
    .slick-arrow {
      width: 46px;
      height: 46px;
    }

    .slick-next {
      z-index: 9999;
      right: 0;
    }

    .slick-prev {
      left: 0;
      z-index: 9999;
    }
  }
`

const AprendeconNosotros = () => {
  const [showMore, setShowMore] = useState(1)

  const HandleLoadMore = () => {
    setShowMore(showMore + 1)
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const data = useStaticQuery(graphql`
    query {
      contentfulSeccionAprendeConNosotros(
        title: { eq: "Aprende con nosotros" }
      ) {
        video {
          videoYoutubeId
          videoPlaceholder {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return (
    <StyledAprende>
      <Container>
        <h2 className="heading--s color--white text-center title">
          <span className="color--salmon">Aprende</span> con nosotros
        </h2>

        <div className="text-center d-md-none">
          {data &&
            data.contentfulSeccionAprendeConNosotros.video
              .slice(0, showMore)
              .map((video) => (
                <div className="mb-5 mt-5">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoYoutubeId}/4GsRCfbiwVw?autoplay=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}

          {showMore < data.contentfulSeccionAprendeConNosotros.video.length && (
            <Button onClick={HandleLoadMore} level="nuevo">
              Ver más
            </Button>
          )}
        </div>

        <div className="sliders text-center d-none d-md-block">
          <Slider {...settings}>
            {data.contentfulSeccionAprendeConNosotros.video.map((video) => (
              <div>
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoYoutubeId}/4GsRCfbiwVw?autoplay=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </StyledAprende>
  )
}

export default AprendeconNosotros
