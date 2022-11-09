import React from "react";
import ReactDOM from "react-dom";
import "./DetailsModal.css";

export default function DetailsModal({closeAction}) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="details-modal-container">
        <div className="details-modal">
          <img src="./img/buttle.jpeg" alt="buttle" />
          <table className="details-table">
            <tr>
              <th>نام:</th>
              <td>بطری</td>
            </tr>
            <tr>
              <th>قیمت:</th>
              <td>56000</td>
            </tr>
            <tr>
              <th>میزان محبوبیت:</th>
              <td>3 از 5</td>
            </tr>
          </table>
        </div>
        <button className="details-close-btn" onClick={()=> closeAction()}>بستن</button>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
