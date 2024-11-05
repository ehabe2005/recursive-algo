//ticket pricing
function findPrice (age){
    age = Number(age);
  if(age <= 12){
      return "$10";
  }
  else if(age >= 13 && age <= 17){
      return "$15";
  }

  else if(age >= 18){
      return "$20";
  }
  else {
      return "Invalid age";
  }
}
console.log(findPrice(17)); 


//leap year
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "It's a leap year!!";
    } 
    else {
        return "It's not a leap year";
    }
}

console.log(leapYear(2000));




  //fibonacci
           
  function fibonacci(fib) {
    if (fib <= 0) return 0; 
    if (fib === 1) return 1; 

    let a = 0; 
    let b = 1; 

    for (let i = 0; i < fib; i++) {
        let calc = a + b; 
        a = b; 
        b = calc; 
    }

    return b; 
}

console.log(fibonacci(7)); 