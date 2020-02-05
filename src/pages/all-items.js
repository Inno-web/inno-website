import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ItemCard from "../components/ItemCard"
import SEO from "../components/seo"

const Items = () => {
  const content = useStaticQuery(
    graphql`
      {
        allContentfulItem {
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
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <SEO title="Оборудование" />
      <Header />
      <main>
        <section className="container">
          <div className="row row-cols-1 row-cols-md-4 justify-content-center">
            {content.allContentfulItem.edges.map(item => {
              return (
                <ItemCard
                  slug={item.node.slug}
                  title={item.node.title}
                  image={item.node.image.file.url}
                  key={item.node.id}
                />
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Items
