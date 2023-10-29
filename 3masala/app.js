
let numbers = prompt("Raqam kiring?")
let str = String(numbers)
for (let i = 0; i <= str; i++) {
  let result = i % 2 === 0 ? "juft" : "toq";
  console.log(i + "-" + result);
}