import React, { useReducer, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import "../assets/css/review.css";
import TextField from "@material-ui/core/TextField";
import Footer from "../components/Footer/Footer";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import MaskPhone from "../components/MaskPhone/MaskPhone";
import ReviewsBody from "../modules/ReviewsBody/ReviewsBody";
import { ReviewContext } from "../context/review/ReviewContext";
import ReviewState from "../context/review/ReviewState";
import { ReviewReducer } from "../context/review/ReviewReducer";
import { useToasts } from "react-toast-notifications";
// import { useForm } from "react-hook-form";
import InputLabel from "@material-ui/core/InputLabel";
import InputMask from "react-input-mask";
import { NET } from "../network";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "#7086d1",
  },
}));

const Review = React.memo(() => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(ReviewReducer, ReviewState);
  // console.log(state);
  const { addToast } = useToasts();
  const today = new Date();
  const date =
    "0" +
    today.getDate() +
    "-" +
    "0" +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear();
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    rating: null,
    dateInfo: date,
  });
  const [value, setValue] = useState(0);

  const SendDataReview = async () => {
    if (data.name.length == 0) {
      addToast("Имя не может быть пустое", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
    } else if (data.message.length < 10) {
      addToast("Сообщение должно содержать минимум 10 символов", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
    } else if (data.rating == null) {
      addToast("Вы забыли поставить оценку", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
    } else if (data.phone.length == 0) {
      addToast("Введите пожалуйста номер телефона", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 3000
      }
      );
    } else {
      try {
        const url = `${NET.APP_URL}/reviews.json`;

        let response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
        });

        let result = await response.json();
        // console.log(result);
        dispatch({
          type: "REVIEW_DATA",
          payload: data,
        });
        // console.log(result);
        setData({
          name: "",
          phone: "",
          email: "",
          message: "",
          rating: null,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  // console.log(data.phone)
  return (
    <ReviewContext.Provider value={{ state, dispatch }}>
      <SideBar />
      <div className="MainContainer5">
        <div className="MainTitleReview">
          <h2>Отзывы о нашей работе</h2>
        </div>
        <div className="ReviewsFormWrap">
          <div className="FormTitleWrap">
            <h2>Оставьте свой отзыв</h2>
          </div>
          <div className="FormSubTitleWrap">
            <p>
              Ваши отзывы реально помогают делать наш сервис лучше. Вся критика
              или пожелания обращаются в модернизацию и улучшению наших услуг.
            </p>
          </div>
        </div>
        <div className="FormWrapper">
          <form action="" method="POST">
            <div className="ReviewFormField">
              <div className="FormElement NameInput">
                <InputLabel htmlFor="standard-basic" className={classes.label}>
                  Введите ваше имя
                </InputLabel>
                <TextField
                  id="standard-basic"
                  // label="Ваше имя и фамилия"
                  value={data.name}
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                  name="UserName"
                />
              </div>
              <div className="FormElement MaskInput">
                <div class="material">
                  <InputMask
                    id="standard-basic"
                    value={data.phone}
                    onChange={(e) => {
                      setData({ ...data, phone: e.target.value });
                    }}
                    name="userPhone"
                    mask="+38 (999) 999-99-99"
                    maskChar="_"
                    // style={{border: 'none'}}
                    className="InputMaskElement"
                  ></InputMask>
                  <hr />
                  <label htmlFor="standard-basic">Введите телефон</label>
                </div>
              </div>
              {/* <div className="FormElement">
                <TextField
                  id="standard-basic"
                  label="Ваш e-mail"
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                />
              </div> */}
            </div>
            <div className="TextAreaField">
              <div class="material-textarea">
                <textarea
                  id="body"
                  maxlength="500"
                  minlength="10"
                  value={data.message}
                  onChange={(e) => {
                    setData({ ...data, message: e.target.value });
                  }}
                  name="userMessage"
                />

                <label for="body">Your message</label>
              </div>
            </div>
            <div className="RationWrap">
              <p>Ваша оценка:</p>
              <Box component="fieldset" mb={3} borderColor="transparent">
                {/* <Typography component="legend">Controlled</Typography> */}
                <Rating
                  name="simple-controlled"
                  value={data.rating}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    setData({ ...data, rating: event.target.value });
                  }}
                />
              </Box>
              <div className="BtnReview">
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={SendDataReview}
                >
                  Отправить
                </Button>
              </div>
            </div>
          </form>
        </div>
        <ReviewsBody />
      </div>
      <Footer />
    </ReviewContext.Provider>
  );
});

export default Review;
