import React from "react";
import "./style.css";
import Modal from "react-animated-modal";

const Button = () => {
  const [open, setOpen] = React.useState(false);
  const hadnleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () =>{
    setOpen(false)
  }
  return (
    <div>
      <section>
        <div className="container1">
          <a className="btn btn-1" onClick={hadnleClickOpen}>
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Заказать уборку
          </a>
          <Modal visible={open} closemodal={handleClose} type="fadeIn">
            <h1>123</h1>
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default Button;
