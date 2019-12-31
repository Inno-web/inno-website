import React, { Component } from 'react';

import {Button} from "react-bootstrap";

import "./footer.css"
import Logo from "../images/logo.png"

class footer extends Component {
  render() {
    return (
      <div className="footer-navigation">
        <div className="container d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center align-items-center">
          <div>
            <div>
              <img src={Logo}></img>
            </div>
            <div>
              <p>Разработка и дизайн Levart Studio</p>
            </div>
          </div>
          <div className="d-flex flex-lg-row flex-column
          ">
            <div>
              <ul className="text-center text-lg-left pl-0">
                  <li><a href="#about">О компании</a></li>
                  <li><a href="#items">Типы оборудования</a></li>
                  <li><a href="#charity">Благотворительность</a></li>
              </ul>
            </div>
            <div>
              <ul className="text-center text-lg-left pl-0 pl-lg-5 ">
                  <li><a href="#cases">Кейсы</a></li>
                  <li><a href="#partners">Партнеры</a></li>
                  <li><a href="#contacts">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-3 justify-content-center">
              <a href="tel:+7(499) 000-00-00">+7(499) 000-00-00</a>
            </div>
            <div>
                <Button variant="light" className="secondary-button">Свяжитесь с нами</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;