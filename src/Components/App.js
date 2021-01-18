import '../css/App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout'
import Footer from './Footer'
import Login from './Login'
import {useStateValue} from '../StateProvider'
import { auth } from "./firebase.js";
import {useEffect} from 'react'
import Details from './Details'
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders'

const promise = loadStripe("pk_test_51IAXLuHXtPwrYxYdKoXYFEhjpZ69UmaT9IWEKiJGaBjKV6d8jHqZiUfh8qousSpKmENbvhgq7nMWZULuEncWcMpl00dBK41L05");

function App() {

const [state, dispatch] = useStateValue();

useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App" id="App"> 
            <Switch>
              <Route path="/details/:producttitle" render={(props) => (
                <div>
                  <Header className="header"/>
                  <Details {...props} />
                  <Footer className="footer"/>
                </div>
              )}/>
              <Route path="/payment">
                <Header className="header"/>
                <Elements stripe={promise} >
                  <Payment />
                </Elements>
                <Footer className="footer"/>
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/orders">
                  <Header className="header"/>
                  <Orders />
                  <Footer className="footer"/>
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
