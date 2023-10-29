// raqamlar yig'indisini toping

let inputNumber = prompt("Sonni kiriting:"); 
let sum = 0;

while (inputNumber > 0 || sum > 9) {
  if (inputNumber === 0) {
    inputNumber = sum;
    sum = 0;
  }

  sum += inputNumber % 10;
  inputNumber = Math.floor(inputNumber / 10);
}

console.log("Yig'indisi: " + sum);


