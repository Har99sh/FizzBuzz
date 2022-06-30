function fizzbuzz(n){
  if (n === 0){
    return 0;
  }else if (n%15 === 0){
    return "fizzbuzz";
  }else if (n%5 === 0 ){
    return "buzz";
  } else if (n%3 === 0 ){
    return "fizz";
  } else if(isNaN(n)){
    return "error";
  } return n;
}

module.exports = fizzbuzz;


















function fizzBuzz(){
  
  for (let i = 1; i <101; i++){
    let checker = i;
    let three = 3;
    let five = 5;
    let multOfThree = (checker % three); 
    let multOfFive = (checker % five);
    let multOfBoth = (checker % (three * five))
    if (multOfThree === 0 && multOfBoth !== 0){
      console.log(i + " fizz");
    } else if (multOfFive === 0 && multOfBoth !== 0){
          console.log(i + " buzz")
      } else if (multOfBoth === 0){
        console.log(i + " fizzBuzz")
      }
}
}


// fizzBuzz();


function fizzBuzzPersonal(multipleOne, multipleTwo, rangeOfNumber, startNumber){
  
  for (let i = startNumber; i < rangeOfNumber; i++){
    let checker = i;
    let multOfFirst = (checker % multipleOne); 
    let multOfSecond = (checker % multipleTwo);
    let multOfBoth = (checker % (multipleOne * multipleTwo));
    if (multOfFirst === 0 && multOfBoth !== 0){
      console.log(i + " fizz");
    } else if (multOfSecond === 0 && multOfBoth !== 0){
          console.log(i + " buzz");
      } else if (multOfBoth === 0){
            console.log(i + " fizzBuzz");
        }
  }

}

// fizzBuzzPersonal(2, 7, 200, 1);



//gotta make sure when multofboth it dont print multofthree or five
//% checks remainder ex.: if 3%3 = 0; prints fizz
