// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.

type Values = [number, string, boolean, object];

function logValues(values: Values) {
  values.forEach((el) => console.log(`${JSON.stringify(el)} (${typeof el})`));
}

logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)
