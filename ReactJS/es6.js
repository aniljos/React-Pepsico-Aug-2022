console.log("es6");

const arr = [1, 2];

// const x = arr[0];
// const y = arr[1];

//destructuring 

const [x, y] = arr;

console.log("x", x);
console.log("y", y);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((item, index) => {return item * item});

console.log("sqauers", squares);

