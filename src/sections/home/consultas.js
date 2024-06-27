import React from "react"

// Libraries
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"

// Components
import Button from "../../components/button/index"
import Container from "../../components/container/index"

// Utils
import { colors } from "../../utils/variables"

// Icon Pattern
import Pattern from "../../assets/icons/icon-background-patern.inline.svg"
import Logo from "../../assets/icons/icon-logo-footer.inline.svg"

// Logos
import Whatsapp from "../../assets/icons/icon-whatsapp.inline.svg"
import Mail from "../../assets/icons/icon-mail-claro.inline.svg"
import breakpoints from "../../utils/breakpoints"

const StyledConsultas = styled.section`
  padding: 60px 16px;
  background-color: ${colors.salmon__300};
  position: relative;

  ${breakpoints.large`
    padding-top: 123px;
    padding-bottom: 123px;
  `}

  .title {
    margin-bottom: 16px;

    ${breakpoints.medium`
      margin-bottom: 40px;
    `}
  }

  .consultas__content {
    background-color: ${colors.salmon};
    padding: 32px 24px 271px 24px;
    position: relative;

    ${breakpoints.medium`
      padding-top: 96px;
      padding-left: 96px;
    `}

    .image {
      bottom: 0;
      position: absolute;
      max-width: 224px;
      width: 100%;
      ${breakpoints.small`
        max-width: 370px;
        width: 100%;
      `}
      ${breakpoints.medium`
        max-width: 477px;
        width: 100%;
      `};
    }
    svg {
      margin-right: 8px;
    }

    .buttons {
      button {
        margin-bottom: 16px;
        ${breakpoints.small`
          margin-bottom: 0;
          margin-right: 16px; 
        
        `}
      }
    }

    .logo {
      display: none;

      ${breakpoints.medium`
        display: block;
        position: absolute;
        right: 40px;
        left: auto;
        bottom: 40px;
        top: auto;

        svg{
           * {
            fill: white;
          }
        }

      `}
    }
  }

  .pattern {
    position: absolute;
    bottom: 0;
    left: 0;

    svg {
      width: 100%;
    }
  }
  .image {
    bottom: 0;
    right: 0;
  }
`

const Consultas = () => (
  <StyledConsultas>
    <Container>
      <div className="row justify-content-center">
        <motion.div
          initial={{ y: 32, opacity: 0, scale: 0.99 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="consultas__content col-12 col-lg-10"
        >
          <div className="col-12 col-lg-6">
            <h2 className="heading--s text-center text-sm-start title">
              Hacé tu consulta con
              <br className="d-md-none" /> nosotros
            </h2>
            <div className="d-flex flex-column flex-sm-row buttons">
              <Button level="primary" background="white">
                <a
                  href="https://api.whatsapp.com/send/?phone=5491148700517&text&type=phone_number&app_absent=0"
                  className="d-flex aling-items-center text-decoration-none text--s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Whatsapp /> WhatsApp
                </a>
              </Button>
              <Button level="tertiary">
                <Link
                  to="/contacto"
                  className="d-flex aling-items-center text--s text-decoration-none"
                >
                  <Mail />
                  Contacto
                </Link>
              </Button>
            </div>
          </div>

          <div className="pattern">
            <Pattern />
          </div>
          <div>
            <StaticImage
              src="../../assets/images/home/consultas/image-consultas.png"
              alt=""
              quality={100}
              className="image"
            />
          </div>
          <div className="logo">
            <Logo />
          </div>
        </motion.div>
      </div>
    </Container>
  </StyledConsultas>
)

export default Consultas
