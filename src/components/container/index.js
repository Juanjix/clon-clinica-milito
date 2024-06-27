// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "../../utils/breakpoints"

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  ${breakpoint.small`
    padding: 0 32px;
  `}

  ${breakpoint.large`
    padding: 0;
  `}

  ${breakpoint.wide`
    max-width: 1440px;
    width: 100%;
  `}


  &.big {
    max-width: 1580px;
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;

    ${breakpoint.medium`
      padding: 0;
    `}
  }
`

export default Container
