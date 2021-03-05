import React, { useState, useEffect } from 'react'
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

    const getAvisos = () => {
        Axios.get('http://localhost:3000/getAvisos').then((response) => {
           setAvisosList(response.data); 
        })

    }

    return (
        <>
        <Button onClick={getAvisos}>Mostrar avisos</Button>
        {avisosList.map((val,key)=>{
                    return <div> <p key={val.id}>{val.titulo}</p> {val.id} </div>
                })}
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
                        
                    </Col>
                    <Col lg={2} className="facebook">
                        <FacebookPlugin />
                    </Col>
                    <Col lg={1}></Col>
                </Row>

            </Container>
        </>
    )

})

export default Feed;