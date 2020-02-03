import React, { useState } from "react"
import { Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import ClientForm from "./ClientFrom"

function Questionnarie() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <section id="questionnarie" className="d-flex  align-items-center">
      <div
        className="
      container 
      d-flex  
      flex-lg-row
      justify-content-lg-between 
      flex-column"
      >
        <div className="align-self-sm-center">
          <h2 className="text-uppercase text-center">
            Заполните опросный лист
          </h2>
        </div>
        <div className="d-flex flex-grow-1  justify-content-center">
          <Button
            variant="light"
            className="secondary-button mx-3"
            style={{ width: "170px" }}
          >
            Скачать
          </Button>
          <Button
            variant="light"
            className="secondary-button mx-3"
            style={{ width: "170px" }}
            onClick={handleShow}
          >
            Заполнить
          </Button>
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title className="m-3">Опросный лист</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ClientForm />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </section>
  )
}

export default Questionnarie
