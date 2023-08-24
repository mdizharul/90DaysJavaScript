// function greet() {
//   console.log('Hello world');
// }

// greet();

// function greet(firstName) {
//   console.log('Hello'+ ' '+ firstName);

// }

// greet('Izhar');

// function for doing a task
// function greet(firstName, lastName) { //parameter
//         console.log('Hello'+ ' '+ firstName + ' '+ lastName);
// }

// greet('izhar','Ansari'); //arguments


// // function to do calculation

// function square(number) { 
//   return number * number;
// }

// //let num= square(2);
// //console.log(num);

// console.log(square(2));


// function max(a, b) {
//   if (a > b) {
//     console.log('Maximum: ' + a);
//   } else {
//     console.log('Maximum: ' + b);
//   }
// }
// let number = max(44, 2);
// console.log(number);


//1. Max of two numbers
function max(a, b) {
  return (a > b) ? a : b;
}

let number = max(10,5); //
console.log('Max: '+number); //

//2. portrait or landscape
function isLandscape(width, height) {
  // return (width > height ) ? true : false; //we can also remove true: fasle
 return (width > height)
}

let size = isLandscape(400,50);
console.log(size); //

//3. FizzBuzz Algorithm

//  function fizzBuzz(input){
//   if(input%3===0){
//   return 'Fizz'}
// else if(input%5===0){ return 'Buzz'}
// else if(input%3===0) && (input%5===0) {return 'input'}
//  //else return console.log('Not a number')
//  }

//  let numb = fizzBuzz(5);
//  console.log(numb); //

function fizzBuzz(input) {
  if(typeof input !== number)
 return NaN
  if((input%3===0)&& (input%5===0)) return input
  if(input%3===0){
    return 'Fizz'}
    if(input %5===0)
    return 'Buzz'

}
let nums=fizzBuzz(7);
console.log(nums); //

//4. Demerit points for overspeeding
      //Speed limit = 70
      //every 5 km - 1 point
      //Math.floor(1.3)
      //12 points - license suspended
      checkSpeed(130);
      function checkSpeed(speed) {
      const speedLimit = 70;
      const kmPerPoint = 5;
  if(speed< speedLimit+ kmPerPoint)
  {
    console.log('Ok');
    return;
  }
 
  const points =Math.floor((speed-speedLimit)/kmPerPoint);
  if(points>=12)
    console.log('Lisence Suspended');
  else
    console.log('Points: ', points); //

}

// Even and odd number with text labels
showNumber(10);
function showNumber(limit) {
  for(let i = 0; i <= limit; i++) {
    // if(i%2===0) console.log(i, 'EVEN');
    // else console.log(i, 'ODD');

    const message = (i%2===0) ? 'EVEN' : 'ODD';
    console.log(i,message);
  }
}

//5. Count Truthy

// Falsy Values -> 0 , null, undefined, '' , falsy, false, NaN

const array = [0,null, undefined, '',2,3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count =0;
  for(let value of array)
  if(value)
  count++;
return count
}

//6. String Properties

const movies = {
  Title : "Matrix",
  ReleaseYear: 1998,
  Director : "Wachoski Brothers",
  Rating : "A"
};

function showProperties(obj){
  for(let key in obj)
      if (typeof obj[key] ==='string')
  console.log(key,obj[key]);

}
showProperties(movies);


//7.Sum of multiples within given limit
//Multiple of 3 : 3, 6, 9
// Multiples of 5 : 5, 10
//sum = 33

function sum(limit){
  let sum =0;

  for(let i=0;i<=limit;i++)
    if(i%3===0 || i%5===0)
      sum= sum +i;
  return sum;
}

console.log(sum(10));


//8. Grade of Students
//first it calculates avg grade, what grade this avg corrrspond to
// 0-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90- 99 : A
const marks =[80,80,70];
console.log(calculategrade(marks));

function calculategrade(marks){
 
  const average = calculateAverage(marks);
  if(average<60) return 'F';
  if(average<70) return 'D';
  if(average<80) return 'C';
  if(average<90) return 'B';
  return 'A';
}

function calculateAverage(Array){
  let summ =0;
  for(let value of Array)
  summ = summ + value;
return summ/Array.length;  
}

// 9. Star Pattern

showStar(5);

function showStar(rows){
  for(let i=1;i<=rows;i++){
    let pattern = '';
    for(let j=0;j<i;j++)
    pattern = pattern + '*';
  console.log(pattern);
  }
}


//10. Prime number

showPrimes(20);
console.log(showPrimes(10));

function showPrimes(limit){
  let n=0;
  
  for(let i=2;i<=limit;i++){
    if(i%n!==0)
    return i;
  console.log("Hello");

  }
}
