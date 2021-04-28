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
    const [mostrar, setMostrar] = useState(false);
    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get('http://localhost:3000/getAvisos').then((response) => {
            setAvisosList(response.data);
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3001/getToken', {
        }).then((response) => {
            if (response.data.authorized === true) {
                console.log("estoy autorizado " + response.data.authorized)
                setMostrar(true);
            } else {
                console.log("no estoy autorizado" + response.data.authorized)
            }
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
                <Row>
                    <Col lg={3} className="transparent"></Col>
                    <Col lg={6} className="contenedor">
                        {
                            avisosList &&
                            avisosList.map((val, key) => {
                                var isImage = false
                                if ((/\.(jpg|png|gif)$/i).test(val.file)) {
                                        isImage = true
                                    } else {
                                        isImage = false
                                    }
                                return <div className="avisos">
                                    <h3 key={val.id} className="avisoTitulo">{val.titulo}</h3>
                                    <p>{val.descripcion}</p>
                                        {
                                            isImage === true &&
                                                val.file ?
                                                <div className="imgDiv">
                                                    <a href={val.file} target="_blank">
                                                        <img src={val.file} className="img-fluid img-thumbnail" width="200px" height="200px" />
                                                    </a>

                                                </div>
                                                :
                                                <p></p>
                                        }
                                        {
                                            isImage === false &&
                                                val.file ?
                                                <Link to={val.file} target="_blank">
                                                    Ver archivo adjunto   <PictureAsPdf className="avisoFile"></PictureAsPdf>
                                                </Link>
                                                :
                                                <p></p>
                                        }
                                    <div className="avisoFileDate">
                                        {mostrar &&
                                            <>
                                                <Button className="button">
                                                    <Link to={`/editarAviso/${val.id}`} className="link">
                                                        Editar
                                            </Link>
                                                </Button>
                                                <Button className="button">
                                                    <Link to={`/eliminarAviso/${val.id}`} className="link">
                                                        Eliminar
                                            </Link>
                                                </Button>
                                            </>
                                        }
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
            {mostrar &&
                <>
                    <Button className="button">
                        <Link to="/formularioAvisos" className="link">
                            Añadir avisos
                </Link>
                    </Button>
                </>
            }
        </>
    )

})

export default Feed;