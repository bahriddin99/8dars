//  tup sonlarini topish


let numbers = prompt("Istalgan qaramingizni kiring?")
let number = true;

if(numbers.length <=1 ){
    number = false;
}else{
    for(let i = 2; i <= numbers.length; i++){
        if(numbers % i === 0){
            number = false;
            break;
        }
    }
}
if(number){
    console.log(numbers + "tub");
}else{
    console.log(numbers + "tub emas");
}