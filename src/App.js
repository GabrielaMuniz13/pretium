import React from 'react';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
           <Dashboard/>
        </Route>
      </Switch>
    </Router>
  </>
  );
} 

export default App;
