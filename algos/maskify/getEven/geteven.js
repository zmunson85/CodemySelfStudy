//n is for numbers in array
//return n as a key
//need to modulate the nums to get results
//filter each num for result and display all evens by using modulas opperation, 

function getEvenNumbers(numbersArray) {
    return numbersArray.filter((n => { return n % 2 == 0; }))
}
  // filter out the odd numbers


//other solutions//

/* function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(n){
    return n % 2 == 0;
  });
}


const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);


const getEvenNumbers = arr =>
  arr.filter(x => !(x & 1));
  

  function isEven(num){
  return num%2==0
}

function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  var filtered = numbersArray.filter(isEven);
  return filtered;
}



function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  var evenNums = numbersArray.filter(function(num) {
    return (num % 2) === 0;
  });

  return evenNums;
}



const getEvenNumbers = numbersArray => numbersArray.filter(a => a % 2 === 0);





function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  return numbersArray.filter(function(l){return l%2 == 0});
}



const getEvenNumbers = numbersArray =>
  numbersArray.filter(val => !(val&1));





function checkOdd(number) {
  if (number % 2 == 0)
    return number;
}

function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  const result = numbersArray.filter(checkOdd);

  console.log(result);

  return result;

}




  */