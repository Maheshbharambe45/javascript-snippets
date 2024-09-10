let toDo=[]; //To store list of todo
let request = prompt("please enter your choise"); //for input

while(true)
{
    if(request=='quit')   //quit logic
    {
        console.log('Quitting App');
    }
    else if(request=='list')   //list logic
    {
        for(let i=0;i<toDo.length;i++)
        {
            console.log(i,toDo[i]);
        }
    }
    else if(request=='add')  //To add elements logic
    {
        let task= prompt("please enter the task you want to add");
        toDo.push(task);
        console.log('Task added');
    }
    else if(request=='delete') //To delete element
    {
        let idx= prompt("please enter the task index you want to delete");
        toDo.splice(idx,1);
        console.log('task deleted');
    }
    else  //if user added invalid request
    {
        console.log("Invalid request")
    }
    request = prompt("please enter your choise");
}
