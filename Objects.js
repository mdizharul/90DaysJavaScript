//Basic Example: we are drawing diffrent kind of shapes(circle, square, etc)

// Objects are the collection of key-value pairs

// OOP style of programming


//circle.draw(); //Method


// Factory Functions
// we create a new function called createCircle and we move the code into it.
function createCircle(){
  const circle = {
    radius : 1,
    coOrdinates : {
      x :1, 
      y :1
    },
    isVisible : true,
    draw : function(){
      console.log("Drawing circle");
    }
  };
  
}