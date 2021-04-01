import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Moment from 'moment'
import PictureAsPdf from '@material-ui/icons/PictureAsPdf'
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
                                    <h3 key={val.id} className="avisoTitulo">{val.titulo}</h3>
                                    <p>{val.descripcion}</p>
                                    <div className="avisoFileDate">
                                        {
                                            val.file ?
                                                <Link to={val.file} target="_blank">
                                                    <PictureAsPdf className="avisoFile"></PictureAsPdf>
                                                </Link>
                                                :
                                                <p></p>
                                        }
                                        <Button className="button">
                                            <Link to={`/editarAviso/${val.id}`} className="link">
                                                Editar
                                            </Link>
                                        </Button>
                                        <p avisoFecha className="avisoFecha">{Moment(val.fecha).format('DD/MM/YYYY')}</p>
                                    </div>
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