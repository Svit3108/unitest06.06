// src/components/PrivateRoute.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

test('renders Home component for authenticated users', () => {
  const { getByText } = render(
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute element={Home} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );

  expect(getByText('Welcome,')).toBeInTheDocument();
});

test('redirects to login for unauthenticated users', () => {
  const { getByText } = render(
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute element={Home} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );

  expect(getByText('Login')).toBeInTheDocument();
});
