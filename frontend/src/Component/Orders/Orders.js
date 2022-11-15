import React,{useState,useEffect} from 'react'
import Errorbox from '../Errorbox/Errorbox'


export default function Orders() {
  const [allOrders,setAllOrders]=useState([])
  
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
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>نام کاربری</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map(order=>(
              <tr>
                <td>{order.firsname} - {order.lastname}</td>
                <td>{order.ordername}</td>
                <td>{order.password}</td>
                <td>{order.phone}</td>
                <td>{order.email}</td>
                <td>
                  <button>حذف</button>
                  <button>جزییات</button>
                  <button>ویرایش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
      :(
        
        <Errorbox massage="هیچ کاربری یافت نشد" />
      )}
    </div>
  );
}
