function saveData(data){ 
 return new Promise((sucess,failure)=>{
  let internetSpeed=Math.floor(Math.random()*10)+1;
  if(internetSpeed>4)
  {
    sucess("sucess : data was saved");
  }
  else
  {
    failure("failure : data was not saved");
  }
 })
}

saveData("mahesh bharambe")
.then(()=>{
  console.log("data solved promise resolved");
  saveData("hello")
  .then(()=>{
    console.log("data 2 saved");
  })
})

.catch(()=>{
  console.log("promise was rejected");
})

