import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Apptwo from './Apptwo';


import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
const rootElement = document.getElementById("root");

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')


ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={App} />
    <Route path="/Seasons" component={Apptwo} />
  </Switch>
  </BrowserRouter>,
  rootElement


);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
