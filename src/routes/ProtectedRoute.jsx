import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({...rest}) => {
  const sessionIsAuth = sessionStorage.getItem('isAuth');

  return (sessionIsAuth) ? <Route {...rest}/> : <Redirect to="/login"/>
    
};

export default ProtectedRoute;