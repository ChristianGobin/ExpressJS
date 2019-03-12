//making a request through node
var request = require('request');
request("http://www.google.com", function(error, res, body){
	if(error){
		console.log("There was an error");
	} else {
		if(res.statusCode==200){
			console.log(body);
		}
	}
});
