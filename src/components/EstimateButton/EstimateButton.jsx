import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import MaskPhone from "../MaskPhone/MaskPhone";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const EstimateButton = () => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
    },
    input: {
      display: "none",
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const hadnleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <section>
        <div className="container1">
          <a className="btn btn-1" onClick={hadnleClickOpen}>
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Оценить уборку
          </a>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className="card-modal">
                <form action="Estimate.php" method="post">
                  <div className="modal-title">
                    <h1>Сколько будет стоить уборка у меня дома?</h1>
                  </div>
                  <div className="modal-description">
                    <p>Для этого вышлите нам фото</p>
                  </div>
                  <div>
                    <div className="InputForm">
                      <TextField
                        id="standard-basic"
                        label="Ваше имя"
                        name="user_name"
                      />
                    </div>
                    <div className="InputForm">
                      <MaskPhone />
                    </div>
                    <div className="InputForm">
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>  
                    </div>
                    <div className="SendBtn">
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        type="submit"
                      >
                        Отправить
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </Fade>
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default EstimateButton;
