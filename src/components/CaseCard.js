import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "gatsby"

const caseCard = data => {
  return (
    <Card className="case-card mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between">
      <Card.Img
        variant="top"
        src={data.image}
        className="case-image p-1"
        alt="'Фильтрация-Сепарация жидкости и газа"
      />
      <Card.Body className="d-flex flex-column align-items-start justify-content-between w-100">
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {data.description}
        </Card.Subtitle>
        <Link className="mx-auto" to={`/all-cases/${data.slug}`}>
          <Button
            variant="outline-secondary"
            className="secondary-button  align-self-end"
          >
            Подробнее
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default caseCard
