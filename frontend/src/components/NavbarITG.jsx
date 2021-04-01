import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/App.css'

const NavbarITG = () => {

  const [counter, setCounter] = useState(0)
  const [ofertaAcademicaList, setofertaAcademicaList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3000/getCarreras').then((response) => {
      setofertaAcademicaList(response.data);
    })
  }, [counter])

  return (
    <>
      <Navbar className="color-nav" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown className="color-nav" title="Inicio" id="collasible-nav-dropdown">
            </NavDropdown>
            <NavDropdown className="color-nav" title="Institución" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dirección</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown className="color-nav" title="Oferta académica" id="collasible-nav-dropdown" onClick={() => setCounter(prev => prev + 1)}>
              {
                ofertaAcademicaList &&
                ofertaAcademicaList.map((val) => {
                  return <NavDropdown.Item>
                    <Link to={`/ofertaAcademica/${val.id}`}>
                      {val.licenciatura}
                    </Link>
                  </NavDropdown.Item>
                })
              }
            </NavDropdown>
            <NavDropdown className="color-nav" title="Alumnos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hackathon</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown className="color-nav" title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Egresados</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarITG;