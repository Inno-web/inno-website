import React, { useState } from "react"
import { Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import ClientForm from "./ClientFrom"

import Blueprint from "../images/blueprint.jpg"

function Hero() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
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
          className="primary-button mt-3git  mx-auto"
          onClick={handleShow}
        >
          Заполнить опросный лист
        </Button>
        <img className="nav-image" src={Blueprint} alt=""></img>
      </div>
      <div className="d-none">
        <ClientForm />
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="m-3">Опросный лист</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ClientForm />
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Hero
