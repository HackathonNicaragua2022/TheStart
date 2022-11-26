export const getProducts = async () => {
  return await fetch("http://localhost:3001/api/product")
    .then((res) => res.json())
    .then((data) => {
      data = data.map((product) => {
        return (product = { ...product, consumers: product.consumers.Name });
      });

      console.log(data);
      return data;
    });
};
