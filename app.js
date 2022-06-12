// ! CLASSIC SOLUTION, ASAP TO BE REPLACED BY CAPTURING SOLUTION

const container = document.querySelector(".container");
const uppText = document.querySelector(".upp-text");
const downText = document.querySelector(".down-text");
const ac = document.querySelector(".ac");
const modulus = document.querySelector(".modulus");
const divide = document.querySelector(".division");
const number7 = document.querySelector(".number7");
const number8 = document.querySelector(".number8");
const number9 = document.querySelector(".number9");
const multiply = document.querySelector(".multiply");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const number6 = document.querySelector(".number6");
const minus = document.querySelector(".minus");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const plus = document.querySelector(".plus");
const number0 = document.querySelector(".number0");
const equal = document.querySelector(".equal");
const point = document.querySelector(".point");
const root = document.querySelector(".root");
const sound = document.querySelector(".sound");

ac.addEventListener("click", () => {
  uppText.textContent = "";
  downText.textContent = "";
  sound.play();
  sound.currentTime = 0;
});

number1.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "1";
    downText.textContent = "";
  } else {
    downText.textContent += "1";
  }
});
number2.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "2";
    downText.textContent = "";
  } else {
    downText.textContent += "2";
  }
});
number3.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "3";
    downText.textContent = "";
  } else {
    downText.textContent += "3";
  }
});
number4.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "4";
    downText.textContent = "";
  } else {
    downText.textContent += "4";
  }
});
number5.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "5";
    downText.textContent = "";
  } else {
    downText.textContent += "5";
  }
});
number6.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "6";
    downText.textContent = "";
  } else {
    downText.textContent += "6";
  }
});
number7.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "7";
    downText.textContent = "";
  } else {
    downText.textContent += "7";
  }
});
number8.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "8";
    downText.textContent = "";
  } else {
    downText.textContent += "8";
  }
});
number9.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent.length == 0 && uppText.textContent.length > 0) {
    uppText.textContent += "9";
    downText.textContent = "";
  } else {
    downText.textContent += "9";
  }
});
number0.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  if (downText.textContent == "") {
    downText.textContent = "";
  } else {
    downText.textContent += "0";
  }
});
point.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  downText.textContent += ".";

  let counter = 0;
  let str = downText.textContent;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      counter++;

      if (counter > 1) {
        downText.textContent = str.slice(0, i) + str.slice(i + 1);
      }
    }
  }
});

function opCheck(operator) {
  if (downText.textContent.includes(operator)) {
    alert("You can't use the same operator twice");
    downText.textContent = downText.textContent.slice(
      0,
      downText.textContent.length - 1
    );
  }
}

// ? MINUSS
minus.addEventListener("click", () => {
  sound.play();
  opCheck("-");
  sound.currentTime = 0;

  if (downText.textContent.length == 0) {
    alert("First number is required");
  } else {
    downText.textContent += "-";
  }
});

// ? PLUSSS
plus.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  opCheck("+");
  if (downText.textContent.length == 0) {
    alert("First number is required");
  } else {
    downText.textContent += "+";
  }
});

// ? MULTIPLYY
multiply.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  opCheck("*");
  if (downText.textContent.length == 0) {
    alert("First number is required");
  } else {
    downText.textContent += "*";
  }
});
// ? DIVIDEE
divide.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  opCheck("/");
  if (downText.textContent.length == 0) {
    alert("First number is required");
  } else {
    downText.textContent += "/";
  }
});

// ? YÜZDE HESAPLAMA;
modulus.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;
  opCheck("%");
  downText.textContent = eval((downText.textContent += "/100"));
  uppText.textContent = "";
});
// ? karakök hesaplama
root.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;

  let x = Math.sqrt(parseInt(downText.textContent));
  if (x.toString().length > 5) {
    x = x.toFixed(2);
  }

  downText.textContent = x;
  uppText.textContent = "";
});

equal.addEventListener("click", () => {
  sound.play();
  sound.currentTime = 0;

  uppText.textContent = eval(downText.textContent).toFixed(0);
  downText.textContent = "";

  downText.textContent = eval(uppText.textContent).toFixed(0);
});
