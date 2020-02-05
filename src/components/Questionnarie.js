import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"

function Questionnarie() {
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
          <Link to="/questions-list">
            <Button
              variant="light"
              className="secondary-button mx-3"
              style={{ width: "170px" }}
            >
              Заполнить
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Questionnarie
