import React, { useState } from "react"

// Libraries
import styled from "styled-components"
import axios from "axios"

// Popup para mostrar el mensaje de success
import Popup from "../../components/popup"

// Icons
import Instagram from "../../assets/icons/icon-instagram-media.inline.svg"
import Youtube from "../../assets/icons/icon-youtube-media.inline.svg"
import TikTok from "../../assets/icons/icon-tiktok-media.inline.svg"
import Pattern from "../../assets/icons/pattern-salmon.inline.svg"
import Arrow from "../../assets/icons/icon-carret-down.inline.svg"

// Utils
import { colors, fonts } from "../../utils/variables"
import breakpoints from "../../utils/breakpoints"

// Components
import Button from "../../components/button/index"
import Container from "../../components/container"

const StyledForm = styled.div`
  margin: 0 auto;
  max-width: 1008px;

  .line {
    width: 81px;
    border: 1px solid ${colors.salmon};
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
  }

  .form{
    padding 40px 16px 64px 16px;
    background-color: white;

    ${breakpoints.medium`
      padding 96px 104px 104px 104px;
    `}

    .form-content{
      display: flex;
      flex-direction: column;
    }

    .label {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      text-transform: uppercase;
      font-weight: 700;

      input{
        margin-top: 8px;
        padding-bottom 4px;
        border: 0;
        border-bottom: 1px solid ${colors.charcoal__200};
        font-family: ${fonts.primary};

        ::placeholder{
          color: ${colors.charcoal__200};
        }


        :focus { outline: none; }

        :focus{
          border-bottom: 1px solid ${colors.salmon};
        }
      }
      

      textarea {
        height: 41px;
        transition: height 0.6s ease-in-out;

        &:focus,
        &:valid {
          height: 240px;
          outline: none;
           border: 1px solid ${colors.salmon} !important;

          ${breakpoints.small`
            height: 95px;
            border: 1px solid ${colors.salmon};
          `}
      }
    }
  }

    .button-arrow {
      box-sizing: border-box;
      svg {
        margin-left: 10px;
        transform: rotate(-90deg);
        * {
          stroke: ${colors.salmon__500};
        }
      }
    }
  }

  .form-footer{
      background-color: ${colors.charcoal};
      padding: 64px 16px;
      color: white;
      position: relative;
      margin-top: 64px;


      ${breakpoints.medium`
        padding: 100px 103px;
        margin-top: 0;
      `}

      .form-media{
        margin-top: 20px;

        ${breakpoints.medium`
          margin-top: 0;
        `}

        svg{
          margin-right: 20px;
        }

        li{
          a{
            text-decoration: none;
            display: flex;
            align-items: center;
            margin-bottom: 24px;
          }

          &:hover{
            *{
              stroke: ${colors.salmon};
            }
          }
        }
      }

      .pattern{
        position: absolute;
        width: 150px;
        height: 150px;
        overflow: hidden;
        right: 0;
        bottom: 0;

        ${breakpoints.medium`
          width: 300px;
          height: auto;
        `}
      }
    }

    .error-message {
      color: red;
      margin-top: 4px;
    }
  }
`

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
  })

  const [formErrors, setFormErrors] = useState({
    nombre: false,
    email: false,
    telefono: false,
    consulta: false,
  })

  const [isPopupOpen, setPopupOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const isValidEmail = (email) => {
    // Validar el formato de correo electrónico aquí
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const closePopup = () => {
    // Cierra el popup
    setPopupOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar campos aquí
    const errors = {}

    if (!formData.nombre.trim()) {
      errors.nombre = true
    }

    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      errors.email = true
    }

    if (!formData.telefono.trim()) {
      errors.telefono = true
    }

    if (!formData.consulta.trim()) {
      errors.consulta = true
    }

    setFormErrors(errors)

    // Si hay errores, no envíes el formulario
    if (Object.values(errors).some((error) => error === true)) {
      return
    }

    // Si no hay errores, envía el formulario
    axios
      .post("https://getform.io/f/lbkmoqxb", formData, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        console.log("Correo electrónico enviado con éxito:", response)

        // Puedes hacer aquí alguna acción adicional, como mostrar un mensaje de éxito.
        setPopupOpen(true)
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error)
        // Puedes mostrar un mensaje de error al usuario si lo deseas.
      })
  }

  return (
    <StyledForm>
      <Container>
        <div className="row form">
          <div className="col-12 col-md-5">
            <h2 className="heading--s">Contacto</h2>
            <span className="line" />
          </div>
          <div className="col-12 col-md-7">
            <form className="form-content">
              <label htmlFor="nombre" className="label text--xs">
                Nombre:
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  required
                  className="text--s"
                />
                {formErrors.nombre && (
                  <span className="error-message text--s">Campo requerido</span>
                )}
              </label>
              <label htmlFor="email" className="label text--xs">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ingresa tu email"
                  required
                  className="text--s"
                />
                {formErrors.email && (
                  <span className="error-message text--s">
                    Email no válido o campo requerido
                  </span>
                )}
              </label>
              <label htmlFor="telefono" className="label text--xs">
                Teléfono
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ingresa tu numero de telefono"
                  required
                  className="text--s"
                />
                {formErrors.telefono && (
                  <span className="error-message text--s">Campo requerido</span>
                )}
              </label>
              <label htmlFor="consulta" className="label mb-1 text--xs">
                Consulta
                <textarea
                  name="consulta"
                  value={formData.consulta}
                  onChange={handleChange}
                  placeholder="Escribe tu consulta"
                  required
                  className="text--xs"
                />
                {formErrors.consulta && (
                  <span className="error-message text--s">Campo requerido</span>
                )}
              </label>
              <div className="button-arrow mt-5">
                <Button
                  type="submit"
                  level="tertiary"
                  className="border-0"
                  onClick={handleSubmit}
                >
                  Enviar consulta <Arrow />
                </Button>
              </div>
            </form>
            {/* Mostrar el popup si isPopupOpen es verdadero */}

            {isPopupOpen && (
              <Popup
                message="Su mensaje ha sido enviado."
                onClick={closePopup}
              />
            )}
          </div>
        </div>
        <div className="row form-footer">
          <div className="col-12 col-md-5">
            <h2 className="heading--s">
              Clínica Milito
              <br /> en las redes
            </h2>
          </div>
          <div className="col-12 col-md-7">
            <ul className="form-media">
              <li>
                <a
                  href="https://www.instagram.com/clinicamilito/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  @clinicamilito
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@clinicamilito"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTok />
                  @clinicamilito
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@clinicamilitook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube />
                  clinicamilitook
                </a>
              </li>
            </ul>
          </div>
          <div className="pattern">
            <Pattern />
          </div>
        </div>
      </Container>
    </StyledForm>
  )
}

export default Form
