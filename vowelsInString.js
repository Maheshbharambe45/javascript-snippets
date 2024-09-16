let str = prompt("Enter the string");
const exp=/[aeiou]/gi ;// to find globaly and dont cheak uppercase and lowercase
let cheak=str.match(exp);
console.log(cheak.join(','));
console.log(cheak.length);

// output
// a,e,a,a
//  4
