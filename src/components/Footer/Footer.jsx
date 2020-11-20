import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";
import CallButton from "../Button/CallButton";
import EstimateButton from "../EstimateButton/EstimateButton";
const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <div className="FooterWidgetWrap">
          <div className="ContainerWrapper">
            <p>О нас </p>
          </div>
          <div className="CopyRightWrapper">
            <div className="social-buttons">
              <a
                href="https://www.facebook.com/"
                className="social-buttons__button social-button social-button--facebook"
                aria-label="Facebook"
              >
                <span className="social-button__inner">
                  <FacebookIcon />
                </span>
              </a>
              <a
                href="https://www.instagram.com/"
                class="social-buttons__button social-button social-button--instagram"
                aria-label="Instagram"
              >
                <span className="social-button__inner">
                  <InstagramIcon />
                </span>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMSqctFzqmZjVtbZMrtNrJQBnLZQzBLKnvNlDTZPTWvrRlFtCjCWVfrTTSPdKHFddsPxVjw"
                class="social-buttons__button social-button social-button--mail"
                aria-label="mail"
              >
                <span className="social-button__inner">
                  <EmailIcon />
                </span>
              </a>
            </div>

            <div className="FooterLinks">
              <div className="container">
                <div className="fourth">
                  <div className="Article--micro">
                    <span>
                      <Link
                        to="/services"
                        className="Button Animation Animation--grey Animation--textRed"
                      >
                        Services
                      </Link>
                    </span>
                    <span>
                      <Link
                        to="/questions"
                        className="Button Animation Animation--grey Animation--textRed"
                      >
                        Question
                      </Link>
                    </span>
                    <span>
                      <Link
                        to="/contacts"
                        className="Button Animation Animation--grey Animation--textRed"
                      >
                        Contacts
                      </Link>
                    </span>
                    <span>
                      <Link
                        to="/results"
                        className="Button Animation Animation--grey Animation--textRed"
                      >
                        Results
                      </Link>
                    </span>
                    <span>
                      <Link
                        to="/review"
                        className="Button Animation Animation--grey Animation--textRed"
                      >
                        Review
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="footer-contact-widget">
                  <div className="FooterText">
                    <h3>Закажите уборку:</h3>
                    <CallButton />
                    {/* <EstimateButton /> */}
                    <div className="TextWidget">
                      <p>Телефон:</p>
                      <a
                        href="tel:+380970142104"
                        className="Button Animation Animation--grey Animation--textRed"
                      >
                        097 014 21 04
                      </a>
                      <p>mail.mai@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
