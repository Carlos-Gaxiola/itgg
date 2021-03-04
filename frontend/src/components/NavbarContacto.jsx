import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/App.css'

class NavbarContacto extends Component {

  render() {
    return (
      <>
        <Navbar className="color-nav-contacto w-100" collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="color-nav-contacto" href="#features">Contacto</Nav.Link>
              <Nav.Link className="color-nav-contacto" href="#features">Mapa del sitio</Nav.Link>
              <Nav.Link className="color-nav-contacto" href="#features">SII</Nav.Link>
              <Nav.Link className="color-nav-contacto" href="#features">MOODLE</Nav.Link>
              <Nav.Link className="color-nav-contacto" href="#features">Correo institucional</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavbarContacto;