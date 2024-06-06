import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomeContent from '../../components/HomeContent';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <h2>Welcome, {user && user.username}!</h2>
      <button onClick={logout}>Logout</button>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;

