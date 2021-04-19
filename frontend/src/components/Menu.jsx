import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import NavbarITG from './NavbarITG'
import Footer from './Footer'



const Menu = () => {


    return (

        <>

            <Header></Header>
            <NavbarITG></NavbarITG>
            <div class="row mt-5 ml-1 mr-1 mb-5" >
                <div class="col-sm-3 mb-1">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Avisos</h4>
                            <p>Al hacer click en el botón de abajo se nos redireccionará a la sección de editar/eliminar/añadir los avisos </p>
                            <a href="#" class="btn btn-primary btn-lg">Ir configuración sección avisos</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-1">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Oferta académica</h4>
                            <p>Al hacer click en el botón de abajo se nos redireccionará a la sección de editar/eliminar/añadir las ofertas académicas </p>
                            <a href="#" class="btn btn-primary btn-lg">Ir a configuración sección oferta académica</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-1">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Alumnos</h4>
                            <p>Al hacer click en el botón de abajo se nos redireccionará a la sección de editar/eliminar/añadir las secciones publicadas en el apartado alumnos</p>
                            <a href="#" class="btn btn-primary btn-lg">Ir a configuración sección alumnos</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-1">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Carrusel de fotos</h4>
                            <p>Al hacer click en el botón de abajo se nos redireccionará a la sección de las imágenes en movimiento de carrusel y podrás editar/eliminar/añadir</p>
                            <a href="#" class="btn btn-primary btn-lg">Ir a configuración sección carrusel</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Menu;