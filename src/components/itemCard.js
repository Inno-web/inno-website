import React from "react"

import { Card, Button } from "react-bootstrap"

const itemCard = props => {
  return (
    <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between mx-2">
      <div className="item-img-container d-flex flex-column justify-content-center">
        <Card.Img
          variant="top"
          src={props.image}
          className="item-img embed-responsive mt-3"
          alt=""
        />
      </div>
      <Card.Body className="d-flex flex-column align-items-center justify-content-end">
        <Card.Text className="text-center">{props.title}</Card.Text>
        <Button variant="dark" className="primary-button ">
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  )
}

export default itemCard
