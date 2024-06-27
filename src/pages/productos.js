import React from "react"

// Utils
import { colors } from "../utils/variables"

// Sections
import Productos from "../sections/productos/productos"
import Hero from "../sections/productos/hero"

// Layout
import Layout from "../layouts/layout-primary"

const ProductosPage = () => (
  <Layout menuColor={colors.charcoal}>
    <Hero />
    <Productos />
  </Layout>
)

export default ProductosPage
