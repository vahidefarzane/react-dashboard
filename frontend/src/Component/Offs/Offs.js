import React, { useState, useEffect } from "react";
import Errorbox from "../Errorbox/Errorbox";

export default function Offs() {
  const [allOffs, setAllOffs] = useState([]);
  useEffect(() => {
    getAllOffs();
  }, []);

  const getAllOffs = () => {
    fetch("http://localhost:8000/api/offs/")
      .then((res) => res.json())
      .then((offs) => {
        setAllOffs(offs);
        console.log(allOffs);
      });
  };

  return (
    <div className="container">
      {allOffs.length ? (
        <table>
          <thead>
            <tr className="table-heading-row">
              <th>محصول</th>
              <th>کد</th>
              <th>درصد</th>
              <th>ادمین</th>
              <th>تاریخ</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {allOffs.map((off) => (
              <tr key={off.id} className="table-body-row">
                <td>{off.productID}</td>
                <td>{off.code}</td>
                <td>{off.percent}</td>
                <td>{off.adminID}</td>
                <td>{off.date}</td>
                <td>
                  {off.isActive === 0 ? (
                    <button className="table-btns">منقضی</button>
                  ) : (
                    <button className="table-btns">فعال</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox massage="هیچ کامنتی یافت نشد" />
      )}
    </div>
  );
}
