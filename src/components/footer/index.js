import React from "react"

// Libraries
import styled from "styled-components"

// Icons
import Logo from "../../assets/icons/icon-logo-footer.inline.svg"
import Location from "../../assets/icons/icon-location.inline.svg"
import Mail from "../../assets/icons/icon-mail.inline.svg"
import WhatsApp from "../../assets/icons/icon-whatsapp.inline.svg"
import Phone from "../../assets/icons/icon-phone.inline.svg"
import TikTok from "../../assets/icons/icon-tiktok-footer.inline.svg"
import Instagram from "../../assets/icons/icon-instagram-footer.inline.svg"
import Youtube from "../../assets/icons/icon-youtube-footer.inline.svg"

// Background
import Background from "../../assets/images/home/nuestros-servicios/background.png"

// Components
import Container from "../container/index"
import breakpoints from "../../utils/breakpoints"

const StyledFooter = styled.div`
  padding: 60px 0;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 500px 700px;

  ${breakpoints.small`
    background-size: auto;
  `}

  .footer__list {
    max-width: 930px;
    margin-top: 32px;
    margin-bottom: 32px;
    padding-top: 24px;
    padding-bottom: 24px;
    border-top: 1px solid rgba(77, 95, 110, 0.3);
    border-bottom: 1px solid rgba(77, 95, 110, 0.3);

    .footer__list-content {
      li {
        max-width: 295px;
        white-space: nowrap;
        margin-bottom: 24px;
        ${breakpoints.medium`
          margin-bottom: 0;
        `}

        &:last-of-type {
          margin-bottom: 0;
        }
        svg {
          margin-right: 8px;
        }
      }
    }
  }

  .footer__media {
    max-width: 930px;
  }
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <div className="row">
        <div className="col-12 col-md-3">
          <Logo />
        </div>

        <div className="col-12 col-md-9">
          <div className="footer__list">
            <ul className="footer__list-content row justify-content-between">
              <li className="text--s d-flex align-items-center col-12 col-lg-4">
                <Location />
                Av. Gral Las Heras 1628 - Planta Baja
              </li>
              <li className="text--s  d-flex align-items-center col-12 col-lg-2">
                <Phone /> +54 9 11 48140050
              </li>
              <li className="text--s  d-flex align-items-center col-12 col-lg-2">
                <WhatsApp />
                +54 9 11 48700517
              </li>
              <li className="text--s  d-flex align-items-center col-12 col-lg-3">
                <Mail />
                info@clinicamilito.com
              </li>
            </ul>
          </div>
          <div className="footer__media d-md-flex align-items-center justify-content-between">
            <ul className="d-flex">
              <li>
                <a
                  href="https://www.tiktok.com/@clinicamilito"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTok />
                </a>
              </li>
              <li className="mx-5">
                <a
                  href="https://www.instagram.com/clinicamilito/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@clinicamilitook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube />
                </a>
              </li>
            </ul>
            <p className="text--xs color--charcoal__200 mt-3 mt-md-0">
              Todos los derechos reservados a Clinica Milito 2023
            </p>
          </div>
        </div>
      </div>
    </Container>
  </StyledFooter>
)
export default Footer
