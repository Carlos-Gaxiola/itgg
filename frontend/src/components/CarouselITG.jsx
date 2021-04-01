import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Axios from 'axios'
import '../../src/App.css'

const CarouselITG = () => {
    const [carousellItems, setCarousellItems] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3000/getCarousell').then((response) => {
            setCarousellItems(response.data);
        })
    }, [])

    return (
        <Carousel className="carrusel">
            {
                carousellItems &&
                carousellItems.map((val) => {
                    return <div className="carrusel">
                        <img src={val.file} alt="imagen" />
                    </div>
                })
            }
        </Carousel>
    )
}

export default CarouselITG;