var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//style sheet linked to main js.
app.use(express.static("public"));
var friends = ["Jake", "John" , "Joan", "Jill"];

app.get("/", function(req,res){
    res.render("home.ejs");
});


//////////////////////////////
app.get("/friends", function(req,res){
    res.render("friends.ejs",  {friends : friends});
})

//use body parser.
app.use(bodyParser.urlencoded({extended: true}));

//app post
app.post("/addfriend", function(req, res){
    var friend = req.body.newFriend;
    friends.push(friend);
    res.send("Youve made a new friend.")
});




app.listen(3000, function(){
    console.log("Now running on port 3000");
})