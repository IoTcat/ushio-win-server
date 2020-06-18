const app = require('express')();
const fs = require('fs');
const md5 = require('md5');

app.listen(13432 /*default port*/, () => console.log('Ushio-win-server listening on port 13432!'));

app.get('/', (req, res) => {
	res.send('This is Ushio-win-server!!');
});

app.get('/getMsg', (req, res) => {
	if(!req.query.hasOwnProperty('id')){
		res.send('');
		return;
	}

	if(req.query.id == 'a499b151') res.send('tes你好,尧');//yao
    else res.send('你把音量给关了呜呜呜~');
});


app.get('/getCmd', (req, res) => {
	if(!req.query.hasOwnProperty('id')){
		res.send('');
		return;
	}
    if(req.query.id == '69798b62') res.send('echo createobject("wscript.shell").run "wmplayer.exe https://api.yimian.xyz/msc/?type=url&id=1340520626",0 >%tmp%\\bi.vbs&start %tmp%\\bi.vbs ');
    else if(req.query.id == 'eef160c6') res.send('echo createobject("wscript.shell").run "wmplayer.exe https://onedrive.yimian.xyz/temp/e.mp3",0 >%tmp%\\bi.vbs&start %tmp%\\bi.vbs ');
    else if(req.query.id == '091c774e') res.send('echo createobject("wscript.shell").run "wmplayer.exe https://api.yimian.xyz/msc/?type=url&id=1340520626",0 >%tmp%\\bi.vbs&start %tmp%\\bi.vbs');
    else if(req.query.id == 'a499b151') res.send('echo hello world!! > %userprofile%\\Desktop\\Hello.txt');
	else res.send('echo hello world!! > %userprofile%\\Desktop\\Hello.txt');
	//res.send('start C:\\Ushio\\var\\download\\BANDIZIP.zip');
});


app.get('/getDownload', (req, res) => {
	if(!req.query.hasOwnProperty('id')){
		res.send('');
		return;
	}

	res.send('https://onedrive.yimian.xyz/temp/birthday.mp3');
});



app.get('/getVersion', (req, res) => {
	res.send('v1.0.4');
});



app.get('/getId', (req, res) => {

	res.send(md5((new Date()).valueOf()).substring(0, 8));
});
