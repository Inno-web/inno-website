/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
// import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Header from "./header"
import Hero from "./hero"
import Benefits from "./benefits"
import Questionnarie from "./questionnarie"
import Stages from "./stages"
import Partners from "./partners"
import Charity from "./charity"
import Contacts from "./contacts"
import Footer from "./footer"
import About from "./about"
import CaseCard from "./caseCard"
import ItemCard from "./itemCard"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = () => {
  const content = useStaticQuery(
    graphql`
      {
        allContentfulCase(limit: 6) {
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
            }
          }
        }
        allContentfulItem(limit: 8) {
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
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <Header />
      <Hero />

      <Benefits />
      <About />
      <section id="items" className="container d-flex flex-column">
        <h2>Типы оборудования</h2>
        <div className="row row-cols-1 row-cols-md-4 justify-content-center">
          {content.allContentfulItem.edges.map(item => {
            return (
              <ItemCard
                title={item.node.title}
                image={item.node.image.file.url}
                key={item.node.id}
              />
            )
          })}
        </div>
        <Link className="mx-auto" to="/items/">
          <Button variant="outline-dark secondary-button" className="mt-4">
            Все типы оборудования
          </Button>
        </Link>
      </section>
      <Questionnarie />
      <Stages />
      <Partners />
      <section id="cases" className="container d-flex flex-column">
        <h2>Кейсы</h2>
        <div className="row row-cols-1 row-cols-md-3">
          {content.allContentfulCase.edges.map(item => {
            return (
              <div
                className="col d-flex justify-content-center"
                key={item.node.id}
              >
                <CaseCard
                  title={item.node.title}
                  description={item.node.description}
                  image={item.node.image.file.url}
                />
              </div>
            )
          })}
        </div>
        <Link className="mx-auto" to="/cases/">
          <Button variant="outline-dark secondary-button" className="mt-4">
            Все кейсы
          </Button>
        </Link>
      </section>
      <Charity />
      <Contacts />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
