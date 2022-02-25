function fizzBuzz(num) {
for(let i = 1; i <= num; i++) {
        if(i % 2 === 0 && i % 3 === 0) console.log("Fizz Buzz");
         /* if the number is divisible by 2 or 3, display Fizz Buzz, must be checked first */
         else if(i % 3 === 0) console.log("Buzz"); /* then check if divisible by 3 to print Buzz */
         else if(i % 2 === 0) console.log("Fizz"); /* then check if num is divisible by 2 with 0 remainder to print Fizz */
         else console.log(i); /* not divisible by 2 or 3 */
    }
}

fizzBuzz(100);