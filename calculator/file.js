let calculate = document.querySelector(".calculate");

let keydiv = document.querySelector(".keydiv");

keydiv.addEventListener("click", print);

function print(e) {
  let value = e.target.textContent;

  if (e.target.textContent == "=") {
    printresult();
  } else if (e.target.className == "keydiv") {
    calculate.textContent = "";
  } else if (e.target.innerText == "AC") {
    calculate.textContent = "";
  } else if (e.target.className == "btn" || "orangebtn" || "greybtn") {
    if (calculate.textContent == 0) {
      calculate.textContent = value;
    } else {
      calculate.textContent += value;
    }
  }
}

function add() {
  let str = calculate.innerText;
  let arr = str.split("+");
  let firstnum = Number(arr[0]);
  let secondnum = Number(arr[1]);

  return firstnum + secondnum;
}

function subtract() {
  let str = calculate.innerText;
  let arr = str.split("-");
  if(arr.length==2){
  let firstnum = Number(arr[0]);
  let secondnum = Number(arr[1]);
  return firstnum - secondnum;
  }
  else if(arr.length==3){
     let firstnum = Number(arr[1]);
     let secondnum = Number(arr[2]);
     return -firstnum - secondnum;
  }
}
function divide() {
  let str = calculate.innerText;
  let arr = str.split("/");
  let firstnum = Number(arr[0]);
  let secondnum = Number(arr[1]);
  return firstnum / secondnum;
}
function multiply() {
  let str = calculate.innerText;
  let arr = str.split("*");
  let firstnum = Number(arr[0]);
  let secondnum = Number(arr[1]);
  return firstnum * secondnum;
}
function percent() {
  let str = calculate.innerText;
  let arr = str.split("%");
  let firstnum = Number(arr[0]);
  let secondnum = Number(arr[1]);
  return (firstnum / 100) * secondnum;
}




function printresult() {
  let str = calculate.innerText;
  if (str.indexOf("+") != -1) {
    calculate.innerText = add();
  } else if (str.indexOf("-") != -1) {
    calculate.innerText = subtract();
  } else if (str.indexOf("/") != -1) {
    calculate.innerText = divide();
  } else if (str.indexOf("*") != -1) {
    calculate.innerText = multiply();
  } else if (str.indexOf("%") != -1) {
    calculate.innerText = percent();
  }
}
