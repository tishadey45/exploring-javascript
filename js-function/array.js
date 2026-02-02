// function sumOfNumbers(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     console.log(number);
//     sum = sum + number;
//   }
//   return sum;
// }

// const numbs = [32, 23, 44, 22];
// const sum = sumOfNumbers(numbs);
// console.log("sum of number is", sum);

function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0);
    {
      console.log(number);
      evens.push(number);
    }
  }
  return evens;
}
const numbers = [25, 39, 35, 16];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are',evens);