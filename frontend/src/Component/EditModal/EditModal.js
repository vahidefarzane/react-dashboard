import React from "react";
import ReactDOM from "react-dom";
import {BsCursorText} from 'react-icons/bs'
import {BiDollarCircle} from 'react-icons/bi'
import {BsBagCheck} from 'react-icons/bs'
import {TbNumbers} from 'react-icons/tb'
import "./EditModal.css";

export default function EditModal({editAction}) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="edit-modal-container">
        <h1>اطلاعات جدید را وارد کنید</h1>
        <form action="#">
          <div className="edit-products-form-group">
            <BsCursorText className="add-products-icon" />
            <input type="text" placeholder="اسم محصول را ویرایش کنید" />
          </div>
          <div className="edit-products-form-group">
            <BsBagCheck className="add-products-icon" />
            <input type="text" placeholder="موجودی محصول را ویرایش کنید" />
          </div>
          <div className="edit-products-form-group">
            <BiDollarCircle className="add-products-icon" />
            <input type="text" placeholder="قیمت محصول را ویرایش کنید" />
          </div>
          <div className="edit-products-form-group">
            <TbNumbers className="add-products-icon" />
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را ویرایش کنید"
            />
          </div>
        </form>
        <button className="edit-products-btn" onClick={()=>editAction()}>ثبت اطلاعات</button>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
