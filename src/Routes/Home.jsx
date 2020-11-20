import React from "react";
import '../assets/css/Home.css'
import '../assets/css/animate.css'
import AnimatedText from '../modules/AnimatedText/AnimatedText'
import Parallax from '../modules/Parallax/Parallax'
import ButtonContact from '../components/ButtonContact/ButtonContact'
import SideBar from '../components/SideBar/SideBar'
// import ScrollAnimation from 'react-animate-on-scroll';
// import Scroller from '../modules/Scroller/Scroller'

const Home = () => {

  return (
    <div>
      <SideBar />
    <div className="MainContainer animated fadeIn slow">
      <Parallax />
      <AnimatedText />
      <div className="MainBg">
        <ButtonContact />
      </div>    
    </div>
    </div>
    )
    
};

export default Home;
