import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import qoobee from '../images/qoobee.gif'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={qoobee} alt="QooBee Agapi" />
    </div>
  </Layout>
)

export default IndexPage
