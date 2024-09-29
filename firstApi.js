let url="https://catfact.ninja/fact";

fetch(url)
.then((responce)=>{
    console.log(responce);
    return responce.json();
})

.then((data)=>{
    console.log(data);
})

.catch((error)=>{
    console.log("error -",error);
})
