import React from "react"
import { Card, Button } from "react-bootstrap"

const caseCard = props => {
  return (
    <Card className="case-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
      <Card.Img
        variant="top"
        src={props.image}
        className="case-image p-1"
        alt="'Фильтрация-Сепарация жидкости и газа"
      />
      <Card.Body className="d-flex flex-column align-items-start justify-content-between w-100 text-uppercase">
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.description}
        </Card.Subtitle>
        <Button
          variant="outline-secondary"
          className="secondary-button  align-self-end"
        >
          Подробнее
          <i className="fas fa-arrow-right ml-2"></i>
        </Button>
      </Card.Body>
    </Card>
  )
}

export default caseCard
