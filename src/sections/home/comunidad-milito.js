import React from "react"

// Labraries
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Container from "../../components/container/index"
import Button from "../../components/button"

// Utils
import breakpoints from "../../utils/breakpoints"

// Icons
import Instagram from "../../assets/icons/icon-instagram.inline.svg"

const StyledComunidadMilito = styled.section`
  padding: 60px 0;
  text-align: center;

  .title {
    margin-bottom: 46px;
  }

  button {
    svg {
      margin-right: 4px;
    }
  }

  .pics {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    ${breakpoints.medium`
      justify-content: space-between;
      margin-bottom: 60px;
      flex-direction: row;
    `}

    img {
      width: 288px;
      height: 288px;

      ${breakpoints.medium`
        width: 176px;
        height: 176px;
      `}
    }
  }
`

const ComuniadadMilito = () => (
  <StyledComunidadMilito>
    <Container>
      <h2 className="heading--m text-center color--charcoal title">
        Comunidad <span className="color--salmon">Milito</span>
      </h2>
      <div className="pics">
        <div>
          <StaticImage
            src="../../assets/images/home/comunidad-milito/comunidad-1.png"
            alt=""
            quality={100}
            width="176"
            height={176}
            className="image mb-5 mb-md-0"
          />
        </div>
        <div>
          <StaticImage
            src="../../assets/images/home/comunidad-milito/comunidad-2.png"
            alt=""
            quality={100}
            width="176"
            height="176"
            className="image mb-5 mb-md-0"
          />
        </div>
        <div>
          <StaticImage
            src="../../assets/images/home/comunidad-milito/comunidad-3.png"
            alt=""
            quality={100}
            width="176"
            height="176"
            className="image mb-5 mb-md-0 "
          />
        </div>
        <div>
          <StaticImage
            src="../../assets/images/home/comunidad-milito/comunidad-4.png"
            alt=""
            quality={100}
            width="176"
            height="176"
            className="image mb-5 mb-md-0 "
          />
        </div>
        <div>
          <StaticImage
            src="../../assets/images/home/comunidad-milito/comunidad-5.png"
            alt=""
            quality={100}
            width="176"
            height="176"
            className="image mb-5 mb-md-0 "
          />
        </div>
        <div>
          <StaticImage
            src="../../assets/images/home/comunidad-milito/comunidad-6.png"
            alt=""
            quality={100}
            width="176"
            height="176"
            className="image mb-5 mb-md-0 "
          />
        </div>
      </div>
      <Button level="secondary">
        <a
          href="https://www.instagram.com/clinicamilito/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="color--charcoal d-flex align-items-center text-decoration-none text--s"
        >
          <Instagram />
          Seguinos en instagram
        </a>
      </Button>
    </Container>
  </StyledComunidadMilito>
)

export default ComuniadadMilito
