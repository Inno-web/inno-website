import React from "react"
import { Button } from "react-bootstrap"
// import HeroImage from "../images/blueprint.jpg"

const hero = () => {
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
        <Button
          variant="dark"
          type="submit"
          className="primary-button mt-3git  mx-auto"
        >
          Заполнить опросный лист
        </Button>
      </div>
    </section>
  )
}

export default hero
