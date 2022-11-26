export const getCustomer = async () => {
    return await fetch("http://localhost:3001/api/consumer")
      .then((res) => res.json())
      .then((data) => {
        data = data.map((customer) => {
          return (customer = { ...customer, products: customer.products.Name });
        });
  
        return data;
      });
  };