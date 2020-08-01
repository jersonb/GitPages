import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from "react-router-dom";


import { FaBeer } from 'react-icons/fa';

function App() {
  return (

    <React.Fragment>
        <NavBar />
        <Switch>
      <header className="App-header">
        
        <p>Jerson Teste <FaBeer/></p>
      </header>
      <Route exact path = "/" />

        </Switch>

      </React.Fragment>

  );
}

export default App;
