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