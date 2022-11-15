import React from "react";
import "./SideBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <NavLink to="/">
          <AiOutlineHome class="sidebar-icon" />
          صفحه اصلی
        </NavLink>

        <NavLink to="/products">
          <FiShoppingCart class="sidebar-icon" />
          محصولات
        </NavLink>

        <NavLink to="/comments">
          <BiCommentDetail class="sidebar-icon" />
          کامنت ها
        </NavLink>

        <NavLink to="/users">
          <FiUsers class="sidebar-icon" />
          کاربران
        </NavLink>

        <NavLink to="/orders">
          <BsBag class="sidebar-icon" />
          سفارشات
        </NavLink>

        <NavLink to="/offs">
          <AiOutlineDollarCircle class="sidebar-icon" />
          تخفیف ها
        </NavLink>
        <NavLink to="/admins">
          <AiOutlineDollarCircle class="sidebar-icon" />
          ادمین ها
        </NavLink>
      </ul>
    </div>
  );
}
