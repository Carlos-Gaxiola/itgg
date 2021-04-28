import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import FormularioAvisos from './components/FormularioAvisos'
import FormularioCarreras from './components/FormularioCarreras'
import FormularioCarousell from './components/FormularioCarousell'
import FormularioMoodle from './components/FormularioMoodle'
import OfertaAcademica from './components/OfertaAcademica'
import EditarAviso from './components/EditarAviso'
import EliminarAviso from './components/EliminarAviso'
import EditarCarrera from './components/EditarCarrera'
import EliminarCarrera from './components/EliminarCarrera'
import RegistroLogin from './components/RegistroLogin'
import PruebaRol from './components/PruebaRol'
import PruebaModal from './components/PruebaModal'
import ResetPassword from './components/ResetPassword'
import NewPassword from './components/NewPassword'
import Menu from './components/Menu'
import MapaDelSitio from './components/MapaDelSitio'
import CrudMoodle from './components/CrudMoodle'
import EditarMoodle from './components/EditarMoodle'
import EliminarMoodle from './components/EliminarMoodle'

import './App.css';
import Contacto from './components/Contacto'



function App() {
  return (
    <div>
      <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/rol">
                    <PruebaRol />
                </Route>
                <Route path="/login">
                    <RegistroLogin />
                </Route>
                <Route path="/formularioAvisos">
                    <FormularioAvisos />
                </Route>
                <Route path="/formularioCarreras">
                    <FormularioCarreras />
                </Route>
                <Route path="/formularioCarousell">
                    <FormularioCarousell />
                </Route>
                <Route path="/formularioMoodle">
                    <FormularioMoodle />
                </Route>
                <Route path="/editarAviso/:id">
                    <EditarAviso />
                </Route>
                <Route path="/eliminarAviso/:id">
                    <EliminarAviso />
                </Route>
                <Route path="/editarCarrera/:id">
                    <EditarCarrera />
                </Route>
                <Route path="/eliminarCarrera/:id">
                    <EliminarCarrera />
                </Route>
                <Route path="/editarMoodle/:id">
                    <EditarMoodle />
                </Route>
                <Route path="/eliminarMoodle/:id">
                    <EliminarMoodle />
                </Route>
                <Route path="/crudMoodle">
                    <CrudMoodle />
                </Route>
                <Route path="/ofertaAcademica/:id">
                    <OfertaAcademica />
                </Route>
                <Route path="/pruebaModal">
                    <PruebaModal />
                </Route>
                <Route path="/mapaSitio">
                    <MapaDelSitio />
                </Route>
                <Route path="/contacto">
                    <Contacto />
                </Route>
                <Route exact path="/reset">
                    <ResetPassword />
                </Route>
                <Route path="/reset/:token">
                    <NewPassword />
                </Route>
                <Route path="/menu">
                    <Menu />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
