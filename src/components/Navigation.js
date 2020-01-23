import React, { Component } from "react"

import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "gatsby"

import Logo from "../images/logo-black.svg"
import Blueprint from "../images/blueprint.jpg"

class Navigation extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" className="navigation">
          <Navbar.Brand className="mr-0">
            <Link to="/">
              <img src={Logo} alt=""></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link to="/#items" className="text-reset mx-2 nav-link">
                Типы обородувания
              </Link>

              <Link to="/#cases" className="text-reset mx-2 nav-link">
                Кейсы
              </Link>

              <Link to="/#partners" className="text-reset mx-2 nav-link">
                Партнеры
              </Link>

              <Link to="/#charity" className="text-reset mx-2 nav-link">
                Благотворительность
              </Link>

              <Link to="/#contacts" className="text-reset mx-2 nav-link">
                Контакты
              </Link>
            </Nav>
            <Link to="/#contacts">
              <Button
                variant="dark"
                href="#contacts"
                className="primary-button"
              >
                Свяжитесь с нами
              </Button>
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <img className="nav-image" src={Blueprint} alt=""></img>
      </Container>
    )
  }
}

export default Navigation
