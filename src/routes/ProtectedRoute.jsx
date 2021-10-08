import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({...rest}) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  
  return (isAuth) ? <Route {...rest}/> : <Redirect to="/login"/>
    
};

export default ProtectedRoute;