import React, { useContext, useState, useEffect } from "react";
import { ReviewContext } from "../../context/review/ReviewContext";
import "./style.css";
import "../../assets/css/services.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import firstItem from "../../assets/img/services/cleaning-supply-bucket-in-kitchen.jpg";
import TimerIcon from "@material-ui/icons/Timer";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NET } from "../../network";
import '../../assets/css/animate.css'

const ReviewsBody = () => {
  const { state, dispatch } = useContext(ReviewContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${NET.APP_URL}/services.json`;

        let response = await fetch(url);

        let result = await response.json();
        dispatch({
          type: "GET_SERVICES",
          payload: result,
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [more, setMore] = useState(4);
  const loadMore = () => {
    setMore(more + 4);
  };
  const servicesData = state.services.slice(0, more);
  // console.log(state.services)
  return (
    <div>
      <div className="ServicesContainer">
        {servicesData.map((services, index) => {
          return (
            <div>
              <div className="CardMenu animated fadeInUp">
                <div className="CardItem">
                  <Flippy
                    flipOnClick={true}
                    flipDirection="horizontal"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  >
                    <FrontSide
                      style={{
                        backgroundImage: `url(${firstItem})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div>
                        <div className="article-content">
                          <div className="article-title">
                            <h3>{services.title}</h3>
                          </div>
                          <ul className="article-info">
                            <li>{services.article}</li>
                            <li
                              style={{
                                marginLeft: 20,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <TimerIcon />
                              {services.info}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </FrontSide>
                    <BackSide
                      style={{
                        backgroundColor: "#41669c",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {services.backText}
                    </BackSide>
                  </Flippy>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ServicesBtn">
        <Button
          variant="contained"
          color="primary"
          endIcon={<ExpandMoreIcon />}
          type="submit"
          onClick={loadMore}
          className="animated fadeInUp"
        >
          Загрузить больше
        </Button>
      </div>
    </div>
  );
};

export default ReviewsBody;
