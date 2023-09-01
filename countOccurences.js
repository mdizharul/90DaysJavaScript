function countOccurrences(array, searchElement) {
  // let count = 0;
  // for( let element of array ) 
  //   if( element===searchElement )
  //   count++; 
  // return count;
  // Using Reduce method

  return array.reduce((accumulator,current)=> {
    const occurence = (current === searchElement) ? 1 : 0;
    console.log(accumulator+ current, searchElement);
    return accumulator + occurence;

  },0);
  }


const array = [1,2,3,4,5,6,7,1,9,1];
const output = countOccurrences(array, 1);
console.log(output);