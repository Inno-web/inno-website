import React from "react"
import { Form, Button } from "react-bootstrap"

const contacts = () => {
  return (
    <section id="contacts" className="container">
      <h2>Контакты</h2>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="form-container pt-5 pb-4 col-lg-6 col-12 d-flex flex-column d-flex">
          <div className="pb-5">
            <h3 className="text-center text-uppercase">
              Заполните форму заявки
            </h3>
            <p className="text-center text-muted">
              и менеджер компании INNO свяжется с Вами
            </p>
          </div>
          <Form
            className="d-flex flex-column justify-content-center container"
            method="post"
            name="contact"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="contact" value="contact" />
            <input type="hidden" name="bot-field" />
            <Form.Group controlId="formBasicText">
              <Form.Label>Контактное лицо ФИО, должность</Form.Label>
              <Form.Control size="lg" type="text" placeholder="" name="name" />
            </Form.Group>

            <Form.Group className="mt-4" controlId="formBasicEmail">
              <Form.Label>Введите Ваш email</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                placeholder="expample@gmail.com"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mt-4" controlId="formBasicNumber">
              <Form.Label>Телефон</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="+7(499) 000-00-00"
                name="phone"
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              className="primary-button mt-3git  mx-auto"
            >
              Отправить
            </Button>
          </Form>
        </div>
        <div className="information col-lg-6 col-12 d-flex flex-column pl-lg-5 pt-5 pt-lg-0">
          <div>
            <h4>Адрес:</h4>
            <p>Московская обл. г Раменское ул. Сосновый Бор, 1к1</p>
          </div>
          <div>
            <h4>Время работы:</h4>
            <p className="d-flex flex-column">
              <span>Пн-Пт с 8:00 до 17:00</span>
              <span>Сб-Вс выходной</span>
            </p>
          </div>
          <div>
            <h4>Телефон:</h4>
            <p>
              <a href="tel:+7(499) 000-00-00">+7(499) 000-00-00</a>
            </p>
          </div>
          <div>
            <h4>E-mail:</h4>
            <p className="d-flex flex-column">
              <span>
                <a href="mailto:info@innoo.ru">info@innoo.ru</a>
              </span>
              <span>
                <a href="mailto:zakaz@innoo.ru">zakaz@innoo.ru</a>
              </span>
            </p>
          </div>
          <div>
            <p className="d-flex flex-column">
              <span>ООО «ИННО»</span>
              <span>ИНН: 5040157487</span>
            </p>
          </div>
          <div className="w-100">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.0326017145117!2d38.17457131592332!3d55.56663108050397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414abffc4730c98b%3A0xb39e239e3af95973!2z0YPQuy4g0KHQvtGB0L3QvtCy0YvQuSDQkdC-0YAsIDEsINCg0LDQvNC10L3RgdC60L7QtSwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCAxNDAxMDI!5e0!3m2!1sru!2suk!4v1577468036487!5m2!1sru!2suk"
              title="google map"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contacts
