import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image";
import SEO from "../components/seo"
// import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <SEO title="Home" />
      </Layout>
    </div>
  )
}

export default IndexPage
