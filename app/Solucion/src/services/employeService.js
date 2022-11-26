export const getEmployeTask = async (id = "63815bf0c3d090615ef9249b") => {
  return await fetch(`http://localhost:3001/api/workingtask/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
