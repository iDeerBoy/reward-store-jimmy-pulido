import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import History from './Pages/History/History';
import Credits from './Pages/Credits/Credits';
import Footer from './Components/Footer/Footer';

// Token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Header />
        <BrowserRouter>
          <Switch>          
            <Route exact path="/" component={Home} />
            <Route exact path="/History" component={History} />
            <Route exact path="/Credits" component={Credits} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
