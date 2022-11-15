import React, { useState, useEffect } from "react";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import Errorbox from "../Errorbox/Errorbox";
import "./Users.css";

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setisShowDetailModal] = useState(false);
  const [isShowEditModal, setisShowEditModal] = useState(false);
  const [mainUser, setMainUser] = useState({});
  const [userID, setUserID] = useState(null);
  const [firsnameUser, setFirsnameUser] = useState("");
  const [lastnameUser, setLastnameUser] = useState("");
  const [usernameUser, setUsernameUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const [cityUser, setCityUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [addressUser, setAddressUser] = useState("");
  const [scoreUser, setScoreUser] = useState("");
  const [buyUser, setBuyUser] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch("http://localhost:8000/api/users/")
      .then((res) => res.json())
      .then((users) => setAllUsers(users));
  };
  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };
  const removeUser = () => {
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        setIsShowDeleteModal(false);
        getAllUsers();
      });
  };

  const editModals = (e) => {
    e.preventDefault();
    const userNewInfos = {
      firsname: firsnameUser,
      lastname: lastnameUser,
      username: usernameUser,
      password: passwordUser,
      phone: phoneUser,
      city: cityUser,
      email: emailUser,
      address: addressUser,
      score: scoreUser,
      buy: buyUser,
    };
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        setisShowEditModal(false);
        getAllUsers();
      });
  };
  const closeModalDetails = () => {
    setisShowDetailModal(false);
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
                  <button
                    className="table-btns"
                    onClick={() => {
                      setisShowDetailModal(true);
                      setMainUser(user);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="table-btns"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setUserID(user.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="table-btns"
                    onClick={() => {
                      setisShowEditModal(true);
                      setUserID(user.id);
                      setFirsnameUser(user.firsname);
                      setLastnameUser(user.lastname);
                      setUsernameUser(user.username);
                      setPasswordUser(user.password);
                      setPhoneUser(user.phone);
                      setCityUser(user.city);
                      setEmailUser(user.email);
                      setAddressUser(user.address);
                      setScoreUser(user.score);
                      setBuyUser(user.buy);
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
        <Errorbox massage="هیچ کاربری یافت نشد" />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          cancelAction={deleteModalCancelAction}
          submitAction={removeUser}
        />
      )}
      {isShowDetailModal && (
        <DetailsModal>
          <div className="details-modal-container">
            <div className="details-modal">
              <div>
                <div className="details-modal-users">نام و نام خانوادگی :  {mainUser.firsname} {mainUser.lastname}</div>
                <div className="details-modal-users">شهر : {mainUser.city}</div>
                <div className="details-modal-users">
                  آدرس: {mainUser.address}
                </div>
                <div className="details-modal-users">
                  امتیاز کاربر: {mainUser.score}
                </div>
                <div className="details-modal-users">
                  میزان خرید: {mainUser.buy}
                </div>
              </div>
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
            <form action="#" className="form-new-users">
              <div className="edit-users-form-group">
                <label className="lable-input">نام</label>
                <input
                  type="text"
                  placeholder="نام جدید را وارد کنید"
                  value={firsnameUser}
                  onChange={(e) => setFirsnameUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">نام خانوادگی</label>

                <input
                  type="text"
                  placeholder="نام خانوادگی جدید را وارد کنید"
                  value={lastnameUser}
                  onChange={(e) => setLastnameUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">نام کاربری</label>

                <input
                  type="text"
                  placeholder="نام کاربری را وارد کنید"
                  value={usernameUser}
                  onChange={(e) => setUsernameUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">رمز عبور</label>

                <input
                  type="text"
                  placeholder="رمز عبور جدید را وارد کنید"
                  value={passwordUser}
                  onChange={(e) => setPasswordUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">شماره تماس</label>

                <input
                  type="text"
                  placeholder="شماره تماس جدید را وارد کنید"
                  value={phoneUser}
                  onChange={(e) => setPhoneUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">شهر</label>

                <input
                  type="text"
                  placeholder="شهر جدید را وارد کنید"
                  value={cityUser}
                  onChange={(e) => setCityUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">ایمیل</label>

                <input
                  type="text"
                  placeholder="ایمیل جدید را وارد کنید"
                  value={emailUser}
                  onChange={(e) => setEmailUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">آدرس</label>

                <input
                  type="text"
                  placeholder="آدرس جدید را وارد کنید"
                  value={addressUser}
                  onChange={(e) => setAddressUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">امتیاز کاربر</label>

                <input
                  type="text"
                  placeholder="امتیاز کاربر"
                  value={scoreUser}
                  onChange={(e) => setScoreUser(e.target.value)}
                />
              </div>
              <div className="edit-users-form-group">
                <label className="lable-input">میزان خرید کاربر</label>

                <input
                  type="text"
                  placeholder="میزان خرید کاربر"
                  value={buyUser}
                  onChange={(e) => setBuyUser(e.target.value)}
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
    </div>
  );
}
