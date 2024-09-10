const favoriteMovie = "animal";

let guess=prompt("Enter my favorite movie");

while((favoriteMovie != guess) && (guess != 'quit'))
{
    console.log("Oops! You entered wrong movie");
    guess=prompt(" Wrong , Please think again my favorite movie");
}
if(guess==favoriteMovie)
{
    console.warn("Yehhh , you guesss right")
}
else if(guess=='quit')
{
    console.log("You quit")
}

// options tell someone: 
// 1.victory
// 2.abcd2
// 3.bhramhastra
// 4.animal
