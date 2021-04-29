import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Footer from './Footer'
import Header from './Header'
import NavbarITG from './NavbarITG'
import PictureAsPdf from '@material-ui/icons/PictureAsPdf'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const SeccionIndividualAlumnos = () => {

    const { id } = useParams();
    const [value, setValue] = useState('');
    const [file, setFile] = useState('');
    useEffect(() => {
        Axios.get('http://localhost:3001/getAlumnoIndividual/' + id).then((response) => {

            setValue(response.data.result[0].contenido);
            setFile(response.data.result[0].file);

        })
    }, [id])

    const eliminarAlumno = (async (e) => {

        Axios.get('http://localhost:3001/deleteAlumno/' + id, {
        }).then((response) => {
            console.log(response);
        })

    })
    const onSubmit = async (e) => {
        e.preventDefault();

        if (file == "") {
            eliminarAlumno()
        }

        if (file != "") {
            Axios.post(`/uploadsAlumnos-editDel/${id}`).then(() => {
                eliminarAlumno()
            })
        }

    }





    return (
        <>
            <Header></Header>
            <NavbarITG></NavbarITG>
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 mt-5">
                        <div className="contenido-servicio mt-3 mb-3">{ReactHtmlParser(value)}
                        </div>
                        {file !== "" &&
                            <Link to={file} target="_blank">
                                <PictureAsPdf className="avisoFile"></PictureAsPdf>
                                <p>Descargar documento</p>
                            </Link>
                        }

                        <button className="button">
                            <Link to={`/editarAlumno/${id}`} className="link">
                                Editar
                                            </Link>
                        </button>
                        <button className="button" onClick={onSubmit}>
                            Eliminar nota
                        </button>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>

    )

}
export default SeccionIndividualAlumnos;