const numbers = [1,2,3,4,5,6,7,8,9];

const max = getMax([1,2,3,4,5]);
console.log(max);

function getMax(array) {
  if(array.length=== 0 ) return undefined;

  // let max = array[0];
  // for(let i=1; i<array.length; i++)
  //   if(array[i] > max)
  //   max = array[i];
  // return max;

  // return array.reduce((accumulator,current) => {
  //   if(current> accumulator) return current;
  //   return accumulator;
  // });

  return array.reduce((a,b) => (a > b) ? a : b);
}