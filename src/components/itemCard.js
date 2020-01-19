import React from "react"

import { Card, Button } from "react-bootstrap"
import { Link } from "gatsby"

const itemCard = data => {
  return (
    <Card className="item-card shadow-sm mt-3 mt-md-5 d-flex flex-column align-items-center justify-content-between mx-2">
      <div className="item-img-container d-flex flex-column justify-content-center">
        <Card.Img
          variant="top"
          src={data.image}
          className="item-img embed-responsive mt-3"
          alt=""
        />
      </div>
      <Card.Body className="d-flex flex-column align-items-center justify-content-end">
        <Card.Text className="text-center">{data.title}</Card.Text>
        <Link className="mx-auto" to={`/items/${data.slug}`}>
          <Button variant="dark" className="primary-button ">
            Подробнее
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default itemCard
