import React, { Component } from 'react';

import {Button} from "react-bootstrap";

import "./footer.css"
import Logo from "../images/logo.png"

class footer extends Component {
  render() {
    return (
      <div className="footer-navigation">
        <div className="container flex-container">
          <div>
            <div>
              <img src={Logo}></img>
            </div>
            <div>
              <p>Разработка и дизайн Levart Studio</p>
            </div>
          </div>
          <div className="flex-container">
            <div>
              <ul>
                  <li><a href="#about">О компании</a></li>
                  <li><a href="#items">Типы оборудования</a></li>
                  <li><a href="#charity">Благотворительность</a></li>
              </ul>
            </div>
            <div>
              <ul>
                  <li><a href="#cases">Кейсы</a></li>
                  <li><a href="#partners">Партнеры</a></li>
                  <li><a href="#contacts">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <a href="tel:+7(499) 000-00-00">+7(499) 000-00-00</a>
            </div>
            <div>
                <Button variant="light">Свяжитесь с нами</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;