import React from 'react';
import ReactDOM from 'react-dom';
import { Browser as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import App from './components/App';
import App from './components/Admin';
import App from './components/Checkout';
import App from './components/Featured';
import App from './components/Signin';
import App from './components/Signout';
import App from './components/Store';




import * as serviceWorker from './serviceWorker';


Const Root = () => (
  <Router>
    <Switch>
      <route component={App} exact path ="/" />
      <route component={Admin} exact path ="/admin" />
      <route component={Checkout} exact path ="/checkout" />
      <route component={Featured} exact path ="/featured" />
      <route component={Signin} exact path ="/signin" />
      <route component={Singout} exact path ="/signout" />
      <route component={Store} exact path ="/store" />
    </Switch>
  </Router>
)







ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
