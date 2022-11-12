import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./ProductsTable.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setisShowDetailModal] = useState(false);
  const [isShowEditModal, setisShowEditModal] = useState(false);

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    setIsShowDeleteModal(false);
  };
  const closeModalDetails = () => {
    setisShowDetailModal(false);
  };
  const editModals= ()=>{
    console.log("gav");
    setisShowEditModal(false)

  }
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
            <button
              className="products-table-btn"
              onClick={() => setisShowDetailModal(true)}
            >
              جزییات
            </button>
            <button
              className="products-table-btn"
              onClick={() => setIsShowDeleteModal(true)}
            >
              حذف
            </button>
            <button
              className="products-table-btn"
              onClick={() => setisShowEditModal(true)}
            >
              ویرایش
            </button>
          </td>
        </tr>
      </table>
      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
      {isShowDetailModal && <DetailsModal closeAction={closeModalDetails} />}
      {isShowEditModal && <EditModal editAction={editModals}/>}
    </>
  );
}
