// 1. Array from Range

const numbers = arrayFromRange(-4, 4);
console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}


//2. check if element in present within given Array

//my solution
`function includes(array, element) {
  for(let i=0; i<array.length; i++)
  if(array[i] === element)
  return true;
}
const array = [1,2,3,4,5,6,7,8,9];

console.log(array.includes(-1));`

//Mosh Solution
function  includes(array, searchElement) {
  for(let element of array) 
  if(element === searchElement)
    return true;
  return false;
}
const array = [1,2,3,4,5,6,7];
console.log(includes(array, 5));


// 3. Return an array or elements except that element which you have selected

// const array = [1,2,3,4,5,6,7];
function except(array, excluded) {
  const outputt = [];
  for(let element of array)
    if(!excluded.includes(element))
    outputt.push(element);
  return outputt;
}
const outputt = except(array,[1,2 ,3,4]);
console.log(outputt); // [5, 6, 7]


