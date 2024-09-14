let country= ['india','united states of america','tokyo','berlin'];

function longestName(country)
{
   let ansIdx=0;
   for(let i=1;i<country.length;i++)
   {
      let ansLen=country[ansIdx].length;
      let currLem=country[i].length;
      if(currLem>ansLen)
      {
         ansIdx=i;
      }
   }
   return country[ansIdx];
}
