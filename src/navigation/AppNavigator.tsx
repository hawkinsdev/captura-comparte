import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../lib/helper/PrivateRoute';
import { LoginC } from '../containers/login/';
import { HomeC } from '../containers/home/';

const AppNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={LoginC} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/home' Component={HomeC}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppNavigator;
