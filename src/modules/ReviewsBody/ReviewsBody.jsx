import React, { useContext, useState, useEffect } from "react";
import { ReviewContext } from "../../context/review/ReviewContext";
import Rating from "@material-ui/lab/Rating";
import "./style.css";
import ChatIcon from "@material-ui/icons/Chat";
import { NET } from "../../network";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const ReviewsBody = () => {
  const { state, dispatch } = useContext(ReviewContext);
  
  const [more, setMore] = useState(3);
     useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${NET.APP_URL}/reviews.json`;

        let response = await fetch(url);

        let result = await response.json();
        console.log(result);
        dispatch({
          type: "GET_REVIEWS",  
          payload: result,
        });
        // console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const moreReview = () => {
    setMore(more + 3);
  };
  const reviewsData = state.reviews.slice(0, more)
  // console.log(reviewsData)
  return (
    <div className="ReviewContainer">
      {reviewsData.map((reviewElement, index) => {
        return (
          <div className="ReviewsMain animated fadeInUp" key={index}>
            <div className="MainReviewWrapper">
              <div className="ReviewIcon">
                <ChatIcon />
              </div>
              <div className="ReviewUserName">
                <p>{reviewElement.name}</p>
              </div>
              <div className="ReviewRating">
                <Rating
                  name="read-only"
                  value={reviewElement.rating}
                  readOnly
                />
                <p value={reviewElement.rating}>{reviewElement.rating}</p>
              </div>
              <div className="DateInfo">{reviewElement.dateInfo}</div>
              <div className="ReviewUserMessage">
                <p>{reviewElement.message}</p>
              </div>
              <span></span>
            </div>
          </div>
        );
      })}
      <Button
          variant="contained"
          color="primary"
          endIcon={<ExpandMoreIcon />}
          type="submit"
          onClick={moreReview}
          style={{marginTop:'60px'}}
        >
          Загрузить больше
        </Button>
    </div>
  );
};

export default ReviewsBody;
