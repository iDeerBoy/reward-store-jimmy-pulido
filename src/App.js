import './App.css';
import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
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
        <HashRouter>
          <Switch>          
            <Route exact path="/" component={Home} />
            <Route exact path="/History" component={History} />
            <Route exact path="/Credits" component={Credits} />
            <Route component={NoFound} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;