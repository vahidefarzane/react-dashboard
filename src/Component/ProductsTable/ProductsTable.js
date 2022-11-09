import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./ProductsTable.css";

export default function ProductsTable() {
  const [isShowModal, setIsShowModal] = useState(false);

  const deletBtnHamdeler = () => {
    console.log('khar');
    setIsShowModal(true);
  };

  const deleteModalCancelAction = () => {
    console.log("مدال کنسل شد");
    setIsShowModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log("مدال تایید شد");
    setIsShowModal(false);
  };

  return (
    <>
      <table className="products-table">
        <tr className="products-table-heading-tr">
          <th>عکس</th>
          <th>اسم</th>
          <th>قیمت</th>
          <th>موجودی</th>
        </tr>
        <tr className="products-table-tr">
          <td>
            <img
              src="/img/buttle.jpeg"
              alt="buttle"
              className="products-table-img"
            />
          </td>
          <td>بطری</td>
          <td>56000 تومان</td>
          <td>82</td>
          <td>
            <button className="products-table-btn">جزییات</button>
            <button className="products-table-btn" onClick={deletBtnHamdeler}>
              حذف
            </button>
            <button className="products-table-btn">ویرایش</button>
          </td>
        </tr>
      </table>
      {isShowModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
    </>
  );
}
