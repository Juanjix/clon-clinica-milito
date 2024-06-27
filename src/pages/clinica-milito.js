import React from "react"

// Layout
import Layout from "../layouts/layout-primary"

// Utils
import { colors } from "../utils/variables"

// Sections
import LaClinica from "../sections/clinica-milito/la-clinica"
import Equipo from "../sections/clinica-milito/equipo"
import Hero from "../sections/clinica-milito/hero"

const ClinicaMilito = () => (
  <Layout menuColor={colors.charcoal}>
    <Hero />
    <Equipo />
    <LaClinica />
  </Layout>
)

export default ClinicaMilito
