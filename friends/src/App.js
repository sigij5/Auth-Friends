import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import  Login  from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Friends App</h1>
          <Link to='/login'>Login</Link>
      </header>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friendslist' component={FriendsList} />
      </Switch>


    </div>
  );
}

export default App;
