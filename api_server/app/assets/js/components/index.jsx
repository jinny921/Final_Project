import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import axios from 'axios';
import App from './App.jsx';
import DashApp from './DashApp.jsx';
import PinboardApp from './PinboardApp.jsx';
import HangoutApp from './HangoutApp.jsx';

const pages = {
  'react-dashboard': DashApp,
  'react-root': App,
  'react-pinboard': PinboardApp,
  'react-hangout': HangoutApp,
};


function run(user) {
  Object.entries(pages).forEach(([id, Component]) => {
    const root = document.getElementById(id);
    if (!root) { return; }
    console.log("prop to be passed to ", id, "is", user);
    ReactDOM.render(
      <Component userData={user} />, root);
  });
}

axios.get('/users/me')
.then(run)
.catch(run);   // not logged in

/*
    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" >
          <IndexRoute component={App} userData={user}></IndexRoute>
          <Route path="/react-dashboard" component={DashApp} userData={user}></Route>
          <Route path="/react-pinboard" component={PinboardApp} userData={user}></Route>
          <Route path="/react-hangout" component={HangoutApp} userData={user}></Route>
        </Route>

      </Router>
    );
*/



// {
//   const root = document.getElementById('react-dashboard');

//   if(root){
//     ReactDOM.render(<DashApp />, root);
//   }
// }

// {
//   const root = document.getElementById('react-root');

//   if(root) {
//     ReactDOM.render(<App />, root);
//   }
// }