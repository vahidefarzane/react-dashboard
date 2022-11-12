import React from "react";
import "./AddNewProducts.css";
import {BsCursorText} from 'react-icons/bs'
import {FiHeart} from 'react-icons/fi'
import {BiDollarCircle} from 'react-icons/bi'
import {BsBagCheck} from 'react-icons/bs'
import {TbNumbers} from 'react-icons/tb'
import {MdOutlineAddPhotoAlternate} from 'react-icons/md'
import {SiFuturelearn} from 'react-icons/si'


export default function AddNewProducts() {
  return (
    <div className="product-container">
      <h1 className="product-title">افزودن محصول جدید</h1>
      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
          <BsCursorText className="add-products-icon"/>
            <input type="text" placeholder="اسم محصول را بنویسید" />
          </div>
          <div className="add-products-form-group">
            <BsBagCheck className="add-products-icon"/>
            <input type="text" placeholder="موجودی محصول را بنویسید" />
          </div>
          <div className="add-products-form-group">
          <FiHeart className="add-products-icon"/>
            <input type="text" placeholder="میزان محبوبیت محصول را بنویسید" />
          </div>
          <div className="add-products-form-group">
          <TbNumbers className="add-products-icon"/>
            <input type="text" placeholder="تعداد رنگ بندی محصول را بنویسید" />
          </div>
          <div className="add-products-form-group">
          <BiDollarCircle className="add-products-icon"/>
            <input type="text" placeholder="قیمت محصول را بنویسید" />
          </div>
          <div className="add-products-form-group">
          <MdOutlineAddPhotoAlternate className="add-products-icon"/>
            <input type="text" placeholder="آدرس عکس محصول را بنویسید" />
          </div>
          <div className="add-products-form-group">
            <SiFuturelearn className="add-products-icon"/>
            <input type="text" placeholder="میزان فروش محصول را بنویسید" />
          </div>
        </div>
        <button className="add-products-submit">ثبت محصول</button>
      </form>
    </div>
  );
}
