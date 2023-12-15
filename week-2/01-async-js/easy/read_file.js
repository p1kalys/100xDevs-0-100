const fs = require("fs");

fs.readFile("hi.txt","utf-8", function(err,data) {
    console.log(data);
});

console.log("Pending Next");

for(let i=0; i<100; i++){
    if(i%5==0){
        console.log(i);
    }
}
