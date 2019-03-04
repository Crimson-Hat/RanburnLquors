import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Admin from './components/Admin';
import Checkout from './components/Checkout';
import Featured from './components/Featured';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Store from './components/Store';


import NavBar from "./components/UniversalComponent/Navbar";


import * as serviceWorker from './serviceWorker';



const Root = () => (
  <React.Fragment>
    <Router>
    <div>
      <NavBar />
    
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Admin} exact path="/admin" />
        <Route component={Checkout} exact path="/checkout" />
        <Route component={Featured} exact path="/featured" />
        <Route component={Signin} exact path="/signin" />
        <Route component={Signup} exact path="/signup" />
        <Route component={Store} exact path="/store" />
      </Switch>
    </div>
    </Router>
  </React.Fragment>
)







ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




//hot reloading feature from webpack to update page without reloading page
if (module.hot) {
  module.hot.accept();
}
