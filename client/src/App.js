import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import LandingPageContainer from "./components/containers/LandingPageContainer";
import Auth from './hoc/auth'


function App() {
  const AuthLandingPage = Auth(LandingPageContainer, true)
  const AuthLoginPage = Auth(LoginPage, false)
  const AuthRegisterPage = Auth(RegisterPage, false)

  return (
    <Router>
        <Routes>
          <Route path="/" element={<AuthLandingPage />} />
          <Route path="/login" element={<AuthLoginPage />} />
          <Route path="/register" element={<AuthRegisterPage />} />
        </Routes>
    </Router>
  );
}

export default App