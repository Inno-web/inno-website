import React, { Component } from "react"

import { Button } from "react-bootstrap"
import { Form, Row, Col } from "react-bootstrap"

class СlientForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Form
          className="m-3"
          method="post"
          name="questions-list"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          action="/form-success"
        >
          <input type="hidden" name="form-name" value="questions-list" />
          <Form.Group controlId="company">
            <Form.Label>Наименование организации, ИНН</Form.Label>
            <Form.Control type="text" placeholder="" required name="company" />
          </Form.Group>

          <Form.Group controlId="company-contact">
            <Form.Label>Контактное лицо</Form.Label>
            <Form.Control type="text" placeholder="" required name="client" />
          </Form.Group>
          <Form.Group controlId="telephone">
            <Form.Label>Телефон</Form.Label>
            <Form.Control
              type="tel"
              placeholder="+7(499) 000-00-00"
              required
              name="phone"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@mail.com"
              required
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="itemName">
            <Form.Label>Назначение и наименование оборудования</Form.Label>
            <Form.Control type="text" placeholder="" name="item-name" />
          </Form.Group>
          <Form.Group controlId="characteristic">
            <Form.Label>Основные характеристики</Form.Label>
            <Form.Control as="textarea" rows="3" name="item-specification" />
          </Form.Group>
          <Form.Group controlId="additional-info">
            <Form.Label>Дополнительная информация</Form.Label>
            <Form.Control as="textarea" rows="3" name="info" />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="primary-button mt-3 mx-auto"
          >
            Отправить
          </Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default СlientForm
