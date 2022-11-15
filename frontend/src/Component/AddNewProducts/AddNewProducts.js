import React, { useState } from "react";
import "./AddNewProducts.css";
import { BsCursorText } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BiDollarCircle } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { TbNumbers } from "react-icons/tb";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";

export default function AddNewProducts({ getAllProducts }) {
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  const addNewProductObj = {
    title: productNewTitle,
    price: productNewPrice,
    count: productNewCount,
    img: productNewImg,
    popularity: productNewPopularity,
    sale: productNewSale,
    colors: productNewColors,
  };
  const addNewProduct = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/api/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewProductObj),
    })
      .then((response) => response.json)
      .then((result) => {
        console.log(result);
        getAllProducts();
        emptyInputs();
      });
  };
  const emptyInputs = () => {
    setProductNewTitle("");
    setProductNewCount("");
    setProductNewPrice("");
    setProductNewImg("");
    setProductNewPopularity("");
    setProductNewSale("");
    setProductNewColors("");
  };

  return (
    <div >
      <h1 className="product-title">افزودن محصول جدید</h1>
      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <BsCursorText className="add-products-icon" />
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              value={productNewTitle}
              onChange={(e) => setProductNewTitle(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <BsBagCheck className="add-products-icon" />
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              value={productNewCount}
              onChange={(e) => setProductNewCount(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <FiHeart className="add-products-icon" />
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              value={productNewPopularity}
              onChange={(e) => setProductNewPopularity(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <TbNumbers className="add-products-icon" />
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              value={productNewColors}
              onChange={(e) => setProductNewColors(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <BiDollarCircle className="add-products-icon" />
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              value={productNewPrice}
              onChange={(e) => setProductNewPrice(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <MdOutlineAddPhotoAlternate className="add-products-icon" />
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              value={productNewImg}
              onChange={(e) => setProductNewImg(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <SiFuturelearn className="add-products-icon" />
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              value={productNewSale}
              onChange={(e) => setProductNewSale(e.target.value)}
            />
          </div>
        </div>
        <button className="add-products-submit" onClick={addNewProduct}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
