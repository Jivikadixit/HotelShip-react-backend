import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';



function App() {
  console.log("appa page")
  
  return (
    <Router>
      <div className="App">
      <ToastContainer position="top-center"/>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forgot/password' element={<ForgotPassword />} />
          <Route path='/update/password' element={<UpdatePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
