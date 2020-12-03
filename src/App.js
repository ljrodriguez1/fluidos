import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
  import NavBar from './components/NavBar';
  import Inicio from './components/Inicio';
  import Fluid from './components/Fluid'
  
  //import './App.css';
  
  function App() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Router>
        <Switch>
          <Route path="/aplicaciones">
            Aplicaciones
          </Route>
          <Route path="/marco">
            Marco
          </Route>
          <Route path="/simulador">
            <Fluid></Fluid>
          </Route>
          <Route path="/">
            <Inicio></Inicio>
          </Route>
        </Switch>
        </Router>
  
      </div>
    );
  }
  
  export default App;
  