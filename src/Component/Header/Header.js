import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-right">
        <img src="/img/Farzane.jpeg" alt="Profile photo" />
        <div className="profile-bio">
          <h1>وحیده فرزانه</h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>
      <div className="header-left">
        <div className="header-searchbox">
          <input type="search" placeholder="جستجو کنید..." />
          <button className="btn-search">جستجو</button>
        </div>
        <button className="btn-alert">
          <AiOutlineBell />
        </button>
        <button className="btn-switch">
          <BsBrightnessHigh />
        </button>
      </div>
    </div>
  );
}
