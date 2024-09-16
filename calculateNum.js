let num=34568877;
let count=0;
let copy=num;

while(copy>0)
{
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);

//output - 8
