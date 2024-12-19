// Task 1
let fruits = ['apple', 'banana', 'orange'];

fruits.push('grape');
console.log('After push:', fruits); 

fruits.pop();
console.log('After pop:', fruits);

// Task 2
let numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b);
console.log('Sorted numbers:', numbers);

// Task 3
let doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers); 

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers); 

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum); 
