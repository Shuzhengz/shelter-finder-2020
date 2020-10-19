import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NumberOfBeds from './NumberOfBeds'
import Map from './Map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NumberOfBeds}/>
            <Route path="/map" component={Map}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
