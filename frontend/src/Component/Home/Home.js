import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };
  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul className="legend-container">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="legend-container">
            <div className="legend-svg"></div>
            <span className="legend-title">میزان فروش</span>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="chart-container">
      <h1>میزان فروش ماهانه</h1>
      <div className="chart-wraper">
        <BarChart width={900} height={350} data={allProducts}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="sale" fill="#82ca9d" barSize={30} />
          <XAxis dataKey="title" />
          {/* <YAxis /> */}
          <Tooltip wrapperStyle={{ width: 150, backgroundColor: "#ccc" }} />
          <Legend
            wrapperStyle={{
              width: 120,
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
            content={renderLegend}
          />
        </BarChart>
      </div>
    </div>
  );
}
