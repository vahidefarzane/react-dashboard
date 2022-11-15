import React, { useState, useEffect } from "react";
import Errorbox from "../Errorbox/Errorbox";

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    fetch("http://localhost:8000/api/users/")
      .then((res) => res.json())
      .then((users) => setAllUsers(users));
  };
  return (
    <div className="container">
      {allUsers.length ? (
        <table>
          <thead>
            <tr className="table-heading-row">
              <th>نام و نام خانوادگی</th>
              <th>نام کاربری</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user.id} className="table-body-row">
                <td>
                  {user.firsname} - {user.lastname}
                </td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button className="table-btns">حذف</button>
                  <button className="table-btns">جزییات</button>
                  <button className="table-btns">ویرایش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox massage="هیچ کاربری یافت نشد" />
      )}
    </div>
  );
}
