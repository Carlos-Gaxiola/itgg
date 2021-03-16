import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import FormularioAvisos from './components/FormularioAvisos'
import OfertaAcademica from './components/OfertaAcademica'

import './App.css';

function App() {
  return (
    <div>
      <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/formularioAvisos">
                    <FormularioAvisos />
                </Route>
                <Route path="/ofertaAcademica">
                    <OfertaAcademica />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
