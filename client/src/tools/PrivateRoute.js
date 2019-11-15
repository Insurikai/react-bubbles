import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({component: Component,...rest})=>{
  console.log(localStorage.getItem("token")? "Good" : "Log In")
  return <Route {...rest} 
  render={ props => localStorage.getItem("token") ?
  (<Component {...props} />) :
  (<Redirect to="/" />) }/>
}