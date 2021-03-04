import React from 'react'
import NuevoIngreso from '../images/nuevo_ingreso.jpg'
import Reinscripcion from '../images/reinscripcion.jpg'
import Titulacion from '../images/titulacion.jpg'
import Egresados from '../images/egresados.jpg'
import '../../src/App.css'

const Cards = () => {
    return (
        <div className="card-container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={NuevoIngreso} alt="Card image cap" />
                        <div className="card-img-overlay card-img-overlay h-100 d-flex flex-column justify-content-end">
                            <p className="card-text">Nuevo ingreso</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={Reinscripcion} alt="Card image cap" />
                        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                            <p className="card-text">Reinscripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={Titulacion} alt="Card image cap" />
                        <div className="card-img-overlay card-img-overlay h-100 d-flex flex-column justify-content-end">
                            <p className="card-text">Titulación</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={Egresados} alt="Card image cap" />
                        <div className="card-img-overlay card-img-overlay h-100 d-flex flex-column justify-content-end">
                            <p className="card-text">Egresados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;