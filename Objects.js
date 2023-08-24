//Basic Example: we are drawing diffrent kind of shapes(circle, square, etc)

// Objects are the collection of key-value pairs

// OOP style of programming


//circle.draw(); //Method


// Factory Functions
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

const circle1=createCircle(7);
console.log(circle1);

const circle2=createCircle(14);
console.log(circle2);