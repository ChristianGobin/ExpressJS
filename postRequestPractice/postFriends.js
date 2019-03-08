var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var friends = ["Jake", "John" , "Joan", "Jill"];

//render friends.ejs page. 
app.get("/friends", function(req,res){
    res.render("friends.ejs",  {friends : friends});
})

app.use(bodyParser.urlencoded({extended: true}));

//make newFriend a variable and add that friend to array of friends. 
app.post("/addfriend", function(req, res){
    var friend = req.body.newFriend;
    friends.push(friend);
    //reload page with updated friend
    res.redirect("/friends.ejs");
});

//hosting on port 3000
app.listen(3000, function(){
    console.log("Now running on port 3000");
})
