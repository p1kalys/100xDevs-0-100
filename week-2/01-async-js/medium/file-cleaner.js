const fs = require("fs");
fs.readFile("read.txt","utf-8", (err,data)=>{
    if (err){
        console.log(err);
    }
    else{
        let str = data;
        console.log(data);
        str = str.replace(/\s+/g," ").trim();
        console.log(str);
        fs.writeFile("read.txt", str, (err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Success");
            }
        });
    }
});