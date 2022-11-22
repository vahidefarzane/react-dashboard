import React, { useState, useEffect } from "react";
import Errorbox from "../Errorbox/Errorbox";

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    fetch("http://localhost:8000/api/orders/")
      .then((res) => res.json())
      .then((orders) => setAllOrders(orders));
  };
  return (
    <div className="users-wraper">
      {allOrders.length ? (
        <table>
          <thead>
            <tr className="table-heading-row">
              <th>نام کاربر</th>
              <th>نام محصول</th>
              <th>تعداد سفارش</th>
              <th>زمان سفارش</th>
              <th>قیمت محصول</th>
              <th>(درصد)میزان تخفیف</th>
              <th>قیمت نهایی</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr key={order.id} className="table-body-row">
                <td>{order.userID}</td>
                <td>{order.productID}</td>
                <td>{order.count}</td>
                <td>{order.date} - {order.hour}</td>
                <td>{order.price}</td>
                <td>{order.off}</td>
                <td>{order.price-((order.price * order.off)/100)}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox massage="هیچ سفارشی یافت نشد" />
      )}
    </div>
  );
}
