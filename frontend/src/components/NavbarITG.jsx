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
      <Navbar bg="light" expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Institución" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ITG</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Oferta académica" id="basic-nav-dropdown" onClick={() => setCounter(prev => prev + 1)}>
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
            <NavDropdown title="Alumnos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Becas México</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Moodle" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Oportunidades</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Seguro Social</NavDropdown.Item>

            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>

  );
}

export default NavbarITG;