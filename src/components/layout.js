/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "./hero"
import Benefits from "./benefits"
import Questionnarie from "./questionnarie"
import Stages from "./stages"
import Partners from "./partners"
import Cases from "./cases"
import Charity from "./charity"
import Contacts from "./contacts"
import Footer from "./footer"
import Items from "./items"
import About from "./about"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero/>
      <Benefits/>
      <About/>
      <Items/>
      <Questionnarie/>
      <Stages/>
      <Partners/>
      <Cases/>
      <Charity/>
      <Contacts/>
      <div>
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
