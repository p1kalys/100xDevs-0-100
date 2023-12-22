const express = require("express");

const app = express();
app.use(express.json())

const users = [{
    name: "John",
    kidneys: [{
        healthy: true
    },
{
    healthy: false
}]
}];

app.get("/", (req, res)=>{
    const johnkidneys = users[0].kidneys;
    const numberofKidneys = johnkidneys.length;
    let healthykidneys = 0;
    for(let i=0; i<numberofKidneys; i++){
        if (users[0].kidneys[i].healthy){
            healthykidneys++;
        }
    }
    const unhealthykidneys = numberofKidneys-healthykidneys;

    res.json({numberofKidneys, healthykidneys, unhealthykidneys});
});


app.post("/", (req, res)=>{
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    });
    res.json({
        msg: "Added"
    })
});

app.put("/", (req, res)=>{
    for (let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({msg: "Updated"});
});

app.delete("/", (req,res)=>{
    let isunhealthykidneys = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            isunhealthykidneys = true;
        }
    }
    if (isunhealthykidneys){
        const newkidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if (users[0].kidneys[i].healthy){
                newkidneys.push({healthy: true})
            }
        }
        users[0].kidneys = newkidneys;
        res.json({msg: "Success"});
    }
    else {
        res.json("No Unhealthy kidneys");
    }
});

app.listen(3000);