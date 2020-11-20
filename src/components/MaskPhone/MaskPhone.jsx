import React, { useState } from "react";
import InputMask from "react-input-mask";
import './style.css'
export default function MaskPhone() {
  const [data, setData] = useState({
    phone: ""
  });
  return (
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
      />
      <hr />
      <label htmlFor="standard-basic">Введите телефон</label>
    </div>
  );
}
