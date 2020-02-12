import React, { Component } from 'react';
import './App.css';
import Main from './pages/Home';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <>
     <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      </>
    )
  }
}

export default App;
