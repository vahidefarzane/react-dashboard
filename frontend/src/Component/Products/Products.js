import React, { useState, useEffect } from "react";
import AddNewProducts from "../AddNewProducts/AddNewProducts";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/",{
      method:'GET'
    })
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  return (
    <div className="container">
      <AddNewProducts getAllProducts={getAllProducts} />
      <ProductsTable
        allProducts={allProducts}
        getAllProducts={getAllProducts}
      />
    </div>
  );
}
