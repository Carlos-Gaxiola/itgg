import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import FacebookPlugin from './FacebookPlugin';
import Axios from 'axios'



const Feed = (() => {
    /* const [users, setUsers] = useState([]);
 
     useEffect(() => {
         fetch("/users/").then(res => {
             if (res.ok) {
                 return res.json()
             }
         }).then(jsonRes => setUsers(jsonRes.usersList))
     })*/

    const [avisosList, setAvisosList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3000/getAvisos').then((response) => {
            setAvisosList(response.data);
        })
    }, [])


    return (
        <>
            <Container fluid className="wrapper">
                <Row >
                    <Col lg={1}></Col>
                    <Col lg={8} ><h1>Avisos</h1></Col>
                    <Col lg={3}></Col>
                </Row>

            </Container>
            <Container fluid className="wrapper">
                <Row >
                    <Col lg={1}></Col>
                    <Col lg={8} className="contenedor">
                        {
                        avisosList &&
                        avisosList.map((val, key) => {
                            return <div className="avisos">
                                <p key={val.id}>{val.titulo}</p>
                                {val.descripcion}
                                <p><a href={val.file}>Ver archivo adjunto</a></p>
                                <hr></hr>
                            </div>
                        })
                        }
                        {
                        avisosList == "" &&
                            <h3>No hay nuevos avisos</h3>
                        }
                    </Col>


                    <Col lg={2} className="facebook">
                        <FacebookPlugin />
                    </Col>
                    <Col lg={1}></Col>
                </Row>

            </Container>
            <Button className="button">
                <Link to="/formularioAvisos" className="link">
                    Añadir avisos
                </Link>
            </Button>
        </>
    )

})

export default Feed;