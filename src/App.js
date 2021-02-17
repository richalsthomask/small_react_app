import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/login" component={Login}/>
      </Switch>

      <Switch>
        <Route path="/register" component={Register}/>
      </Switch>

      <Switch>
        <Route path='/homepage' component={Homepage}/>
      </Switch>
    </Router>
  );
}

export default App;
