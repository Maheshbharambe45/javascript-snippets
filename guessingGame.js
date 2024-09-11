//Guessing game using math object and use some comman logic!
const max=prompt("Enter the number");

const random=Math.floor(Math.random() * max)+1;

let guess=prompt("Guess the number");

while(true)
{
     if(guess=='quit')
     {
        console.log('User quited');
        break;
     }
     else if(guess==random)
     {
        console.log('You guess right the number was',random);
        break;
     }
     else if(guess<random)
     {
       guess = prompt("Hint : Your enter the small number than correct answer");
     }
     else if(guess<random)
    {
        guess = prompt("Hint : Your enter the big number than correct answer");
    }
}
