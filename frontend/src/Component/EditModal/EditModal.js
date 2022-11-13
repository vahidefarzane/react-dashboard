import React from "react";
import ReactDOM from "react-dom";
import "./EditModal.css";

export default function EditModal({children}) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      {children}
    </div>,
    document.getElementById("modals-parent")
  );
}
