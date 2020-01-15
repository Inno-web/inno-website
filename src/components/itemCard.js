import React from "react"

import { Card, Button } from "react-bootstrap"

const itemCard = props => {
  return (
    <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between mx-2">
      <Card.Img
        variant="top"
        src={props.image}
        className="item-img embed-responsive mt-3 w-sm-25 "
        alt=""
      />
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
