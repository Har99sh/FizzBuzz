function fizzbuzz(n){
  if (n === 0){
    return 0;
  }else if (n%15 === 0 || (n).toString().includes(15)){
    return "fizzbuzz";
  }else if (n%5 === 0 ){
    return "buzz";
  } else if (n%3 === 0 || (n).toString().includes(3) ){
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

// function numberChecker(n){

//   if ((n).toString().includes(15)){
//     return "fizzBuzz";
//     } else if ((n).toString().includes(3)) {
//           return "fizz";
//       }
// }
// fizzBuzz();


// function fizzBuzzPersonal(multipleOne, multipleTwo, rangeOfNumber, startNumber){
  
//   for (let i = startNumber; i <= rangeOfNumber; i++){
//     let multOfFirst = (i % multipleOne); 
//     let multOfSecond = (i % multipleTwo);
//     let multOfBoth = (i % (multipleOne * multipleTwo));
//     if (multOfBoth === 0 ){
//       console.log(i + " fizzBuzz");
//     } else if (multOfSecond === 0){
//           console.log(i + " buzz");
//       } else if (multOfFirst === 0){
//             console.log(i + " fizz");
//         }
//   }

//}

//fizzBuzzPersonal(3,5,100, 1)

// fizzBuzzPersonal(2, 7, 200, 1);



//gotta make sure when multofboth it dont print multofthree or five
//% checks remainder ex.: if 3%3 = 0; prints fizz
