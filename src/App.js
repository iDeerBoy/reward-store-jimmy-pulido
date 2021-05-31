import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import History from './Pages/History/History';
import Credits from './Pages/Credits/Credits';
import NoFound from './Pages/noFound/noFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Header />
        <BrowserRouter>
          <Switch>          
            <Route exact path="/reward-store-jimmy-pulido" component={Home} />
            <Route exact path="/reward-store-jimmy-pulido/History" component={History} />
            <Route exact path="/reward-store-jimmy-pulido/Credits" component={Credits} />
            <Route component={NoFound} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;