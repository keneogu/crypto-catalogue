import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-contain">
        <h1 className="home-h-text">Welcome to Crypto</h1>
        <h5 className="home-text">
          {' '}
          <Typewriter
            words={['Our mission is to make crypto accessable to everybody']}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5>
        <p className="view-coins"><Link to="/category">View Coins</Link></p>
      </div>
    </div>
  );
}

export default Home;
