import React, { useState, useEffect } from 'react'
import Header from './Header';
import NavbarITG from './NavbarITG'
import NavbarContacto from './NavbarContacto'
import Footer from './Footer'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const CrudMoodle = () => {
    const [moodleList, setMoodleList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3000/getMoodle').then((response) => {
            setMoodleList(response.data);
        })
    }, [])


    return (
        <>
            <Header />
            <NavbarITG />
            <NavbarContacto />
            {
                moodleList &&
                moodleList.map((val, key) => {
                    return <div className="moodle">
                        <h3 key={val.id} className="avisoTitulo">{val.titulo}</h3>
                        <p>{val.servidor}</p>
                        <Button className="button">
                            <Link to={`/editarMoodle/${val.id}`} className="link">
                                Editar
                                </Link>
                        </Button>
                        <Button className="button">
                            <Link to={`/eliminarMoodle/${val.id}`} className="link">
                                Eliminar
                                </Link>
                        </Button>
                    </div>
                })
            }
            <Footer />
        </>
    )
}

export default CrudMoodle;