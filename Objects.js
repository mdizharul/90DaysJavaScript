//Basic Example: we are drawing diffrent kind of shapes(circle, square, etc)

// Objects are the collection of key-value pairs

// OOP style of programming


//circle.draw(); //Method


//1. Factory Functions
// we create a new function called createCircle and we move the code into it.
// function createCircle(){
//   const circle = {
//     radius : 1,
//     coOrdinates : {
//       x :1, 
//       y :1
//     },
//     isVisible : true,
//     draw : function(){
//       console.log("Drawing circle");
//     }
//   }; 
// }

// improving the code & removing fields to understanding and simplicity
// function createCircle(radius){
//   return {
//     radius : radius, // if key and values are same  we can skip value
//     draw : function(){
//       console.log("Drawing circle");
//     }
//   };  
// }

function createCircle(radius){
  return {
    radius, // if key and values are same  we can skip value
    draw() {
      console.log("Drawing circle");
    }
  }; 
}

const circle=createCircle(7);
console.log(circle);

const circle2=createCircle(14);
console.log(circle2);
// ----------------------------------------------------------------
//2. Constructor function
// When naming constructor function we should use Pascal Notation instead of camel notation
// Pascal notation : OneTwoThree(First letter sould be capitalized)

function Circle(radius){
  this.radius=radius;
  this.draw = function(){
    console.log('Drawing constructor Circle');
  }
}
const another = new Circle(21);
console.log(circle);

//----------------------------------------------------------------

//3. Dynamic nature of objects
 const c = {
  radius: 28,
 };
 c.color='red';
 c.draw = function(){};
//  delete c.color;
//  delete c.draw;
 console.log(c);
//----------------------------------------------------------------

 //4.Constructor properties

// In javascript functions are objects
// let x = 10;
// let y=x;
// x=20;

let x = {value : 10};
let y= x;

x.value = 20;

// primitives are value type and are copied by  their values whereas 
// Objects are reference type and are copied by their refrences(memory location).

//8. Enumerating Properties of an Object

const square = {
  side : 14,
  Draw(){
    console.log("square");
  }
};

for(let key in square)
console.log(key,square[key]); 
//for-of loop can only be used with Arrays and Maps
// however we have Object.keys(square) - with this we can get all the keys in square object
// and this will return an Array , and since Arrays are iterable we can use 
// for- of loop to iterate them.

for(let key of Object.keys(square))
console.log(key,square[key]); //for-of loop


// we have another Object.entries which return key-value pairs as an array
for(let entry of Object.entries(square))
console.log(entry);

//with in operator we check if the given property exist in the given object
if('side' in square) console.log('Yes');