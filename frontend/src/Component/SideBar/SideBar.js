import React from "react";
import "./SideBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <Link to="/products">
            <AiOutlineHome class="sidebar-icon" />
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FiShoppingCart class="sidebar-icon" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <BiCommentDetail class="sidebar-icon" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FiUsers class="sidebar-icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <BsBag class="sidebar-icon" />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="/offs">
            <AiOutlineDollarCircle class="sidebar-icon" />
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
}
