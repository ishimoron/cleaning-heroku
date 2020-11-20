import React, { useReducer, useState, useEffect } from "react";
import "../assets/css/services.css";
import "../assets/css/animate.css";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import { ReviewContext } from "../context/review/ReviewContext";
import { ReviewReducer } from "../context/review/ReviewReducer";
import ReviewState from "../context/review/ReviewState";
import ServicesBody from "../components/ServicesBody/ServicesBody";

const Services = () => {
  const [state, dispatch] = useReducer(ReviewReducer, ReviewState);

  return (
    <ReviewContext.Provider value={{ state, dispatch }}>
      <div className="Row1">
        <SideBar />
        <div className="MainContainer1">
          <div className="MainTitleTextServices animated fadeIn slow">
            <h1>
              Клининговые <br />
              Услуги
            </h1>
          </div>
        </div>
        <ServicesBody />
        
        <div style={{ flexShrink: "0" }}>
          <Footer />
        </div>
      </div>
    </ReviewContext.Provider>
  );
};

export default Services;
