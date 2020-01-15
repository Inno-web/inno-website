/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

// import ItemCard from "./itemCard"

import Header from "./header"
import Hero from "./hero"
import Benefits from "./benefits"
import Questionnarie from "./questionnarie"
import Stages from "./stages"
import Partners from "./partners"
import CaseCard from "./caseCard"
import Charity from "./charity"
import Contacts from "./contacts"
import Footer from "./footer"
// import Items from "./items"
import About from "./about"
import ItemCard from "./itemCard"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = () => {
  const content = useStaticQuery(
    graphql`
      {
        allContentfulItem {
          edges {
            node {
              title
              image {
                file {
                  url
                }
              }
              textBody {
                textBody
                json
              }
              id
            }
          }
        }
        allContentfulCase {
          edges {
            node {
              title
              image {
                file {
                  url
                }
              }
              description
              text {
                textBody
              }
              id
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
      <section id="items" className="container">
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
      </section>
      <Questionnarie />
      <Stages />
      <Partners />
      <section id="cases" className="container">
        <h2>Кейсы</h2>
        <div className="row row-cols-1 row-cols-md-3">
          {content.allContentfulCase.edges.map(item => {
            return (
              <div className="col d-flex justify-content-center">
                <CaseCard
                  title={item.node.title}
                  description={item.node.description}
                  image={item.node.image.file.url}
                  key={item.node.id}
                />
              </div>
            )
          })}
        </div>
      </section>
      <Charity />
      <Contacts />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
