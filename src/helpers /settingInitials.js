const initialS1 = () => {
  return localStorage.getItem(localStorage.getItem("p_1"));
};

const initialS2 = () => {
  return localStorage.getItem(localStorage.getItem("p_2"));
};

export default initialS1;
export { initialS2 };
