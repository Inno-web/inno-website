import React from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default ({ data, pageContext }) => {
  // const post = data.allContentfulCase.edges
  // console.log(JSON.stringify(post, null, 2))

  return (
    <React.Fragment>
      <Header />
      <section className="container">
        <h2>{pageContext.title}</h2>
        <pre>{JSON.stringify(pageContext, null, 4)}</pre>
        <img src="" alt="" />
        <p>{pageContext.textBody}</p>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allContentfulCase {
      edges {
        node {
          id
          title
          image {
            file {
              url
            }
          }
          textBody {
            textBody
          }
          description
          slug
        }
      }
    }
  }
`
