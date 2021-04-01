import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import NavbarITG from './NavbarITG'
import Axios from 'axios';
import { Redirect } from 'react-router';

const RegistroLogin = () => {

    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);

    const [role,setRole] = useState('');
    


    //Si o si se debe escribir esto para que funcione la sesión
    Axios.defaults.withCredentials = true;

    const registrar = () => {
        Axios.post('http://localhost:3001/registrar',
            {
                email: emailReg,
                password: passwordReg
            }).then((response) => {
                console.log(response);
            })
    }

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        }).then((response) => {
            console.log(response);
            if (!response.data.auth) {
                console.log(response);
                setLoginStatus(false);
            } else {
                console.log(response.data.token)
                setRole(response.data.user.role);
                setLoginStatus(true);
            }
        })
    }


    return (

        <>
            <Header></Header>
            <NavbarITG></NavbarITG>

            <div className="container">
                <div className="row">
                    <div className="lg-3" />
                    <div className="lg-9 mt-5 login-form">

                        <h1 className="text-center">Inicio de sesión</h1>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Ingrese su usuario" name="email" required="required" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Ingrese su contraseña" name="password" required="required" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <button onClick={login} class="btn btn-primary btn-block">Iniciar sesión</button>
                        </div>
                        <h1>Iniciaste sesión como {role}</h1>
                    
                    </div>
                    <div className="lg-3" />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="lg-3" />
                    <div className="lg-9 mt-5 login-form">

                        <h1 className="text-center">Registro de usuario</h1>
                        <div className="form-group">
                            <p>Ingrese nombre de usuario:</p>
                            <input type="text" className="form-control" placeholder="Ingrese su usuario" name="email" required="required" onChange={(e) => { setEmailReg(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <p>Ingrese una contraseña:</p>
                            <input type="password" className="form-control" placeholder="Password" name="password" required="required" onChange={(e) => { setPasswordReg(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <button onClick={registrar} className="btn btn-primary btn-block">Registrar usuario</button>
                        </div>
                    </div>
                    <div className="lg-3" />
                </div>
            </div>

            <Footer></Footer>

        </>
    )


}

export default RegistroLogin;