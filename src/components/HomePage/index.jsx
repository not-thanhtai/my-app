import React, {useState} from 'react';
import NavBar from '../../features/NavBar';
import MySkills from '../../features/MySkills'
import IntroSection from "../../features/IntroSection";
import ScrollToTopButton from "../../features/ScrollToTopButton";

function HomePage(props) {

  return (
    <div>
      <IntroSection/>
        <MySkills/>
    </div>
  );
}

export default HomePage;
