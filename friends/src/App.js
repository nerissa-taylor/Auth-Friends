import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './FriendsList';



function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>

        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
