import React, { Component } from "react"

import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "gatsby"
import Logo from "../images/logo-black.png"

class Navigation extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" style={{ background: "rgba(0, 0, 0, 0)" }}>
          <Navbar.Brand className="mr-0">
            <Link to="/">
              <img src={Logo} alt=""></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home" className="text-reset">
                Типы обородувания
              </Nav.Link>
              <Nav.Link href="#cases" className="text-reset">
                Кейсы
              </Nav.Link>
              <Nav.Link href="#partners" className="text-reset">
                Партнеры
              </Nav.Link>
              <Nav.Link href="#charity" className="text-reset">
                Благотворительность
              </Nav.Link>
              <Nav.Link href="#contacts" className="text-reset">
                Контакты
              </Nav.Link>
            </Nav>
            <Button variant="dark" className="primary-button">
              Свяжитесь с нами
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default Navigation
