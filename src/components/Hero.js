import React, { useState } from "react"
import { Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"

// import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Blueprint from "../images/blueprint.jpg"

function Hero() {
  // const data = useStaticQuery(graphql`
  //   query getHeroImage {
  //     file(relativePath: { eq: "blueprint.jpg" }) {
  //       childImageSharp {
  //         fluid {
  //           aspectRatio
  //           base64
  //           sizes
  //           src
  //           srcSet
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <section
      id="hero"
      className="container d-flex flex-column justify-content-center align-items-start"
    >
      <div className="call-to-action ">
        <p>
          Проектирование, изготовление и поставки сложного технического
          оборудования и комплектующих
        </p>
        <Button variant="dark" className="primary-button mt-3git  mx-auto">
          <Link
            className="text-white text-decoration-none"
            to="/questions-list"
          >
            Заполнить опросный лист
          </Link>
        </Button>
        {/* <div className="hero-image">
          <Img
            className=""
            fluid={data.file.childImageSharp.fluid}
            alt="Чертеж"
          />
        </div> */}
        <img className="hero-image" src={Blueprint} alt=""></img>
      </div>
    </section>
  )
}

export default Hero
