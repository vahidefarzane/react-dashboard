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
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

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
  const editModals = (e) => {
    e.preventDefault();
    const productNewInfos = {
      title: newProductTitle,
      price: newProductPrice,
      count: newProductCount,
      img: newProductImg,
      popularity: newProductPopularity,
      sale: newProductSale,
      colors: newProductColors,
    };
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productNewInfos),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        setisShowEditModal(false);
        getAllProducts();
      });
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
                    onClick={() => {
                      setisShowEditModal(true);
                      setproductID(product.id);
                      setNewProductTitle(product.title);
                      setNewProductCount(product.count);
                      setNewProductPrice(product.price);
                      setNewProductImg(product.img);
                      setNewProductPopularity(product.popularity);
                      setNewProductSale(product.sale);
                      setNewProductColors(product.colors);
                    }}
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
      {isShowEditModal && (
        <EditModal>
          <div className="edit-modal-container">
            <h1>اطلاعات جدید را وارد کنید</h1>
            <form action="#">
              <div className="edit-products-form-group">
                <label className="lable-input">اسم محصول</label>
                <input
                  type="text"
                  placeholder="اسم محصول را بنویسید"
                  value={newProductTitle}
                  onChange={(e) => setNewProductTitle(e.target.value)}
                />
              </div>
              <div className="edit-products-form-group">
                <label className="lable-input">موجودی محصول</label>

                <input
                  type="text"
                  placeholder="موجودی محصول را بنویسید"
                  value={newProductCount}
                  onChange={(e) => setNewProductCount(e.target.value)}
                />
              </div>
              <div className="edit-products-form-group">
                <label className="lable-input">میزان محبوبیت</label>

                <input
                  type="text"
                  placeholder="میزان محبوبیت محصول را بنویسید"
                  value={newProductPopularity}
                  onChange={(e) => setNewProductPopularity(e.target.value)}
                />
              </div>
              <div className="edit-products-form-group">
                <label className="lable-input">تعداد رنگ بندی</label>

                <input
                  type="text"
                  placeholder="تعداد رنگ بندی محصول را بنویسید"
                  value={newProductColors}
                  onChange={(e) => setNewProductColors(e.target.value)}
                />
              </div>
              <div className="edit-products-form-group">
                <label className="lable-input">قیمت محصول</label>

                <input
                  type="text"
                  placeholder="قیمت محصول را بنویسید"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                />
              </div>
              <div className="edit-products-form-group">
                <label className="lable-input">آدرس عکس محصول</label>

                <input
                  type="text"
                  placeholder="آدرس عکس محصول را بنویسید"
                  value={newProductImg}
                  onChange={(e) => setNewProductImg(e.target.value)}
                />
              </div>
              <div className="edit-products-form-group">
                <label className="lable-input">میزان فروش محصول</label>

                <input
                  type="text"
                  placeholder="میزان فروش محصول را بنویسید"
                  value={newProductSale}
                  onChange={(e) => setNewProductSale(e.target.value)}
                />
              </div>
              <button
                className="edit-products-btn"
                onClick={(e) => editModals(e)}
              >
                ثبت اطلاعات
              </button>
            </form>
          </div>
        </EditModal>
      )}
    </>
  );
}
