import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import FormularioAvisos from './components/FormularioAvisos'
import FormularioCarreras from './components/FormularioCarreras'
import FormularioCarousell from './components/FormularioCarousell'
import OfertaAcademica from './components/OfertaAcademica'
import EditarAviso from './components/EditarAviso'
import RegistroLogin from './components/RegistroLogin'
import PruebaRol from './components/PruebaRol'

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
                <Route path="/ofertaAcademica/:id">
                    <OfertaAcademica />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
