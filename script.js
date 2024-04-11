// Write a recursive function to calculate the factorial of a number.

const factorial=(num)=>{

    if(num<2){
        return 1
    }
    return num* factorial(num-1)
}

console.log(factorial(5))

//  Write a recursive function to find the sum of digits of a number.


const sumOfDigits = (num) => {
  if(num < 10){
    return num
  } 
 
    return (num % 10)+sumOfDigits(Math.floor(num/10))
 
}

console.log(sumOfDigits(123));


const fibonacci=()=>{

}
fibonacci()