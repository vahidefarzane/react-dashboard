import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./ProductsTable.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import Errorbox from "../Errorbox/Errorbox";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setisShowDetailModal] = useState(false);
  const [isShowEditModal, setisShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setproductID] = useState(null);
  const [mainproduct, setMainproduct] = useState({});

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        setIsShowDeleteModal(false);
        getAllProducts();
      });
  };
  const closeModalDetails = () => {
    setisShowDetailModal(false);
  };
  const editModals = () => {
    setisShowEditModal(false);
  };
  return (
    <>
      {allProducts.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setisShowDetailModal(true);
                      setMainproduct(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setproductID(product.id);
                    }}
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
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox massage="هیچ محصولی یافت نشد" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
      {isShowDetailModal && (
        <DetailsModal>
          <div className="details-modal-container">
            <div className="details-modal">
              <img src={mainproduct.img} alt="buttle" />
              <table className="details-table">
                <tr>
                  <th>نام:</th>
                  <td>{mainproduct.title}</td>
                </tr>
                <tr>
                  <th>میزان محبوبیت:</th>
                  <td>{mainproduct.popularity}</td>
                </tr>
                <tr>
                  <th>رنگ بندی:</th>
                  <td>{mainproduct.colors}</td>
                </tr>
                <tr>
                  <th>میزان فروش:</th>
                  <td>{mainproduct.sale}</td>
                </tr>
              </table>
            </div>
            <button
              className="details-close-btn"
              onClick={() => closeModalDetails()}
            >
              بستن
            </button>
          </div>
        </DetailsModal>
      )}
      {isShowEditModal && <EditModal editAction={editModals} />}
    </>
  );
}
