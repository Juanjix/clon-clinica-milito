import React, { useEffect, useState } from "react"

// Libraries
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// Components
import Container from "../container"

// Utils
import { colors, fonts } from "../../utils/variables"
import breakpoint from "../../utils/breakpoints"

// Icons
import Logo from "../../assets/icons/logo-white.inline.svg"
import WhatsApp from "../../assets/icons/icon-whatsapp-menu.inline.svg"
import Instagram from "../../assets/icons/icon-instagram-menu.inline.svg"
import IconCaretDown from "../../assets/icons/icon-carret-down.inline.svg"

const StyledMenu = styled.div`
  width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || colors.charcoal};
  z-index: 9000;
  transition: all 0.6s ease;
  padding: 40px 0;

  ${(props) =>
    props.isScrollingDown
      ? css`
          transform: translateY(-100%);
        `
      : css`
          transform: translateY(0);
        `}

  ${(props) =>
    props.active &&
    css`
      transform: translateY(0);
    `}

  ${breakpoint.medium`
    height: 80px;
    padding: 24px 0;
  `}

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu__toggler {
    width: 48px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor || colors.salmon};
    
    border: 0;

    ${breakpoint.medium`
      width: 80px;
      height: 80px;
    `}

    ${breakpoint.medium`
      display: none;
    `}

    span {
      width: 22px;
      height: 2px;
      position: relative;
      margin-bottom: 6px;
      transition: all 0.3s ease;
      background-color: white;

      &:last-child {
        margin: 0;
      }

      ${(props) =>
        props.active &&
        css`
          &:first-child {
            top: 8px;
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:last-child {
            top: -8px;
            transform: rotate(-45deg);
          }
        `}
    }
  }

  .menu {
    max-height: ${(props) => (props.active ? "1000px" : "0")};
    height: ${(props) => (props.active ? "calc(100vh - 100%)" : "0")};
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: max-height 0.3s ease;
    overflow: hidden;
    overflow-y: auto;
    // background-color: ${(props) => props.backgroundColor || colors.salmon};
    background-color: ${colors.charcoal};

    ${breakpoint.medium`
      max-height: auto;
      height: auto;
      position: relative;
      top: 0;
      padding: 0;
      overflow: visible;
    `}

    .menu__content {
      padding-top: 120px;
      ${breakpoint.medium`
        display: flex;
        align-items: center;
        padding-top: 0;
      `}

      button {
        font-family: ${fonts.primary} !important;
        cursor: pointer;
      }

      svg {
        margin-right: 4px;
        *{
          $
        }
      }

      ul {
        ${breakpoint.medium`
          margin: 0;
        `}
      }

      li {
        margin-bottom: 65px;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        ${breakpoint.medium`
          margin-right: 27px;
          margin-bottom: 0;
        `}

        ${breakpoint.large`
          margin-right: 54px;
          margin-bottom: 0;
        `}

        &:last-child {
          margin: 0;
        }
      }

      a {
        white-space: nowrap;
      }

      .menu__link {
        display: flex;
        align-items: center;

        &.rotate {
          svg {
            transform: rotate(180deg);
            transition: all 0.3s ease;
          }
        }

        svg{
          *{
            stroke: ${(props) =>
              props.backgroundColor !== `${colors.charcoal}`
                ? `${colors.charcoal}`
                : `${colors.salmon}`};
          }
        }
      }

      .menu__dropdown {
        position: absolute;
        padding: 32px;
        background-color: white;
        border-radius: 4px;
        margin-top: 10px;
        display: none;

        ul {
          li {
            margin: 0;
            margin-bottom: 24px;
            border-bottom: 1px solid ${colors.salmon__500};
            padding-bottom: 8px;

            &:last-of-type {
              margin-bottom: 0;
            }

            a {
              color: ${colors.charcoal};
              text-decoration-color: ${colors.salmon__500} !important;

              &:hover {
                color: ${colors.salmon};
              }   
              
              .line{
                transform: rotate(90deg);
              }
            }
          }
        }

        &.active {
          display: block;
          margin-bottom: 100px;
        }
      }
    }

    .line{
      transform: rotate(90deg);

      ${breakpoint.medium`
        transform: rotate(180deg);
      `}
    }
  }
`

const Menu = (props) => {
  const [active, setActive] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollPosition, setLastScrollPosition] = useState(false)
  const { backgroundColor } = props

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

  const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("active")

    document.getElementById("button-rotate").classList.toggle("rotate")
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 0) {
        if (scrollPosition >= lastScrollPosition) {
          if (!isScrollingDown) {
            setIsScrollingDown(true)
          }
        } else if (isScrollingDown) {
          setIsScrollingDown(false)
        }
      } else {
        setIsScrollingDown(false)
      }

      setLastScrollPosition(scrollPosition)
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => document.removeEventListener("scroll", handleScroll)
  })

  useEffect(() => {
    if (active) {
      document.querySelector("html").classList.add("no-scroll")
      document.querySelector("body").classList.add("no-scroll")
    } else {
      document.querySelector("html").classList.remove("no-scroll")
      document.querySelector("body").classList.remove("no-scroll")
    }
  }, [active])

  const navigationLinks = [
    {
      label: "Especialidades",
      submenu: [
        { label: "Cirugías", url: "/cirugias" },
        { label: "Tratamientos", url: "/tratamientos" },
        {
          label: "Cosmiatría & Aparatología",
          url: "/cosmiatria-y-aparatologia",
        },
      ],
    },
    {
      label: "Nosotros",
      url: "/clinica-milito",
    },
    {
      label: "Productos Milito",
      url: "/productos",
    },
    {
      label: "Contacto",
      url: "/contacto",
    },
    {
      icon: "|",
    },
  ]

  return (
    <StyledMenu
      active={active}
      isScrollingDown={isScrollingDown}
      backgroundColor={backgroundColor}
    >
      <Container>
        <div className="d-flex align-items-center">
          <Link to="/" className="d-flex" title="Logo">
            <Logo />
          </Link>
        </div>

        <button
          type="button"
          className="menu__toggler"
          onClick={() => setActive(!active)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="menu">
          <ul className="menu__content">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                {link.submenu ? (
                  <>
                    <button
                      type="button"
                      id="button-rotate"
                      className={
                        backgroundColor !== `${colors.charcoal}`
                          ? "menu__link menu__link--has-dropdown dropbtn d-flex align-items-center color--silver__dark text--s color-hover--charcoal"
                          : "menu__link menu__link--has-dropdown dropbtn d-flex align-items-center color--silver__dark text--s color-hover--salmon"
                      }
                      onClick={myFunction}
                    >
                      {link.label}
                      <IconCaretDown className="ms-2 d-sm-none svg--stroke-white" />
                      <IconCaretDown className="ms-2 d-none d-sm-block" />
                    </button>

                    <div className="menu__dropdown" id="myDropdown">
                      <ul>
                        {link.submenu.map((item) => (
                          <li className="text--s" key={item.label}>
                            <Link
                              to={item.url}
                              className={
                                backgroundColor !== `${colors.charcoal}`
                                  ? "text--s color-hover--charcoal"
                                  : "text--s color-hover--white"
                              }
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.url}
                    onClick={() => setActive(false)}
                    className={
                      backgroundColor !== `${colors.charcoal}`
                        ? "text--s color-hover--charcoal"
                        : "text--s color-hover--salmon"
                    }
                  >
                    {link.label}
                    <div className="line">{link.icon}</div>
                  </Link>
                )}
              </li>
            ))}
            <li className="social-media">
              <a
                href="https://api.whatsapp.com/send/?phone=5491148700517&text&type=phone_number&app_absent=0"
                className={
                  backgroundColor !== `${colors.charcoal}`
                    ? "color--salmon__300 color-hover--charcoal"
                    : "color--salmon__300 color-hover--white"
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActive(false)}
              >
                <WhatsApp /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/clinicamilito/?hl=es"
                className={
                  backgroundColor !== `${colors.charcoal}`
                    ? "color--salmon__300 color-hover--charcoal"
                    : "color--salmon__300 color-hover--white"
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActive(false)}
              >
                <Instagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </StyledMenu>
  )
}

Menu.propTypes = {
  backgroundColor: PropTypes.string,
}

Menu.defaultProps = {
  backgroundColor: "salmon",
}
export default Menu
