import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../features/NavBar';
import HeroSection from '../../features/HeroSection';
import MySkills from '../../features/MySkills'
HomePage.propTypes = {
  
};

function HomePage(props) {
  return (
    <div>
      <HeroSection/>
      <MySkills/>
    </div>
  );
}

export default HomePage;