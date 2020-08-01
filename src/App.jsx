import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from "react-router-dom";
import { FaHammer } from 'react-icons/fa';
import Footer from './components/Footer';

const App = () => {
  return (

    <React.Fragment>
      <NavBar />
      <Switch>
        <header className="App-header">
          <p> <FaHammer /></p>
          <code>Hello Word!</code>
        </header>
        <Route exact path="/" />
      </Switch>
      <Footer/>

    </React.Fragment>

  );
}

export default App;
