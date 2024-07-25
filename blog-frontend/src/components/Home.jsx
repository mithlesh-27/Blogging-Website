import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home" key="home">
      <h1 key="title">Welcome to the Mithlesh Blog</h1>
      <p key="description">Explore the latest articles and share your thoughts.</p>
      <Footer />
    </div>
  );
};

export default Home;