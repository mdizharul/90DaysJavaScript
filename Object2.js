//cloning an Object

const circle= {
  radius : 11,
  draw(){
    console.log("cloning");
  }
};

// const another = Object.assign({}, circle);
// console.log(another);

//we have another simpler way to clone an object which is spread operator
// by putting thre dots beore function objects 

const another = {...circle};
console.log(another);
//---------------------------------------------------------------- 
// Template literal 

// use back tick for using template literal

const name = 'izhar';
const message = `Hi ${name}, thnks for 
                joining my mailing list
                Regards Mosh`;

//----------------------------------------------------------------

// Date Object
const now = new Date();
const date1 = new Date('May 15 2023 09:00:00');
const date2 = new Date(2018,4,11,9);

now.setFullYear(2022);

// now.toDateString()
// 'Thu Aug 25 2022'
// now.toTimeString()
// '17:37:22 GMT+0530 (India Standard Time)'
// now.toISOString()
// '2022-08-25T12:07:22.144Z'