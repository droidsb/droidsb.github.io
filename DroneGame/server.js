var express = require('express');

function searchid(Key, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id===Key) {
            return myArray[i];
        }
    }
}

var app = express();
var server = app.listen(3000);

app.use(express.static('public'))

console.log("Socket server running!")

var socket = require('socket.io');

var io = socket(server);

var players=[]

//var worlditems=[];

var slots=28

//World variables

var worldsizex=10;
var worldsizey=10;

var chunks = new Array(worldsizex)

var chunksize=256;

var pblocksize=8;






///\/\/\/\/\/\/\/\/\

const start=Date.now();

io.sockets.on('connection', newConnection);
var millsave=0;

/*while(true){

const millis = Date.now() - start;

if(millis%1000===0 && millsave!==millis){

console.log(millis)
millsave=millis
}


}*/

var chats=[];



function newConnection(socket) {

	console.log('New Connection: '+socket.id)
	
	
	
	
	
	function serverMills(){
	
		const millis = Date.now() - start;
	
		socket.emit('serverMills',millis)
		
		//console.log(millis/1000)
	
	}
	
	
	
	
	
	
	socket.on('disconnect', function() {
      console.log("Client has disconnected:" +socket.id);
      socket.broadcast.emit('playerDisconnect', {id:socket.id});
      
      	if(searchid(socket.id,players)!==undefined){
		
			//players.splice(players.indexOf(searchid(socket.id,players)),1)
			searchid(socket.id,players).active=false;
			console.log(players)
		
		}
      
      
    });

}

