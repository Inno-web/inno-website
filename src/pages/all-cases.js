import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import CaseCard from "../components/CaseCard"

const Cases = () => {
  const content = useStaticQuery(
    graphql`
      {
        allContentfulCase {
          edges {
            node {
              id
              slug
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
            }
          }
        }
      }
    `
  )
  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="container">
          <div className="row row-cols-1 row-cols-md-3">
            {content.allContentfulCase.edges.map(item => {
              return (
                <div
                  className="col d-flex justify-content-center"
                  key={item.node.id}
                >
                  <CaseCard
                    slug={item.node.slug}
                    title={item.node.title}
                    description={item.node.description}
                    image={item.node.image.file.url}
                  />
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Cases
