let start=100;
let end=200;

function generateRandom(start,end)
{
   let diff=start-end;
   return Math.floor(Math.random()*diff)+start;
}
