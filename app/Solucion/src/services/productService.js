export const getProducts = async () => {
  return await fetch("http://localhost:3001/api/product")
    .then((res) => res.json())
    .then((data) => {
      console.log("PRODUCTS: ", data);
      return data;
    });
};
