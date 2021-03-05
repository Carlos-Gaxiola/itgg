import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Axios from 'axios'

import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import NavbarITG from './components/NavbarITG'
import NavbarContacto from './components/NavbarContacto'
import Cards from './components/Cards'
import CarouselITG from './components/CarouselITG'
import Footer from './components/Footer'
import Feed from './components/Feed'
//import FormularioAvisos from './components/FormularioAvisos'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header/>
      <NavbarITG/>
      <NavbarContacto/>
      <CarouselITG/>
      <Cards/>
      <Feed/>
      <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
/*ReactDOM.render(
  <React.StrictMode>
    <div>
    <FormularioAvisos />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
