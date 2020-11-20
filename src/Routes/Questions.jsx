import React from "react";
import "../assets/css/questions.css";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";
import '../assets/css/animate.css'
import SideBar from '../components/SideBar/SideBar'
const Questions = () => {
  return (
    <div className="Row">
      <div>
      <SideBar></SideBar>
      </div>
      <div className="MainContainer2">
        <div className="rowQuestion">
          <div className="MainTitle animated fadeInLeft">
            <h1>Вопросы и ответы</h1>
          </div>
          <div className="faqWrapper animated fadeIn delay-1s">
            <Accordion />
          </div>
        </div>
      </div>
      <div className="FooterRaw">
      <Footer />
      </div>
    </div>
  );
};

export default Questions;
