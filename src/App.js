import React, {useEffect} from 'react';
import {createBrowserHistory} from 'history';
import {Route, Router, Switch} from 'react-router-dom';
import 'assets/css/style.css';

import MemberRoute from 'component/Routes/MemberRoute';
import GuestRoute from 'component/Routes/GuestRoute';

import Login from 'pages/login';
import Register from 'pages/Register';
import MyClass from 'pages/MyClass';
import NotFound from 'pages/404';
import Unauthenticated from 'pages/401';
import Joined from 'pages/joined';
import DetailsClass from 'pages/DetailsClass';
import Settings from 'pages/Settings';
import Transaction from 'pages/Transaction';

import {useDispatch} from 'react-redux'
import {setAuthorizationHeader} from 'configs/axios';
import users from 'constan/api/users';
import { populateProfile } from 'store/action/users';


function App() {
  const dispatch = useDispatch()
  const history = createBrowserHistory({basename:process.env.PUBLIC_URL})
  let session = null
  useEffect(() => {
    if(localStorage.getItem("BWAMICRO:token")){
      session = JSON.parse(localStorage.getItem("BWAMICRO:token"))
      setAuthorizationHeader(session.token)

      users.details().then(details => {
          dispatch(populateProfile(details.data))
      })
    }
  }, [dispatch])
  return (
    <>
    <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated}></GuestRoute>

          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <MemberRoute exact path="/joined/:class" component={Joined}></MemberRoute>
          <MemberRoute exact path="/courses/:class/:chapter/:uid" component={DetailsClass}></MemberRoute>
          <MemberRoute exact path="/courses/:class" component={DetailsClass}></MemberRoute>
          <MemberRoute  path="/settings" component={Settings}></MemberRoute>
          <MemberRoute  path="/transaction" component={Transaction}></MemberRoute>
          <Route path="*" component={NotFound}></Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
