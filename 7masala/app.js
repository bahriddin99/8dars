let word = prompt("So'zni kiriting:", ""); 
let reversedWord = "";

let i = word.length - 1;
while (i >= 0) {
  reversedWord += word[i];
  i--;
}

let isPalindrome = word.toLowerCase() === reversedWord.toLowerCase();

console.log(isPalindrome);
