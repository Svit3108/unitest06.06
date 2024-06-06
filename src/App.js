import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <ThemeSwitcher />
          <Routes>
            <Route path="/login" element={<Login />} />
            <PrivateRoute path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;

