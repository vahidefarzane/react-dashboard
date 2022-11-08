import React from "react";
import "./ProductsTable.css";

export default function ProductsTable() {
  return (
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
          <button className="products-table-btn">حذف</button>
          <button className="products-table-btn">ویرایش</button>
        </td>
      </tr>
      <tr className="products-table-tr">
        <td>
          <img
            src="/img/Headphone.jpeg"
            alt="Headphone"
            className="products-table-img"
          />
        </td>
        <td>هدفون</td>
        <td>200,000 تومان</td>
        <td>2</td>
        <td>
          <button className="products-table-btn">جزییات</button>
          <button className="products-table-btn">حذف</button>
          <button className="products-table-btn">ویرایش</button>
        </td>
      </tr>
      <tr className="products-table-tr">
        <td>
          <img
            src="/img/kard.jpg"
            alt="Headphone"
            className="products-table-img"
          />
        </td>
        <td>چاقو</td>
        <td>300,000 تومان</td>
        <td>18</td>
        <td>
          <button className="products-table-btn">جزییات</button>
          <button className="products-table-btn">حذف</button>
          <button className="products-table-btn">ویرایش</button>
        </td>
      </tr>
      <tr className="products-table-tr">
        <td>
          <img
            src="/img/notebook.jpg"
            alt="Headphone"
            className="products-table-img"
          />
        </td>
        <td>دفترچه</td>
        <td>40,000 تومان</td>
        <td>32</td>
        <td>
          <button className="products-table-btn">جزییات</button>
          <button className="products-table-btn">حذف</button>
          <button className="products-table-btn">ویرایش</button>
        </td>
      </tr>
    </table>
  );
}
