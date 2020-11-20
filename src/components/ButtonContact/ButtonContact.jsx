import React from "react";
import PlacesAutocomplete from "../../modules/GoogleAutocomplete";
import 'react-google-places-autocomplete/dist/index.min.css';
import "./Button.css";
import Modal from "react-animated-modal";
import TextField from "@material-ui/core/TextField";
import DatePicker from "../DataPicker/DataPicker";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import MaskPhone from "../MaskPhone/MaskPhone";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
const ButtonContact = () => {
  const [adress, setAdress] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClickOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const SearchOption = {
    types: ["(Мариуполь)"],
    componentRestrictions: { country: "ua" },
  };

  return (
    <div>
      <div class="buttons">
        <button className="offset buttonOffer" onClick={handleClickOpen}>
          Заказать уборку
        </button>
        <Modal visible={modal} closemodal={handleClose} type="fadeIn">
          <div className="modalContent">
            <div className="mainForm">
              <form action="telegram.php" className="form" method="POST">
                <div className="ModalTitel">
                  <h4>Оставьте заявку</h4>
                </div>
                <div className="ModalSubTitle">
                  <p>Закажите уборку на дом </p>
                </div>
                <div className="FormWrap">
                  <div className="InputForm">
                    <PlacesAutocomplete
                      name="adress"
                      value={adress}
                      onChange={setAdress}
                      SearchOption={SearchOption}
                      inputClassName="PlaceAutocomplete"
                      geocodeByAdress="Мариуполь"
                      placeholder="Куда ехать клинеру?"
                      autocompletionRequest={{
                        componentRestrictions: { country: "ua" },
                        bounds: [
                          { lat: 47.097814, lng: 37.526949 },
                          { lat: 47.097814, lng: 37.526949 },
                        ],
                      }}
                    />
                  </div>
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
                    <TextField
                      id="standard-basic"
                      label="Ваш промокод"
                      name="user_promo"
                    />
                  </div>
                  <div className="InputForm">
                    <DatePicker />
                  </div>
                  <div className="InputForm">
                    <InputLabel style={{ position: "absolute", left: "76px" }}>
                      Как Вы нас нашли?
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      name="user_find"
                    >
                      <MenuItem value={"google"}>google</MenuItem>
                      <MenuItem value={"facebook"}>facebook</MenuItem>
                      <MenuItem value={"instagram"}>instagram</MenuItem>
                      <MenuItem value={"другое"}>другое</MenuItem>
                    </Select>
                  </div>
                  {/* <input type="file" name="fileURL"></input> */}
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
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ButtonContact;
