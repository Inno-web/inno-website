/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Button } from "react-bootstrap"
// import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.scss"

import Header from "./Header"
import Hero from "./Hero"
import Benefits from "./Benefits"
import Questionnarie from "./Questionnarie"
import Stages from "./Stages"
import Partners from "./Partners"
import Charity from "./Charity"
import Contacts from "./Contacts"
import Footer from "./Footer"
import About from "./About"
import CaseCard from "./CaseCard"
import ItemCard from "./ItemCard"

const Layout = () => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulCase(limit: 3) {
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
        allContentfulItem(limit: 8) {
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
    <React.Fragment>
      <Header />
      <Hero />

      <Benefits />
      <About />
      <section id="items" className="container d-flex flex-column">
        <h2>Типы оборудования</h2>
        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        <div className="row row-cols-1 row-cols-md-4 justify-content-center">
          {data.allContentfulItem.edges.map(item => {
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
        <Link className="mx-auto" to="/all-items/">
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
          {data.allContentfulCase.edges.map(item => {
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
        <Link className="mx-auto" to="/all-cases/">
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
