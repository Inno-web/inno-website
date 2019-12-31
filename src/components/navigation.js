import React, { Component } from 'react';

import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import Logo from '../images/logo.png'

class Navigation extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" style={{backgroundColor: "#ffffff"}}>
          <Navbar.Brand href="#home"><img src={Logo} style={{color: "black"}} ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{fontSize: "18px"}}>
              <Nav.Link href="#home">Типы обородувания</Nav.Link>
              <Nav.Link href="#cases">Кейсы</Nav.Link>
              <Nav.Link href="#partners">Партнеры</Nav.Link>
              <Nav.Link href="#charity">Благотворительность</Nav.Link>
              <Nav.Link href="#contacts">Контакты</Nav.Link>
            </Nav>
              <Button variant="dark" className="primary-button">Свяжитесь с нами</Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Navigation;