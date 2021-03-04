import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logoTec from '../images/logo_tecnm.png'
import logoSonora from '../images/logo_sonora.png'
import '../../src/App.css'

export default class CarouselITG extends Component {
    render() {
        return (


            <Carousel className="carrusel">
                <div className="carrusel">
                    <img src={logoSonora} alt="logosonora" />
                </div>
                <div>
                    <img src={logoTec} alt="logotec" />

                </div>
            </Carousel>
        )
    }
}