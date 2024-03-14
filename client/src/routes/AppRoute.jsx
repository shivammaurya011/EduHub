import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; 
import SigninPage from '../pages/Signin';
import UserDashboard from '../pages/UserDashboard';
import AdminDashboard from '../pages/AdminDashboard';
function AppRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/user' element={<UserDashboard />} />
      <Route path='/admin' element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoute;
