//making a request through node
const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', (error, res, body) => {
	//eval(require('locus'))
	if(error){
		console.log("There was an error");
	} else {
		if(res.statusCode==200){
			var rawData = JSON.parse(body);
			console.log(`${rawData.name} lives in ${rawData.address.city}`);
		}
	}
});
