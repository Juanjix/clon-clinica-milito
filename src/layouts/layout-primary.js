import React from "react"

// Libraries
import PropTypes from "prop-types"

// Styles
import GlobalStyles from "../assets/styles/globalStyles"

// Components
import Seo from "../components/seo"
import Menu from "../components/menu"
import Footer from "../components/footer"

const Layout = ({ children, menuColor }) => (
  <main>
    <Seo />
    <GlobalStyles />
    <Menu backgroundColor={menuColor} />
    {children}
    <Footer />
  </main>
)

Layout.propTypes = {
  children: PropTypes.element,
  menuColor: PropTypes.string,
}

Layout.defaultProps = {
  children: null,
  menuColor: "charcoal",
}

export default Layout
