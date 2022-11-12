import React from "react";
import Errorbox from "../Errorbox/Errorbox";
import AddNewProducts from "../AddNewProducts/AddNewProducts";
import ProductsTable from "../ProductsTable/ProductsTable";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Products() {
  return (
    <div>
      <AddNewProducts />
      <ProductsTable />
      {/* <Errorbox massage="هیچ محصولی یافت نشد" /> */}
    </div>
  );
}
