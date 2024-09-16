let arr=[1,2,3,4,5,6,7,2];
let num=2;

for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);
