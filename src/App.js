import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NumberOfBeds from './NumberOfBeds'
import Map from './Map'
import Settings from '.Settings'
import LandingPage from './LandingPage'
import Help from './Help'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/map" component={Map}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/numberofbeds" component={NumberOfBeds}/>
            <Route path="/help" component={Help}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
