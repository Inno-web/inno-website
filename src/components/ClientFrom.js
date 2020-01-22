import React, { Component } from "react"

import { Button } from "react-bootstrap"
import { Form, Row, Col } from "react-bootstrap"

class СlientForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Form className="m-3">
          <Form.Group controlId="company">
            <Form.Label>Наименование организации, ИНН</Form.Label>
            <Form.Control type="text" placeholder="" required />
          </Form.Group>

          <Form.Group controlId="company-contact">
            <Form.Label>Контактное лицо</Form.Label>
            <Form.Control type="text" placeholder="" required />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="telephone">
                <Form.Label>Телефон</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="+7(499) 000-00-00"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@mail.com"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="itemName">
            <Form.Label>Назначение и наименование оборудования</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="characteristic">
            <Form.Label>Основные характеристики</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="additional-info">
            <Form.Label>Дополнительная информация</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="primary-button mt-3git  mx-auto"
          >
            Отправить
          </Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default СlientForm
