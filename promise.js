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

saveData("mahesh bharambe"); 
