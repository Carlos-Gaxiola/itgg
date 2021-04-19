import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import FormularioAvisos from './components/FormularioAvisos'
import FormularioCarreras from './components/FormularioCarreras'
import FormularioCarousell from './components/FormularioCarousell'
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

import './App.css';


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
                <Route path="/ofertaAcademica/:id">
                    <OfertaAcademica />
                </Route>
                <Route path="/pruebaModal">
                    <PruebaModal />
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
