import React, { Component } from "react"

import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "gatsby"

import Logo from "../images/logo-black.png"
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
              <Nav.Link href="" className="text-reset">
                <Link to="/#items" className="text-reset">
                  Типы обородувания
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-reset">
                <Link to="/#cases" className="text-reset mx-2">
                  Кейсы
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-reset">
                <Link to="/#partners" className="text-reset mx-2">
                  Партнеры
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-reset">
                <Link to="/#charity" className="text-reset mx-2">
                  Благотворительность
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-reset">
                <Link to="/#contacts" className="text-reset mx-2">
                  Контакты
                </Link>
              </Nav.Link>
            </Nav>
            <Button variant="dark" href="#contacts" className="primary-button">
              Свяжитесь с нами
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <img className="nav-image" src={Blueprint} alt=""></img>
      </Container>
    )
  }
}

export default Navigation
