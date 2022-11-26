import { useEffect, useState } from "react";

import { Header } from "../components";
import { getProducts } from "../services/productService";
import { Table } from "../components/Table";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setData(data));
  }, []);

  const columns = [
    { name: "Image", displayName: "Image" },
    { name: "Name", displayName: "Name" },
    { name: "consumers", displayName: "Consumer Name" },
    { name: "totalAmount", displayName: "Total Amount" },
    { name: "Status", displayName: "Status" },
    { name: "id", displayName: "Id" },
    { name: "Location", displayName: "Location" },
  ];

  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="Page" title="Product" />
      <Table columns={columns} rows={data} />
    </div>
  );
};

export default Products;
