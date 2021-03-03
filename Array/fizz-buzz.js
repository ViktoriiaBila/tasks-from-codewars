function fizzbuzz(n){
  let array = [];
  for (let i = 1; i <= n; i++){
    if ((i % 3 === 0) && (i % 5 === 0)) array[i-1] = "FizzBuzz";
    else if (i % 5 === 0) array[i-1] = "Buzz";
    else if (i % 3 === 0) array[i-1] = "Fizz";
    else array[i-1] = i;
  }
  return array;
}
