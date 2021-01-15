import '../css/App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout'
import Footer from './Footer'
import Login from './Login'


function App() {
  return (
    <Router>
      <div className="App" id="App"> 
            <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/checkout">
                  <Header className="header"/>
                  <Checkout />
                  <Footer className="footer"/>
              </Route>  
              <Route path="/">
                  <Header className="header"/>
                  <Home />  
                  <Footer className="footer"/>
              </Route>
            </Switch>
          
      </div>
    </Router>
  );
}

export default App;
