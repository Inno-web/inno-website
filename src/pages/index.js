import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <Layout />
    </div>
  )
}

export default IndexPage
