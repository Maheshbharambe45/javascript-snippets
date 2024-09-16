let arr=[1,2,3,4,5,6,8,10];

let newArr=arr.filter((el)=>
{
    return el % 2 == 0;
});
console.log('even numbers -',newArr);
