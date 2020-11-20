import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import "../assets/css/results.css";
import Footer from "../components/Footer/Footer";
import TwentyTwenty from "react-twentytwenty";
import { SRLWrapper } from "simple-react-lightbox";
import FsLightbox from "fslightbox-react";
import Image0 from "../assets/img/services/yellow-glove-and-blue-sudsy-sponge.jpg";
import Image1 from "../assets/img/services/water-falls-like-chandelier.jpg"
import Image2 from "../assets/img/services/city-scene-captured-in-motion.jpg"
const Results = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  function openLightboxOnSource(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
    });
  }
  const options = {
    buttons: {
      iconPadding: "20px",
      iconColor: "rgba(179, 175, 143, 0.8)",
      showDownloadButton: false,
      size: "70px",
    },
    caption: {
      captionFontFamily: "Montserrat, sans-serif",
      captionFontSize: "30px",
      captionColor: "#8D99AE",
      captionFontWeight: 300,
      showCaption: true,
    },
    settings: {
      overlayColor: "rgba(43, 45, 66, 0.95)",
      transitionTimingFunction: "ease-in-out",
      slideTransitionSpeed: 0.6,
      slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
      slideAnimationType: "slide",
      enablePanzoom: false,
      autoplaySpeed: 5000,
      hideControlsAfter: false,
    },
    progressBar: {
      height: "3px",
      fillColor: "#8D99AE",
      backgroundColor: "rgba(43, 45, 66, 0.95)",
    },
    thumbnails: {
      thumbnailsSize: ["150px", "100px"],
      thumbnailsGap: "0 5px",
    },
  };

  return (
    <div>
      <SideBar />
      <div className="MainContainer3">
        <div className="MainTitle animated fadeInDown">
          <h3>Результат работы</h3>
        </div>
        <div className="MainSubTitle">
          <p>
            <div class="section-big-subtitle animated fadeInDown slow">
              Мы делаем повседневные, генеральные и уборки после ремонта. Более
              подробно смотрите ниже.
            </div>
          </p>
        </div>
        <div className="TwentyContainer animated fadeInDown delay-1s">
          <div className="TwentyWrap ">
            <TwentyTwenty
              left={
                <img src="https://www.cleangroup.in.ua/wp-content/uploads/2020/02/6-1.jpg.webp" />
              }
              right={
                <img src="https://www.cleangroup.in.ua/wp-content/uploads/2020/02/6-2-768x576.jpg.webp" />
              }
              slider={<div className="slider" />}
            />
          </div>
          <div className="TwentyWrap">
            <TwentyTwenty
              left={
                <img src="https://www.cleangroup.in.ua/wp-content/uploads/2020/02/6-1.jpg.webp" />
              }
              right={
                <img src="https://www.cleangroup.in.ua/wp-content/uploads/2020/02/6-2-768x576.jpg.webp" />
              }
              slider={<div className="slider" />}
            />
          </div>
          <div className="TwentyWrap">
            <TwentyTwenty
              left={
                <img src="https://www.cleangroup.in.ua/wp-content/uploads/2020/02/6-1.jpg.webp" />
              }
              right={
                <img src="https://www.cleangroup.in.ua/wp-content/uploads/2020/02/6-2-768x576.jpg.webp" />
              }
              slider={<div className="slider" />}
            />
          </div>
        </div>

        <div className="LightBoxContainer">

          {/* <SRLWrapper options={options}>
            <img
              src={Image0}
              alt="Caption"
            />
            <img
              src={Image1}
              alt="Caption"
            />
            <img
              src={Image2}
              alt="Caption"
            />
          </SRLWrapper> */}



          <div onClick={() => openLightboxOnSource(0)}>
            <img width="200" src={Image0} />
          </div>
          <div onClick={() => openLightboxOnSource(1)}>
            <img
              width="200"
              src={Image1}
            />
          </div>
          <div onClick={() => openLightboxOnSource(2)}>
            <img
              width="200"
              src={Image2}
            />
          </div>
          <FsLightbox
            toggler={lightboxController.toggler}
            sourceIndex={lightboxController.sourceIndex}
            sources={[
              require("../assets/img/services/yellow-glove-and-blue-sudsy-sponge.jpg"),
              require("../assets/img/services/water-falls-like-chandelier.jpg"),
              require("../assets/img/services/city-scene-captured-in-motion.jpg"),
            ]}
          />


        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Results;
