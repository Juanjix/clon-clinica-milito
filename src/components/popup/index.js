import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Button from "../button"
import breakpoints from "../../utils/breakpoints"

const PopupOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;

  ${breakpoints.medium`
    padding: 91px 74px;
  `}
`

const Popup = (props) => {
  const { message, onClose } = props
  return (
    <PopupOverlay>
      <PopupContent>
        <div>
          <h2 className="heading--s mb-2">{message}</h2>
          <p className="text--s mb-5">
            Gracias por comunicarte con Clinica Milito, le <br />
            contestaremos a la brevedad.
          </p>
        </div>

        <Button type="link" level="tertiary" onClose={onClose}>
          Cerrar
        </Button>
      </PopupContent>
    </PopupOverlay>
  )
}

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.bool.isRequired,
}

export default Popup
