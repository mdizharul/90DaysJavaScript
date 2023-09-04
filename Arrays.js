//1.Adding Elements
const numbers = [3, 4];

// end
numbers.push(5, 6);

//beginning
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, "A");
console.log(numbers);

//2.Finding Elements (primitives)
const number = [1, 2, 3, 4, 1, 5, 6];

let a = number.indexOf(1); //return elements from beginning,
let b = number.indexOf("1"); // if element not found at index return -1
console.log(b);
let c = number.indexOf(1, 2); //it will start searching from second index //output:4
console.log(c);

let d = number.lastIndexOf(1); //it will search from last index //output:4
console.log(d);

let e = numbers.includes(5); //return boolean
console.log(e);

//----------------------------------------------------------------

//3.finding elements (Reference types)

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// const course = courses.find(function(course) {return course.name === 'a';});
// console.log(course);

//Arrow function
const course = courses.find((course) => course.name === "b"); //If you don't have any parameters, you have to pass an empty parenthesis.
console.log(course);

//----------------------------------------------------------------

//4.Removing elements

//End
const last = numbers.pop(); // will remove last element in an array and return it
console.log(last);

//Beginnig
const first = numbers.shift();
console.log(first);
`remove first element in an array and return it`;

//Middle
const Middle = numbers.splice(2, 2);
`remove middle element(index of that element , number of elements to delete)`;
console.log(Middle);

//----------------------------------------------------------------

//5. Emptying an Array
//`emptying array`

// `11.Joining Arrays`
`This concept is used in URL Slug`;

const num = [1, 2, -1, 3, 4, 5, 6, 7, 8];
const joined = num.join(" ");
console.log(joined);

const msg = "This is my first message";
const parts = msg.split(" "); // fn+F2 to rename everywhere in vs Code
console.log(parts);

const combined = parts.join("-");
console.log(combined);

// `12.Sorting Arrays`
`sort() and reverse() method are used to reverse the numbers
 but to reverse objects we use different way`;

const coursess = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
];

coursess.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a===b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1; // multi cursor editing ctlr + d
  if (nameA > nameB) return 1;
  return 0;
});
console.log(coursess);

//13. Testing elements of an Array
`some() and every() methods are used for this`;

//const n = [1, 2, -1, 3, 4, 5, 6, 7, 8, 9];

const allPositive = num.every(function (value) {
  return value >= 0;
});

console.log(allPositive); // false
`However if it encounters any negative value it stops and return false`;

const anyPositive = num.some(function (value) {
  return value >= 0;
});

console.log(anyPositive); // true

//14. Filtering an Array on  search criteria
// `It return another Array where filtered values are returned`
`const filtered= n.filter(function (value) {
  return value>=0;`;

`We can make this code more efficient by using arrow functions`;
const filtered = num.filter(n => n >= 0);
console.log(filtered);

//15. Mapping an Array

`Using this we can map an array into something else`;

`we can pass a function or an arrow function
const items=filtered.map(n =>{
    const obj = {value:n};
    return obj;
we mapped each number to an object with a value property. 
this is useful when building real world applications
also we can make this code more readable by :
const items = filtered.map(n => {
  return {value:n};
earlier we read that if we have a single line of code we can remove return keyword
const items = filtered.map((n) => {value: n});
we get undefined array values, becoz a curly braces in an arrow function represents a code block
so the javascript engine tries to parse this arrow function, it think here we are defining
a code block in opposed to an object to return. so if you are returning an object
you need to put that object in parentheses`;

`const items = filtered.map(n => ({value: n}) )`; 

// chaining the Map method

// Instead of storing THE RESULT IN FILTERED CONSTANT WE CAN REMOVE THAT, see line 126, 140 and 143

const items=num
  .filter(n => n >= 0)
  .map(n => ({value: n})) // this map method is returning a new array, so again we can call filter method to return a value
  .filter(obj => obj.value>1)
  .map(obj => obj.value); // again we get an array of numbers

console.log(items);


//16. Reducing an Array
 `lets think of adding all the elemts of the array , this is similar to toal cost of all the items in a shopping cart
 const num = [1, 2, -1, 3, 4, 5, 6, 7, 8];
 let sum = 0;
 for(let n of num) {
   sum+=n;
 }
 console.log(sum);`;


// we have a better solution which is reduce () method
// it takes a callback function and takes two parameters:accumulator aand currentValue
`const sum=num.reduce((accumulator, currentValue) =>{
  return accumulator+currentValue;
},0);
console.log(sum);`

`const numbers = [1,-1,2,3];
a=0 , c= 1 => a=1
a=1, c= -1 => a=0
a=0, c= 2 => a=2
a=2, c= 3 => a=5

a=1, c=-1 => a=0
a=0, c=2 => a=2
a=2, c= 3 => a=5
here 0  in line 179 is initialized value or stating value of accumulator set to zeo.
but we can also remove that , answer will be same. Also there is a single line of code in return so we can remove that too`;

const sum=num.reduce(
  (accumulator, currentValue) =>accumulator + currentValue
);
console.log(sum);