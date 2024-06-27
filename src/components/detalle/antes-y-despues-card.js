// import React from "react"

// // Libraries
// import styled from "styled-components"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
// import PropTypes from "prop-types"

// // Utils
// import Slider from "react-slick"
// import breakpoints from "../../utils/breakpoints"
// import { colors } from "../../utils/variables"

// // Components
// import ArrowRight from "../../assets/icons/icon-arrow-right.inline.svg"
// import ArrowLeft from "../../assets/icons/icon-arrow-left.inline.svg"

// const StyledAntesyDespuesCard = styled.div`
//   padding: 40px 16px 110px 16px;
//   background-color: white;
//   max-width: 966px;
//   margin: 0 auto;

//   ${breakpoints.medium`
//     padding: 65px 104px 122px 104px;
//   `}

//   .line {
//     width: 81px;
//     border: 1px solid ${colors.salmon};
//     display: flex;
//     margin-top: 16px;
//     margin-bottom: 26px;
//   }

//   .slick-arrow {
//     width: 46px;
//     height: 46px;
//   }

//   .slick-next {
//     bottom: calc(0% - 100px);
//     right: 32%;
//     top: auto;

//     ${breakpoints.medium`
//       left: 60%;
//     `}

//     ${breakpoints.large`
//       left: 75%;
//     `}

//     &:hover {
//       * {
//         stroke: ${colors.charcoal};
//       }
//     }
//   }

//   .slick-prev {
//     bottom: -100px;
//     left: 32%;
//     top: auto;

//     ${breakpoints.small`
//       left: 40%;
//     `}

//     ${breakpoints.large`
//       left: 60%;
//     `}

//      &:hover {
//       * {
//         stroke: ${colors.charcoal};
//       }
//     }
//   }

//   .title-section {
//     max-width: 200px;
//   }

//   .content {
//     max-width: 450px;
//   }
// `

// const settings = {
//   slidesToShow: 2,
//   speed: 500,
//   infinite: true,
//   nextArrow: <ArrowRight className="arrow-next" />,
//   prevArrow: <ArrowLeft className="arrow-prev" />,
// }

// const AntesyDespuesCard = (props) => {
//   const { title, imagenAntes, imagenDespues } = props

//   const imagen1 = getImage(imagenAntes)
//   const imagen2 = getImage(imagenDespues)

//   return (
//     <StyledAntesyDespuesCard>
//       <div className="d-flex flex-column flex-sm-row justify-content-between">
//         <div className="title-section">
//           <h2 className="heading--s">{title}</h2>
//           <span className="line" />
//         </div>
//         <div className="content">
//           <Slider {...settings}>
//             <div>
//               <GatsbyImage image={imagen1} />
//             </div>
//             <div>
//               <GatsbyImage image={imagen2} />
//             </div>
//             <div>
//               <GatsbyImage image={imagen1} />
//             </div>
//             <div>
//               <GatsbyImage image={imagen2} />
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </StyledAntesyDespuesCard>
//   )
// }

// AntesyDespuesCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   imagenAntes: PropTypes.shape({}).isRequired,
//   imagenDespues: PropTypes.shape({}).isRequired,
// }
// export default AntesyDespuesCard
