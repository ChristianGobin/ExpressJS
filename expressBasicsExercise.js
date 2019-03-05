//Express Routing.
var express = require('express');
var app = express();

//home
app.get("/" , function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

//animal sounds
app.get("/speak/:animal", function(req,res){
    var animals = req.params.animal;
    var animalwitSounds = {
        dog: "Woof",
        eagle: "Ehhh",
        pig : "Oink",
        chicken: "Yeah",
        cow : "Moo"
    };

    var sound = animalwitSounds[animals];
    res.send("The animal: " + animals + " makes the sound " + sound);
});


//repeat word request
app.get("/repeat/:word/:number", function(req,res){
    var endState = "";
    var number = Number(req.params.number);
    var word = req.params.word;

    for(var i = 0; i < number; i++){
        endState += word + " ";
    }

    res.send(endState);
});

//error message
app.get("*", function(req,res){
    res.send("Sorry page not found... What are you looking for?");
});

//hosting
app.listen(3000, function(){
    console.log("Up and running on port 3000.");
});


