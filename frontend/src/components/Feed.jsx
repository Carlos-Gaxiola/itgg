import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import FacebookPlugin from './FacebookPlugin';



const Feed = (() => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/users/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes.usersList))
    })

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
                        {users.map(user => {
                            return (

                                <>
                                    <h3>Becas Santander</h3>
                                    <br />
                                    <h5 key={user}>{user}</h5>
                                    <br />
                                    <strong>Fecha: 01/03/2021</strong>
                                </>

                            )



                        })}
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