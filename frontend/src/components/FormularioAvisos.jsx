import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/App.css'
import { useState } from 'react';
import Axios from 'axios'

const FormularioAvisos = (() => {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("2021-03-05");
    const [avisosList, setAvisosList] = useState([]);

    const addAviso = () => {
        console.log(titulo, descripcion, fecha);
        Axios.post('http://localhost:3000/createAviso', {
            titulo: titulo,
            descripcion: descripcion,
            fecha: fecha
        }).then(() => {
            console.log("success");


        })
    }

    const getAvisos = () => {
        Axios.get('http://localhost:3000/getAvisos').then((response) => {
           setAvisosList(response.data); 
        })

    }



    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={2} />
                    <Col lg={8}>
                        <Form>
                            <Form.Group controlId="titulo">
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese el título" onChange={(event) => { setTitulo(event.target.value); }} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Ingrese la información del aviso" onChange={(event) => { setDescripcion(event.target.value); }} />
                            </Form.Group>
                            <Button variant="primary" onClick={addAviso} >
                                Añadir aviso
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={2} />


                </Row>
            </Container>
            <div>
                <Button variant="primary" onClick={getAvisos} > Mostrar avisos</Button>

                {avisosList.map((val,key)=>{
                    return <div> <p key={val.id}>{val.titulo}</p> {val.id} </div>
                })}
            </div>




        </>
    )
})

export default FormularioAvisos;