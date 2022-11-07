import React from "react";
import "./SideBar.css";
import {AiOutlineHome} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BiCommentDetail} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {BsBag} from 'react-icons/bs'
import {AiOutlineDollarCircle} from 'react-icons/ai'


export default function SideBar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <a href="#">
            <AiOutlineHome class="sidebar-icon"/>
            صفحه اصلی</a>
        </li>
        <li>
          <a href="#">
           < FiShoppingCart class="sidebar-icon"/>
            محصولات</a>
        </li>
        <li>
          <a href="#">
            < BiCommentDetail class="sidebar-icon"/>
            کامنت ها</a>
        </li>
        <li>
          <a href="#">
            <FiUsers class="sidebar-icon"/>
            کاربران</a>
        </li>
        <li>
          <a href="#">
            <BsBag class="sidebar-icon"/>
            سفارشات</a>
        </li>
        <li>
          <a href="#">
            <AiOutlineDollarCircle class="sidebar-icon"/>
            تخفیف ها</a>
        </li>
      </ul>
    </div>
  );
}
