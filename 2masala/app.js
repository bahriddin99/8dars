let numbers = prompt("Xoxlagan raqamingizni kiriting?")
let str = String(numbers)
let number = "";

for(let i = str.length-1; i >= 0; i--){
    number += str[i]
}
console.log(number);

