import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div id="demo-modal" class="modal">
      <div class="modal__content">
        {children}
        {/* <a href="#" class="modal__close">
          &times;
        </a> */}
      </div>
    </div>,

    document.getElementById("modal")
  );
}

export { Modal };
