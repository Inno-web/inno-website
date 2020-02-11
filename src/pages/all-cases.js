import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form } from "react-bootstrap"

import Header from "../components/Header"
import Footer from "../components/Footer"
import CaseCard from "../components/CaseCard"
import SEO from "../components/seo"

const Cases = () => {
  const [searchTerm, setSearchTerm] = useState("")
  console.log(searchTerm)

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
      <SEO title="Кейсы" />
      <Header />
      <main>
        <section className="container">
          <div>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Поиск"
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            {content.allContentfulCase.edges
              .filter(item => {
                return item.node.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              })
              .map(item => {
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
