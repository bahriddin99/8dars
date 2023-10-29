let numbers = prompt("Biron so'z kiriting")
let Numbers = prompt("Boshqa so'z kiriting")
let sum = 0;

for(i = 0; i <= numbers.length; i++){
  if(numbers[i] === Numbers){
    sum++;
  }
}
console.log(Numbers + " "+  "harfi" + " " + sum+"marta ishlatilgan" );