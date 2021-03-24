import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route
} from 'react-router-dom'
import HomePage from './pages/home';
import KnowledgePage from './pages/knowledge';
import TicketPage from './pages/ticket';
function App() {
  return (
    <div>
      <BrowserRouter >
      <Navbar/>
      <Switch>
<Route path='/' exact component={HomePage}></Route>
<Route path='/knowledge'  component={KnowledgePage}></Route>
<Route path='/ticket'  component={TicketPage}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
