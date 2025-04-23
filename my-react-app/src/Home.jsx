import React, { useState, useEffect } from 'react';
import './Home.css'; // Assuming you create a separate CSS file for this

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // UseEffect to trigger visibility when the component mounts
  useEffect(() => {
    setIsVisible(true);

    return () => setIsVisible(false); // Cleanup when the component unmounts
  }, []);

  return (
    <div className={`home-wrapper ${isVisible ? 'active' : 'hidden'}`}>
      <div className="home-content">
        <h1>Welcome to Our Website!</h1>
        <p className='paragraph'>Explore the latest features and content we have to offer.</p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default HomePage;
