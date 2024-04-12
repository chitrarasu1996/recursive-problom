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


// Write a recursive function to calculate the nth Fibonacci number.

const fibonacci=(n,prev1,prev2)=>{
if(n===0){
    return prev1+prev2
}
 return fibonacci(n-1,prev2,prev1+prev2)

}
console.log(fibonacci(5,0,1),"fib")

// Write a recursive function to reverse a string

const reverseTheStr=(n,str)=>{

    if(n===0){
        return ""
    }
 
return  str[n-1]+reverseTheStr(n-1,str)

}

let str="test"
let n=str.length
console.log(reverseTheStr(n,str))


// Write a recursive function to calculate the power of a number.

const powerOfNumber=(num,power)=>{
if(power===0){
    return 1
}

return (num)*powerOfNumber(num,power-1)

}
let num=3;
let powerOfNum=3
console.log(powerOfNumber(num,powerOfNum))