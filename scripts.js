const rows = 65;
const cols = 139;

let arr1 = Array.from({ length: rows }, () => Array(cols).fill(0));

for (let i = 0; i < rows; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < cols; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("id", i + "-" + j);
    row.appendChild(box);
  }

  document.getElementById("planeContainer").appendChild(row);
}

//Intialization

const randomBoolean = () => Math.random() >= 0.8;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    arr1[i][j] = Number(randomBoolean()); // true
    document.getElementById(i + "-" + j).innerHTML = arr1[i][j];
    document.getElementById(i + "-" + j).setAttribute('data-is-live', arr1[i][j]);
  }
}

//count the neighbors
function neighborsCount(arr) {
  let arr3 = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0;
      i - 1 >= 0 && j - 1 >= 0 && arr[i - 1][j - 1] == 1 ? count++ : "";
      i - 1 >= 0 && arr[i - 1][j] == 1 ? count++ : "";
      i - 1 >= 0 && j + 1 < cols && arr[i - 1][j + 1] == 1 ? count++ : "";
      j - 1 >= 0 && arr[i][j - 1] == 1 ? count++ : "";
      j + 1 < cols && arr[i][j + 1] == 1 ? count++ : "";
      i + 1 < rows && j - 1 >= 0 && arr[i + 1][j - 1] == 1 ? count++ : "";
      i + 1 < rows && arr[i + 1][j] == 1 ? count++ : "";
      i + 1 < rows && j + 1 < cols && arr[i + 1][j + 1] == 1 ? count++ : "";
      count == 3 || count == 2 ? (arr3[i][j] = 1) : (arr3[i][j] = 0);
    }
  }
  return arr3
}
