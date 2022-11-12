import React from "react";
import ReactDOM from "react-dom";
import "./DetailsModal.css";

export default function DetailsModal({children}) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      {children}
    </div>,
    document.getElementById("modals-parent")
  );
}
