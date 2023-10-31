import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../features/NavBar';
import HeroSection from '../../features/HeroSection';
HomePage.propTypes = {
  
};

function HomePage(props) {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
    </div>
  );
}

export default HomePage;