import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Delete from '@material-ui/icons/Delete'
import Axios from 'axios'
import PruebaModal from './PruebaModal'
import '../../src/App.css'

const CarouselITG = () => {
    const [counter, setCounter] = useState(0)
    const [actualId, setActualId] = useState(0)
    const [carousellItems, setCarousellItems] = useState([])
    const [eliminar, setEliminar] = useState(false)

    useEffect(() => {
        Axios.get('http://localhost:3000/getCarousell').then((response) => {
            setCarousellItems(response.data);
        })
    }, [counter])

    

    const onClickHandler = (e, id) => {
        e.preventDefault();
        setActualId(id)
        setEliminar(true)
    }

    return (
        <>
            <Carousel infiniteLoop="true" autoPlay="true" interval="3000" dynamicHeight='true' className="carrusel">
                {
                    carousellItems &&
                    carousellItems.map((val) => {
                        return <div className="carrusel">
                            <img src={val.file} alt="imagen" />
                            <div className="carruselDeleteDiv">
                                <Button onClick={(e) => onClickHandler(e, val.id)}>
                                    <Delete className="carruselDeleteIcon" />
                                </Button>
                            </div>
                        </div>
                    })
                }
            </Carousel>
            <div>
                {
                    eliminar &&
                    <PruebaModal actualId={actualId} firstOpen={true}/>
                }
            </div>

        </>
    )
}

export default CarouselITG;