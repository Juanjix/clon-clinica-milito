import React from "react"

// Libraries
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// Utils
import { colors } from "../../utils/variables/index"

// Components
import Container from "../../components/container"
import breakpoints from "../../utils/breakpoints"

// Icons
import Pattern from "../../assets/icons/pattern-salmon.inline.svg"

const StyledLaClinica = styled.section`
  padding: 40px 0 64px 0;
  background-color: ${colors.charcoal};
  position: relative;

  ${breakpoints.medium`
    padding-top: 130px;
    padding-bottom: 130px;
  `}

  .line {
    width: 81px;
    border: 1px solid ${colors.salmon};
    margin-top: 16px;
    margin-bottom: 16px;

    ${breakpoints.medium`
      margin-top: 24px;
      margin-bottom: 24px;
    `}
  }

  img {
    z-index: 5;
  }

  .pattern {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 4;
  }
`

const LaClinica = () => (
  <StyledLaClinica>
    <Container>
      <div className="row justify-content-between align-items-md-center">
        <div className="col-12 col-md-6 mb-5 mb-md-0">
          <h2 className="heading--s color--white">La clínica</h2>
          <span className="line d-flex" />
          <p className="text--s color--white">
            Con más de 30 años de trayectoria en el campo de la cirugía plástica
            y medicina estética, hemos establecido una reputación sólida y nos
            hemos convertido en referentes en nuestra especialidad. Fundada en
            la década de 1990, nuestra clínica ha sido un destino confiable para
            aquellos que buscan mejorar su apariencia y bienestar. A lo largo de
            los años, hemos evolucionado y crecido para satisfacer las
            necesidades de nuestros pacientes, adaptando continuamente nuestros
            servicios y tecnologías para brindar los tratamientos más
            vanguardistas y efectivos.
            <br />
            <br /> Recientemente, hemos dado un paso importante en nuestra
            búsqueda de la excelencia al trasladarnos a un nuevo espacio en la
            misma zona en la que hemos estado durante décadas. Este nuevo
            entorno ha sido cuidadosamente diseñado para ofrecer un ambiente
            acogedor y confortable, con amplias instalaciones y una iluminación
            mejorada para garantizar la comodidad de nuestros pacientes. Nuestro
            objetivo principal es proporcionar una atención integral y
            personalizada, respaldada por la más alta calidad en técnicas
            quirúrgicas y tratamientos estéticos.
            <br />
            <br /> Nuestro equipo de profesionales altamente capacitados y
            especializados está comprometido en brindarle una experiencia
            segura, confiable y satisfactoria en cada etapa de su viaje
            estético. En nuestra clínica, nos enorgullece crear un ambiente
            cálido y acogedor donde nuestros pacientes se sientan cómodos y
            confiados durante su visita. Valoramos su confianza en nosotros y
            nos esforzamos por superar sus expectativas en cada consulta,
            procedimiento o tratamiento al que se sometan. Ya sea que esté
            interesado en cirugía plástica, tratamientos de medicina estética o
            procedimientos cosméticos no invasivos; estamos aquí para brindarle
            la mejor atención integral centrada en sus necesidades individuales.
            Gracias por elegirnos como su clínica de confianza. Esperamos poder
            ser parte de su viaje hacia la belleza y el bienestar.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <div>
            <StaticImage
              src="../../assets/images/clinica-milito/la-clinica-image.png"
              alt=""
              quality={100}
              className="image mb-5 mb-md-0 "
            />
          </div>
        </div>
        <div>
          <Pattern className="pattern d-none d-md-block" />
        </div>
      </div>
    </Container>
  </StyledLaClinica>
)

export default LaClinica
