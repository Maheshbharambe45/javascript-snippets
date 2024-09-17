let arr=[2,3,4,5,6,7,8,9];

const square=arr.map((el)=> el* el);
console.log(`square of each element ${square}`);

let sum=arr.reduce((acc,el)=>acc+el);
console.log(`sum of array is ${sum}`)

let avg=sum / arr.length;
console.log(`the average of array is ${avg}`);
