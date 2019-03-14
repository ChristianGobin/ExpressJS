const express = require('express');
const request = require('request');
const app = express();
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('form');
})



app.get('/results', (req,res) => {
    let query = req.query.search;
    let url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200){
            var rawData= JSON.parse(body);
            var data = rawData["Search"];
            res.render('results', {data: data});
        }
        else{
            console.log("There was an error!" , error);
        }
    });
});



app.listen(3000, () => {
    console.log("Server started on port 3000");
})