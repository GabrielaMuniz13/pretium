import React from 'react';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Configuracoes from './Pages/Configuracoes/Configuracoes';
import Cotacoes from './Pages/Cotacoes/Cotacoes';
import Fornecedores from './Pages/Fornecedores/Fornecedores';
import Relatorios from './Pages/Relatorios/Relatorios'


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
        <Route path="/cotacoes">
           <Cotacoes/>
        </Route>
        <Route path="/fornecedores">
           <Fornecedores/>
        </Route>
        <Route path="/relatorios">
           <Relatorios/>
        </Route>
        <Route path="/configuracoes">
           <Configuracoes/>
        </Route>
      </Switch>
    </Router>
  </>
  );
} 

export default App;
