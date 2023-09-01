const array = [1, 2, 3, 4, 5];

const output = move(array, 0, -2);
console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0){
    return console.error("invalid offset");
  }

  const output = [...array]; // copy the array as dont want to modifiy the original array
  // we need to remove the element from the array, and place it back at right position
  const element = output.splice(index, 1)[0]; // we goto the given index and delete one item, the items
  // that are removed will be returned as an array, so we can access the first element in that array

  // once again we need to add it to a specific position, so we use splice method again
  // output.splice(index+offset,0,element);
  output.splice(position, 0, element);
  return output;
}
