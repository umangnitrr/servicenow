import React from 'react'
import './App.css';
import Nav from './components/Nav';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'
import HomePage from './pages/home';
import KnowledgePage from './pages/knowledge';
import TicketPage from './pages/ticket';
function App() {
  return (
    <div >

      <Nav />
      <BrowserRouter >

        <div className="container-fluid">
          <Switch>
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/knowledge/:id' component={KnowledgePage}></Route>
            <Route path='/ticket' component={TicketPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
