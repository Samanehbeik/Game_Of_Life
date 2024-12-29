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
window.screenX
function reset() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      document.getElementById(i + "-" + j).style.backgroundColor = " #f7eaea";
    }
  }
}

function start() {
  //let arr2 = [];
  arr1 = neighborsCount(arr1);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr1[i][j] == 1) {
        document.getElementById(i + "-" + j).style.backgroundColor = "red";
      } else {
        document.getElementById(i + "-" + j).style.backgroundColor = " #f7eaea";
      }
    }
  }
}

let isRun = false;
let autoRun;
function autoStart() {
  if (isRun) {
    isRun = false;
    clearInterval(autoRun);
    return;
  }

  isRun = true;

  autoRun = setInterval(start, 500);

}

function factorial(n)
{
  if(n < 2)
    return 1;
  else
    return n * factorial(n - 1);
}
