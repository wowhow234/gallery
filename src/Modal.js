import React from "react";
import "./css/modal.css";

const Modal = ({ closeModal, data }) => {
  return (
    <div className="modalbackground">
      <div className="modalcontent">
        <img key={data.id} src={data.image} alt={"pic" + `${data.title}`} />
        <button onClick={closeModal}>X</button>
      </div>
    </div>
  );
};

export default Modal;
