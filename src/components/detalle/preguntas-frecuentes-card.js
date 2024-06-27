import React, { useState } from "react"

// Libraries
import styled from "styled-components"
import PropTypes from "prop-types"

// Utils
import { colors } from "../../utils/variables"
// import breakpoint from "../../utils/breakpoints"

// Components
import Plus from "../../assets/icons/number.inline.svg"
import breakpoints from "../../utils/breakpoints"

const StyledPreguntasCard = styled.div`
  padding: 40px 16px;
  background-color: white;
  max-width: 968px;
  margin: 16px auto 0 auto;

  ${breakpoints.medium`
    padding: 96px 104px;
  `}

  .line {
    width: 81px;
    border: 1px solid ${colors.salmon};
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
  }

  .preguntas-section {
    max-width: 485px;
    .title {
      width: 100%;
      border-top: 1px solid ${colors.salmon};
      padding-top: 16px;
      padding-bottom: 16px;
      cursor: pointer;

      span {
        max-width: 235px;

        ${breakpoints.medium`
          max-width: 385px;
        `}
      }
    }
  }
`

const PreguntasFrecuentesCard = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <StyledPreguntasCard>
      <div className="row">
        <div className="col-12 col-md-4">
          <h2 className="heading--s mb-5 mb-md-0">
            Preguntas
            <br className="d-none d-md-block" /> Frecuentes
          </h2>
          <span className="line d-none d-md-flex" />
        </div>
        <div className="col-12 col-md-8">
          {data &&
            data.map(({ pregunta, respuesta }, index) => (
              <div key={pregunta} className="preguntas-section">
                <button
                  onClick={() => handleClick(index)}
                  type="button"
                  className="title text-start d-flex align-items-center justify-content-between text--s color--charcoal"
                >
                  <span className="font-weight--500">{pregunta}</span>

                  <Plus />
                </button>
                {activeIndex === index && (
                  <p className="text--s content color--charcoal px-2 mb-3">
                    {respuesta.respuesta}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </StyledPreguntasCard>
  )
}

PreguntasFrecuentesCard.propTypes = {
  data: PropTypes.arrayOf({
    pregunta: PropTypes.string,
    respuesta: PropTypes.arrayOf(PropTypes.string),
  }),
}

PreguntasFrecuentesCard.defaultProps = {
  data: [
    {
      pregunta: "",
      respuesta: [""],
    },
  ],
}

export default PreguntasFrecuentesCard
