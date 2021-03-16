import React from 'react'
import Footer from './Footer';
import Header from './Header';
import NavbarContacto from './NavbarContacto';
import NavbarITG from './NavbarITG';

const OfertaAcademica = () => {


    return (
        <>
            <Header />
            <NavbarITG />
            <NavbarContacto />
            <container fluid className="mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-1 " />
                    <div className="info-carrera col-lg-10">
                        <h1>Aquí va el nombre de la carrera</h1>
                        <h2>Aquí va el nombre de la carrera centrado</h2>
                        <h4>Aquí va un código de la carrera</h4>
                        <h3>Objetivo general</h3>
                        <p>Formar profesionales de la administración capaces de actuar como agentes de cambio, a través del diseño, innovación y dirección en organizaciones, sensibles a las demandas sociales y oportunidades del entorno, con capacidad de intervención en ámbitos globales y con un firme propósito de observar las normas y los valores universales.</p>
                        <h3>Perfil de egreso</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                    <div className="col-lg-1" />
                </div>
            </container>

            

                <Footer />
        </>
    )
}

export default OfertaAcademica;