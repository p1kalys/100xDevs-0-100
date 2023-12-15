const fs = require("fs");

fs.writeFile("hi.txt","It's another one", (err)=>{
    if(err){
        return;
    }
    else{
        console.log("Success");
    }
})

console.log("Next will be the program and_end");