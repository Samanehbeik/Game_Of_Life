const rows = 70; 
const cols = 139; 


const arr_ListId = []; 
const arr_MinLocation = [];


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
 
