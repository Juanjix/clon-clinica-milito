import React from "react"

// Libraries
import styled from "styled-components"
import PropTypes from "prop-types"

// Utils
import { colors } from "../../utils/variables"
import breakpoints from "../../utils/breakpoints"

const StyledDondeLoUtilizamos = styled.div`
  background-color: ${colors.white};
  max-width: 966px;
  margin: 0 auto;
  padding: 40px 16px;

  ${breakpoints.medium`
    padding: 86px 104px;
  `}

  ${breakpoints.large`
    padding: 115px 104px;
  `}

  .line {
    width: 81px;
    border: 1px solid ${colors.salmon};
    display: flex;
    margin-bottom: 16px;
    margin-top: 16px;
  }

  .title {
    max-width: 220px;
    margin-bottom: 16px;
  }

  .list-content {
    ${breakpoints.large`
      max-width: 485px;
      width: 100%;
    `}

    ul {
      svg {
        margin-right: 8px;
      }
      li {
        display: flex;
        flex-direction: row;
        align-items: center;

        &::before {
          content: "";
          color: ${colors.salmon};
          margin-right: 19px;
          width: 12px;
          border: 1px solid ${colors.salmon};
        }

        &:last-of-type {
          align-items: start;

          &::before {
            margin-top: 8px;
            content: "";
            color: ${colors.salmon};
            margin-right: 19px;
            // width: 29px;

            ${breakpoints.small`
              content: "";
              margin-right: 19px;
              // width: 13px;
            `}

            ${breakpoints.medium`
              content: "";
              margin-right: 19px;
              // width: 20px;
            `}

            ${breakpoints.large`
              content: "";
              margin-right: 19px;
              // width: 16px;
            `}
          }
        }
      }
    }
  }
`

const DondeLoUtilizamosCard = (props) => {
  const { title, listaDeDetalles } = props
  return (
    <StyledDondeLoUtilizamos>
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <div className="title">
          <h2 className="heading--s">{title}</h2>
          <span className="line" />
        </div>

        <div className="list-content">
          <ul>
            {listaDeDetalles.map((detalle) => (
              <li className="mb-3">{detalle}</li>
            ))}
          </ul>
        </div>
      </div>
    </StyledDondeLoUtilizamos>
  )
}

DondeLoUtilizamosCard.propTypes = {
  title: PropTypes.string,
  listaDeDetalles: PropTypes.arrayOf(PropTypes.string),
}

DondeLoUtilizamosCard.defaultProps = {
  title: "",
  listaDeDetalles: "",
}
export default DondeLoUtilizamosCard
