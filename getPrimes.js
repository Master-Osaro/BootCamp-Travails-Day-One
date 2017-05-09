let isPrime = (N)=> // This fuction confirms if numbers within a given range are prime numbers. Checks for the prime numbers
{
  for (let c = 2; c <= Math.sqrt(N); c++)
    if (N % c === 0 ) {
      return false;
    }
  else{
    return true;
  }
}
let getPrimes = (N)=> {
  let primeArray = [];  
  primeArray.push(2);// 2 and 3 are prime numbers
  primeArray.push(3);
   for (let i = 2; i != N; ++i)
     if (isPrime(i))
     {
       primeArray.push(i);
     }
  return primeArray;
}
getPrimes(5000);
