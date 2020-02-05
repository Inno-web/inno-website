import React, { useState } from "react"
import { Button } from "react-bootstrap"

import { Link } from "gatsby"

import Blueprint from "../images/blueprint.jpg"

function Hero() {
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

        <img className="hero-image" src={Blueprint} alt=""></img>
      </div>
    </section>
  )
}

export default Hero
