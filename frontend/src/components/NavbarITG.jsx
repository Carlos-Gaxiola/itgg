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
  const [counterServicio, setCounterServicio] = useState(0)
  const [serviciosList, setServiciosList] = useState([]);
  const [counterAlumnos, setCounterAlumno] = useState(0)
  const [alumnosList, setAlumnosList] = useState([]);
  const [counterMoodle, setCounterMoodle] = useState(0)
  const [moodleList, setMoodleList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getCarreras').then((response) => {
      setofertaAcademicaList(response.data);
    })
  }, [counter])

  useEffect(() => {
    Axios.get('http://localhost:3001/getServicio').then((response) => {
      setServiciosList(response.data);
      console.log(response.data)
    })
  }, [counterServicio])
  useEffect(() => {
    Axios.get('http://localhost:3001/getAlumnos').then((response) => {
      setAlumnosList(response.data);
      console.log(response.data)
    })
  }, [counterAlumnos])
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
            <NavDropdown title="Alumnos" id="basic-nav-dropdown" onClick={() => setCounterAlumno(prev => prev + 1)}>
              {
                alumnosList &&
                alumnosList.map((val) => {
                  return <NavDropdown.Item>
                    <Link to={`/alumnosindividual/${val.id}`}>
                      {val.titulo}
                    </Link>
                  </NavDropdown.Item>
                })
              }

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
            <NavDropdown title="Servicios" id="basic-nav-dropdown" onClick={() => setCounterServicio(prev => prev + 1)}>
              {
                serviciosList &&
                serviciosList.map((val) => {
                  return <NavDropdown.Item>
                    <Link to={`/serviciosindividual/${val.id}`}>
                      {val.titulo}
                    </Link>
                  </NavDropdown.Item>
                })
              }

            </NavDropdown>


          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>

  );
}

export default NavbarITG;