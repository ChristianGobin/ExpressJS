//express app.
var express = require('express');
var app = express();

// listen for the routes.
// '/' = hello there 
// '/bye' = goodbye
// '/dog' = woof
app.get("/", function(req, res){
    res.send("Hello There.");
});

app.get("/dog", function(req, res){
    res.send("WOOF!");
})

app.get("/bye" ,function(req, res){
    res.send("Goodbye friend!")
});

app.listen(3000 ,function(){
    console.log("Server has started on port 3000");
})