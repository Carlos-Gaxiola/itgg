import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import FormularioAvisos from './components/FormularioAvisos'

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
            </Switch>
        </Router>
    </div>
  );
}

export default App;
