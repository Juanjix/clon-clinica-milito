import React, { useEffect, useState } from "react"

// Libraries
import styled from "styled-components"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

// Components
import Container from "../container"
import TratamientosCard from "../tratamientos/tratamientos-card"

// Utils
import { colors, fonts } from "../../utils/variables"
import breakpoints from "../../utils/breakpoints"

const StyledEspecialidadesContainer = styled.div`
  background-color: ${colors.salmon__50};
  padding-top: 78px;
  padding-bottom: 64px;

  .filter-list {
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    white-space: nowrap;
    margin: 0 auto;
    // border-bottom: 1px solid ${colors.charcoal__100};

    ${breakpoints.medium`
      justify-content: center;
    `}

    button {
      padding-bottom: 8px;
      font-family: ${fonts.primary};
      cursor: pointer;
      border-bottom: 1px solid ${colors.charcoal__100};
      box-sizing: border-box;
      width: 100%;

      &.active {
        border-bottom: 4px solid ${colors.salmon__500};
      }

      &:last-of-type {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

  .card-container {
    margin-top: 26px;
    ${breakpoints.medium`
      margin-top: 56px;
    `}

    .card {
      max-width: 480px;
      margin-bottom: 24px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

const EspecialidadesContainer = (props) => {
  const {
    data: { especialidad: allEspecialidades },
  } = props

  const [categorias, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [reads, setReads] = useState(allEspecialidades)

  useEffect(() => {
    const __categories = []

    allEspecialidades.forEach((read) => {
      read.categorias.forEach((category) => {
        if (!__categories.includes(category)) {
          __categories.push(category)
        }
      })
    })

    setCategories(__categories)
  }, [reads])

  useEffect(() => {
    if (activeCategory === "Todas") {
      setReads(allEspecialidades)
    } else {
      setReads(
        allEspecialidades.filter((read) =>
          read.categorias.includes(activeCategory)
        )
      )
    }
  }, [activeCategory])

  return (
    <StyledEspecialidadesContainer>
      <Container>
        <div className="row px-0">
          <div className="col-12 col-md-5 d-flex filter-list px-0">
            <button
              type="button"
              className={`color--charcoal font--weight-400 text--m  ${
                activeCategory === "Todas" ? "active" : " "
              }`}
              value="All"
              onClick={() => setActiveCategory("Todas")}
            >
              Todas
            </button>
            {categorias.map((category) => (
              <button
                type="button"
                className={` color--charcoal font--weight-400 text--m ${
                  category === activeCategory ? "active" : " "
                }`}
                value={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-start card-container">
          {reads.map((info, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              key={info.nombre}
              className="col-12 col-md-4 card"
            >
              <TratamientosCard
                imagen={info.featuredImage}
                nombre={info.nombre}
                slug={info.slug}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </StyledEspecialidadesContainer>
  )
}

EspecialidadesContainer.propTypes = {
  data: PropTypes.shape({
    tipo: PropTypes.string.isRequired,
    especialidad: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    imagen: PropTypes.shape({}).isRequired,
  }).isRequired,
}

export default EspecialidadesContainer
