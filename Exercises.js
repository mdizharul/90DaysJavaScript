// Exercises 1 : Address Object
let address = {
      street : 'lane :10',
      city : 'Pune',
      zipcode : '14048'
}

function showAddress(address) {
  for(let key in address)
  console.log(key, address[key]);
}

showAddress(address);

//Exercises 2 : Factory and constructor function
// task : first initalise address object first using factory function and then constructor function

//1. using factory function

let address1 = createAddress('22', 'Nagpur', '12345');
console.log(address1);
function createAddress(street, city, zipcode) {
  return {street, city, zipcode};
}
//----------------------------------------------------------------
//2. using constructor function
// Pascal notation used in constructor function
let address2 = new CreateAddress('11', 'Mumbai', '274408');
console.log(address2);

function CreateAddress(street, city, zipcode){
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

//Object Equality exercise

let address3 = createAddress('33', 'Nasik', '11122');
let address4 = createAddress('33', 'Nasik', '11122');

function areEqual(address3, address4){
  return address3.street ===address4.street && address3.city===address4.city && address3.zipcode===address4.zipcode;
  
}

function areSame(address3, address4){
  return address3 === address4;
}

console.log(areEqual(address3, address4));
console.log(areSame(address3, address4));

// Blog Posts exercise (Object literal syntax)

//title
//body
//author
//views
//comments -- Array of comments with
//  (author,body)
// isLive()

// let posts = {
//   title :'a',
//   body : 'b',
//   author : 'c',
//   views : 10,
//   comments :[
//     {author : 'a', body : 'b'},  // [{}]
//     {author : 'c', body : 'd'},
//   ],
//   isLive : true
// };
// console.log(posts);

let post = new Post('a', 'b', 'c');
console.log(post);
function Post(title, body, author){
  this.title = title;
  this.body = body;
  this.author=author;
  this.views=0;
  this.comments = [];
  this.isLive = false;
}


// Price range objects

let priceRange = [
  {lable: '$', tooltip: 'Inexpensive',minPerPerson : 1, maxPerPerson :10},
  {lable: '$$', tooltip: 'Moderate',minPerPerson : 11, maxPerPerson :20},
  {lable: '$', tooltip: 'Expensive',minPerPerson :21, maxPerPerson :50}
];

let restaurants = [
  {averagePerPerson:5}
]; //

console.log(priceRange);