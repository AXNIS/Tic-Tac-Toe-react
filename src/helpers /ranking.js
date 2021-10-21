const leaderBoard = () => {
  const rank = document.getElementById("rank");
  rank.innerHTML = "";
  let localStorageArray = [];
  //let k = 0;
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) !== "p_1" && localStorage.key(i) !== "p_2") {
      let obj = {
        userName: localStorage.key(i),
        wins: parseInt(localStorage.getItem(localStorage.key(i))),
        //wins: "56",
      };
      localStorageArray.push(obj);
      //k++;
    }
  }

  let sortedArray = localStorageArray.sort((a, b) => {
    return b.wins - a.wins;
  });
  //return sortedArray;

  for (let i = 0; i < sortedArray.length; i++) {
    let idx = document.createElement("div");
    idx.className = `rows`;

    let sn = document.createElement("div");
    sn.className = "serialNumber";
    sn.innerHTML = `${i + 1}`;
    idx.appendChild(sn);

    let un = document.createElement("div");
    un.className = "user_name";
    un.innerHTML = `${sortedArray[i].userName}`;
    idx.appendChild(un);

    let pt = document.createElement("div");
    pt.className = "pts";
    pt.innerHTML = `${sortedArray[i].wins}`;
    idx.appendChild(pt);

    rank.appendChild(idx);
  }
};
export default leaderBoard;
