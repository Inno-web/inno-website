import React, { Component } from "react"

import { Button } from "react-bootstrap"
import { Link } from "gatsby"

import "./footer.scss"
import Logo from "../images/logo-white.svg"

class footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-navigation">
          <div className="container d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center align-items-center">
            <div>
              <div className="d-flex justify-content-md-start justify-content-center">
                <img src={Logo} alt=""></img>
              </div>
              <div>
                <p>Разработка и дизайн Levart Studio</p>
              </div>
            </div>
            <div
              className="d-flex flex-lg-row flex-column
          "
            >
              <div>
                <ul className="text-center text-lg-left pl-0">
                  <li>
                    <Link
                      to="/all-items"
                      className="text-reset py-0 mx-2 nav-link"
                    >
                      Типы обородувания
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#charity"
                      className="text-reset py-0 mx-2 nav-link"
                    >
                      Благотворительность
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#about"
                      className="text-reset py-0 mx-2 nav-link"
                    >
                      О компании
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-center text-lg-left pl-0 pl-lg-5 ">
                  <li>
                    <Link
                      to="/all-cases"
                      className="text-reset p-0 mx-2 nav-link"
                    >
                      Кейсы
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#partners"
                      className="text-reset p-0 mx-2 nav-link"
                    >
                      Партнеры
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#contacts"
                      className="text-reset p-0 mx-2 nav-link"
                    >
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-3 text-center">
                <a href="tel:+7(499) 000-00-00">+7(499) 000-00-00</a>
              </div>
              <div>
                <Link to="/#contacts">
                  <Button variant="light" className="secondary-button">
                    Свяжитесь с нами
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default footer
