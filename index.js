const app = require('express')();
const fs = require('fs');

app.listen(13432 /*default port*/, () => console.log('Ushio-win-server listening on port 13432!'));

app.get('/', (req, res) => {
	res.send('This is Ushio-win-server!!');
});

app.get('/getMsg', (req, res) => {
	if(!req.query.hasOwnProperty('id')){
		res.send('');
		return;
	}

	res.send('test');
});