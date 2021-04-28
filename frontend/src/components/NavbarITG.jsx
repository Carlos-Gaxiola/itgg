import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/App.css'

const NavbarITG = () => {

  const [counterCarrera, setCounterCarrera] = useState(0)
  const [counterMoodle, setCounterMoodle] = useState(0)
  const [ofertaAcademicaList, setofertaAcademicaList] = useState([]);
  const [moodleList, setMoodleList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/getCarreras').then((response) => {
      setofertaAcademicaList(response.data);
    })
  }, [counterCarrera])

  useEffect(() => {
    Axios.get('http://localhost:3000/getMoodle').then((response) => {
      setMoodleList(response.data);
    })
  }, [counterMoodle])

  const onClickHandler = (e, s) => {
    e.preventDefault()
    window.open(s, "_blank")
  }

  return (
    <>
      <Navbar bg="light" expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Institución" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ITG</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Oferta académica" id="basic-nav-dropdown" onClick={() => setCounterCarrera(prev => prev + 1)}>
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
            <NavDropdown title="Moodle" id="basic-nav-dropdown" onClick={() => setCounterMoodle(prev => prev + 1)}>
              {
                moodleList &&
                moodleList.map((val) => {
                  return <NavDropdown.Item onClick={(e) => onClickHandler(e, val.servidor)}>
                      {val.titulo}
                  </NavDropdown.Item>
                })
              }

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