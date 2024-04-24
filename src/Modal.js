import React from "react";
import "./css/modal.css";

const Modal = ({ closeModal, data }) => {
  return (
    <div className="modalbackground">
      <div className="modalcontent">
        <img
          key={data.id}
          src={data.image}
          alt={"pic" + `${data.title}`}
          // onLoad={(e) => {
          //   const img = e.target;
          //   console.log("이미지 가로사이즈", img.naturalWidth);
          //   console.log("이미지 세로사이즈", img.naturalHeight);
          // }}
          width="e.target.naturalWidth"
          height="e.target.naturalHeight"
        />
        <button onClick={closeModal}>X</button>
      </div>
    </div>
  );
};

export default Modal;
