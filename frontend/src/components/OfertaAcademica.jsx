import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import NavbarContacto from './NavbarContacto';
import NavbarITG from './NavbarITG';
import Axios from 'axios'
import Button from 'react-bootstrap/Button'
import PictureAsPdf from '@material-ui/icons/PictureAsPdf'
import '../../src/App.css'

const OfertaAcademica = () => {
    const { id } = useParams();
    const [datosCarrera, setDatosCarrera] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3000/getOfertaAcademica/' + id).then((response) => {
            setDatosCarrera(response.data);
        })
    }, [id])

    return (
        <>
            <Header />
            <NavbarITG />
            <NavbarContacto />
            {
                datosCarrera &&
                datosCarrera.map((val) => {
                    return <div className="ofertaContainer">
                    <container fluid className="mt-5 mb-5">
                        <div className="row">
                            <div className="col-lg-1 " />
                            <div className="info-carrera col-lg-10">
                                <h1>{val.licenciatura}</h1>
                                <h2>{val.licenciatura}</h2>
                                <h4>{val.codigo}</h4>
                                <h3>Objetivo general</h3>
                                <p>{val.objetivo}</p>
                                <h3>Perfil de egreso</h3>
                                <p className="perfilEgreso">{val.perfil}</p>
                                {
                                    val.file ?
                                        <Link to={val.file} target="_blank">
                                            Ver plan de estudios<PictureAsPdf className="avisoFile"></PictureAsPdf>
                                        </Link>
                                        :
                                        <p></p>
                                }
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </container>
                    </div>
                })
            }
            <br>
            </br>
            <br>
            </br>
            <Button className="button">
                <Link to="/formularioCarreras" className="link">
                    Añadir oferta academica
                </Link>
            </Button>

            <Footer />
        </>
    )
}

export default OfertaAcademica;