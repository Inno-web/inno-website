import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form, InputGroup } from "react-bootstrap"

import { FaSearch } from "react-icons/fa"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ItemCard from "../components/ItemCard"
import SEO from "../components/seo"

const Items = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleKeyPress = event => {
    if (event.which === 13 ) {/* Enter */
      event.preventDefault()
    }
  }

  const data = useStaticQuery(
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
      <SEO title="Типы оборудования" />
      <Header />
      <main>
        <section className="container">
          <div className="mt-3">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FaSearch />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Поиск"
                    aria-describedby="inputGroupPrepend"
                    onChange={e => handleChange(e)}
                    onKeyPress={e => handleKeyPress(e)}
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <div className="row row-cols-1 row-cols-md-4 ">
            {data.allContentfulItem.edges
              .filter(item => {
                return item.node.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              })
              .map(item => {
                return (
                  <div className="col d-flex justify-content-center" key={item.node.id}>
                    <ItemCard
                      slug={item.node.slug}
                      title={item.node.title}
                      image={item.node.image.file.url}
                    />
                  </div>
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
