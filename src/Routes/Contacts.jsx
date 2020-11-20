import React from "react";
import "../assets/css/contacts.css";
import SideBar from "../components/SideBar/SideBar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import GoogleMaps from "../modules/GoogleMaps/GoogleMaps";
import Footer from "../components/Footer/Footer";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import '../assets/css/animate.css'
const Contacts = () => {
  return (
    <div>
      <SideBar />
      <div className="MainContainer4">
        <div className="MainTitleText animated fadeInDown   ">
          <h2>Контакты</h2>
        </div>
        <div className="ContactsCard animated fadeInLeft slow">
          <ul>
            <li>
              <LocationOnIcon />
              &nbsp;Адрес: улица Дегтяревская, 49, Киев, 03113
            </li>
            <li>
              <PhoneIcon />
              <a href="tel:+380970142104">&nbsp;097 014 2104</a>
            </li>
            <li>
              <MailIcon />
              <a href="mailto:hello@cleaning.com.ua">
                &nbsp;hello@cleaning.com.ua
              </a>
            </li>
          </ul>
        </div>
        <div className="MainTitleText animated fadeIn delay-1s">
          <h2>Мы в Google Maps</h2>
          <GoogleMaps />
        </div>
        <div className="ContactsContainer">
          <h2>Будем на связи</h2>
          <div className="ContactBar">
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <TelegramIcon />
            </a>
            <a href="">
              <FacebookIcon />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="FooterWrapContainer">
      </div>
        <Footer />
    </div>
  );
};

export default Contacts;
