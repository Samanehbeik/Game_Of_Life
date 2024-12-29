function randomCreatGeneration() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      //   d = document.getElementById(i + "-" + j);
      if (arr1[i][j] == 1) {
        document.getElementById(i + "-" + j).style.backgroundColor = "red";
      }
    }
  }
}

function reset() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      document.getElementById(i + "-" + j).style.backgroundColor = " #f7eaea";
    }
  }
}

function start() {
    
  let arr2 = [];
  arr2=neighborsCount(arr1);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (arr2[i][j] == 1) {
            document.getElementById(i + "-" + j).style.backgroundColor = "red";
          }
          else{
            document.getElementById(i + "-" + j).style.backgroundColor = " #f7eaea";
          }
    }
  }
}
