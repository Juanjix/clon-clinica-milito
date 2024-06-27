import React from "react"

// Libraries
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

// Utils
import { colors, fonts } from "../../utils/variables"
import breakpoints from "../../utils/breakpoints"

const ButtonStyles = css`
  min-height: 48px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 24px 64px;
  font-family: ${fonts.primary};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3em;
  letter-spacing: 0.04em;
  white-space: nowrap;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s ease;

  ${breakpoints.medium`
     padding: 14px 30px;
  `}

  // Pseudo States:start
  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: 2px solid ${colors.charcoal};
  }

  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }
  // Pseudo States:end

  &::after {
    content: "";
    width: 0;
    aspect-ratio: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 50%;
    transition: all 0.5s ease, width 0s ease 0.5s;
    z-index: 2;
  }

  span {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 3;
  }

  ${(props) =>
    props.level === "primary" &&
    css`
      background-color: ${colors.charcoal};

      svg {
        * {
          stroke: ${colors.salmon__500};
        }
      }

      &:hover {
        background-color: ${colors.salmon};
      }

      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: 0;
      }
    `}

  ${(props) =>
    props.level === "primary" &&
    props.background === "white" &&
    css`
      background-color: ${colors.white};

      a {
        color: ${colors.charcoal__700};
      }

      svg {
        * {
          stroke: ${colors.salmon__500};
        }
      }

      &:hover {
        background-color: ${colors.charcoal__800};
        a {
          color: ${colors.white};
        }
      }

      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: 0;
      }
    `}

  ${(props) =>
    props.level === "secondary" &&
    css`
      background-color: ${colors.white};
      color: ${colors.charcoal};
      border: 2px solid ${colors.salmon};

      &:hover {
        border: 2px solid ${colors.salmon__500};

        a {
          color: ${colors.salmon};
        }

        &::after {
          background-color: ${colors.white};
        }
      }
    `}

    ${(props) =>
    props.level === "tertiary" &&
    css`
      background-color: ${colors.salmon};
      color: ${colors.white};
      border: 2px solid ${colors.salmon__300};

      &:hover {
        color: ${colors.charcoal};
        svg {
          * {
            stroke: ${colors.charcoal};
          }
        }
        a {
          color: ${colors.charcoal};
        }
        border: 2px solid ${colors.charcoal};
      }

      &::after {
        background-color: ${colors.white};
      }
    `}

    ${(props) =>
    props.level === "nuevo" &&
    css`
      background-color: ${colors.charcoal};
      color: ${colors.white};
      border: 1px solid ${colors.salmon__500};

      &:hover {
        color: ${colors.salmon};
        svg {
          * {
            stroke: ${colors.charcoal};
          }
        }
        a {
          color: ${colors.charcoal};
        }
      }

      &::after {
        background-color: ${colors.white};
      }
    `}

  & > svg {
    margin-right: 8px;
  }
`

const StyledButton = styled.button`
  ${ButtonStyles};
`

const StyledButtonLink = styled(Link)`
  ${ButtonStyles};
`

const StyledButtonExternalLink = styled.a`
  ${ButtonStyles};
`

const Button = (props) => {
  const {
    level,
    type,
    to,
    external,
    background,
    disabled,
    children,
    className,
    onClick,
  } = props

  /**
   * Returns a <button></button>
   */
  if (type === "button") {
    return (
      <StyledButton
        level={level}
        type="button"
        background={background}
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        <span>{children}</span>
      </StyledButton>
    )
  }

  /**
   * Returns a Gatsby <Link></Link>
   */
  if (!external) {
    return (
      <StyledButtonLink
        level={level}
        to={to}
        className={className}
        background={background}
        onClick={onClick}
      >
        <span>{children}</span>
      </StyledButtonLink>
    )
  }

  /**
   * Returns a <a></a>
   */
  return (
    <StyledButtonExternalLink
      className={className}
      level={level}
      background={background}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <span>{children}</span>
    </StyledButtonExternalLink>
  )
}

Button.propTypes = {
  /** **Hierarchy level for the component** */
  level: PropTypes.oneOf(["primary", "secondary", "tertiary", "nuevo"]),
  /** **The selector that will render the component** */
  type: PropTypes.oneOf(["button", "link"]),
  /** **URL path of the link (only provided when using `link` as type)** */
  to: PropTypes.string,
  /** **If _true_, the link will be opened on a new tab**  */
  external: PropTypes.bool,
  background: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  level: "primary",
  type: "button",
  to: "/",
  external: false,
  background: "white",
  disabled: false,
  className: null,
  onClick: null,
}

export default Button
