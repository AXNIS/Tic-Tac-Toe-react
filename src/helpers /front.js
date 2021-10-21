const saveData = () => {
  let p_1, p_2;

  p_1 = document.getElementById("p_1").value;
  p_2 = document.getElementById("p_2").value;

  localStorage.setItem("p_1", p_1);
  localStorage.setItem("p_2", p_2);

  let idx = localStorage.getItem(p_1);
  if (!idx) {
    localStorage.setItem(p_1, 0);
  }

  idx = localStorage.getItem(p_2);
  if (!idx) {
    localStorage.setItem(p_2, 0);
  }
};

export default saveData;
