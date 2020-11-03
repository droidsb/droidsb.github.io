

//var fs = require('fs');

var fs = require('fs')

//var data = require('fs').readFileSync(__dirname + '/data.js', 'utf8');

var data = fs.readFileSync(__dirname + '/data.js');

console.log(data)
 
data=JSON.parse(data);



function searchname(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}


async function accessSpreadsheet(){








for(var i=0; i<data.length; i++){


	data[i].wlr=data[i].wins/data[i].losses;
	
	data[i].kdr=data[i].kills/data[i].deaths;
	
	data[i].kdrsd=data[i].kills/(data[i].deaths+data[i].sdeaths);




}

function addText(node,text){     
         var t=text.split(/\s*<br ?\/?>\s*/i),
             i;
         if(t[0].length>0){         
           node.appendChild(document.createTextNode(t[0]));
         }
         for(i=1;i<t.length;i++){
            node.appendChild(document.createElement('BR'));
            if(t[i].length>0){
              node.appendChild(document.createTextNode(t[i]));
            }
         } 
}            
//addText(document.body,"Line 1 <br> Line 2<br/>line 3<BR/>");

for(var i=0; i<data.length; i++){

	//document.write("Name:"+data[i].name+"<br>Kills:"+data[i].kills+"<br>Deaths:"+data[i].deaths+"<br>Self Deaths:"+data[i].sdeaths+"<br>Wins:"+data[i].wins+"<br>Losses:"+data[i].losses+"<br>WLR:"+data[i].wlr+"<br>KDR"+data[i].kdr+"<br>KDR(Self Deaths):"+data[i].kdrsd+"<br><br>");

	//text=text+"Name:"+data[i].name+"<br>Kills:"+data[i].kills+"<br>Deaths:"+data[i].deaths+"<br>Self Deaths:"+data[i].sdeaths+"<br>Wins:"+data[i].wins+"<br>Losses:"+data[i].losses+"<br>WLR:"+data[i].wlr+"<br>KDR"+data[i].kdr+"<br>KDR(Self Deaths):"+data[i].kdrsd+"<br><br>";
//var textNode = document.createTextNode("Name:"+data[i].name+"<br>Kills:"+data[i].kills+"<br>Deaths:"+data[i].deaths+"<br>Self Deaths:"+data[i].sdeaths+"<br>Wins:"+data[i].wins+"<br>Losses:"+data[i].losses+"<br>WLR:"+data[i].wlr+"<br>KDR"+data[i].kdr+"<br>KDR(Self Deaths):"+data[i].kdrsd+"<br><br>");

//document.body.appendChild(textNode);

//document.body.appendChild(document.createElement("br"));

//addText(document.getElementById("stats"),"Name:"+data[i].name+"<br>Kills:"+data[i].kills+"<br>Deaths:"+data[i].deaths+"<br>Self Deaths:"+data[i].sdeaths+"<br>Wins:"+data[i].wins+"<br>Losses:"+data[i].losses+"<br>WLR:"+data[i].wlr+"<br>KDR:"+data[i].kdr+"<br>KDR(Self Deaths):"+data[i].kdrsd+"<br><br>");



}


{
var topplayer;

var secondplayer;

var thirdplayer;

for(var i=0; i<data.length; i++){
	
	if(i===0){
	
		topplayer=data[i]
		
	}
	
	if(data[i].wins>topplayer.wins){
	
		topplayer=data[i];
	
	}


}

for(var i=0; i<data.length; i++){
	
	if(i===0){
	
		secondplayer={wins:-100}
		
	}
	
	if(data[i].wins>secondplayer.wins && data[i].wins<topplayer.wins){
	
		secondplayer=data[i];
	
	}


}

for(var i=0; i<data.length; i++){
	
	if(i===0){
	
		thirdplayer={wins:-100}
		
	}
	
	if(data[i].wins>thirdplayer.wins && data[i].wins<secondplayer.wins){
	
		thirdplayer=data[i];
	
	}


}

}

{
var onewr;

var twowr;

var threewr;

for(var i=0; i<data.length; i++){
	
	if(i===0){
	
		onewr=data[i]
		
	}
	
	if(data[i].wlr>onewr.wlr){
	
		onewr=data[i];
	
	}


}

for(var i=0; i<data.length; i++){
	
	if(i===0){
	
		twowr={wlr:-100}
		
	}
	
	if(data[i].wlr>twowr.wlr && data[i].wlr<onewr.wlr){
	
		twowr=data[i];
	
	}


}

for(var i=0; i<data.length; i++){
	
	if(i===0){
	
		threewr={wlr:-100}
		
	}
	
	if(data[i].wlr>threewr.wlr && data[i].wlr<twowr.wlr){
	
		threewr=data[i];
	
	}


}

}

console.log(topplayer)
addText(document.getElementById("leaderboard"),"Wins Leaderboard<br><br>1st: "+topplayer.name+"<br>Wins: "+topplayer.wins+"<br><br>2nd: "+secondplayer.name+"<br>Wins: "+secondplayer.wins+"<br><br>3rd: "+thirdplayer.name+"<br>Wins: "+thirdplayer.wins+"<br><br>")

addText(document.getElementById("leaderboard2"),"Win Ratio Leaderboard<br><br>1st: "+onewr.name+"<br>Win Ratio: "+onewr.wlr+"<br><br>2nd: "+twowr.name+"<br>Win Ratio: "+twowr.wlr+"<br><br>3rd: "+threewr.name+"<br>Win Ratio: "+threewr.wlr+"<br><br>")





function getPlayer(){

var x = document.getElementById("myText").value;

	var p=searchname(x, data)
	
	document.getElementById("stats").innerHTML = "";
	
	//document.getElementById("stats").removeChild()
	
	addText(document.getElementById("stats"),"Name:"+p.name+"<br>Kills:"+p.kills+"<br>Deaths:"+p.deaths+"<br>Self Deaths:"+p.sdeaths+"<br>Wins:"+p.wins+"<br>Losses:"+p.losses+"<br>WLR:"+p.wlr+"<br>KDR:"+p.kdr+"<br>KDR(Self Deaths):"+p.kdrsd+"<br><br>");



}

document.getElementById("button").onclick = function() {getPlayer()};

/*
document.writeln(name+"<br>")
document.writeln("<span class='red'>"+bwin)
*/


//var cellN=sheet.getCell(1, 4);

//console.log(cellN.value)

}
 
accessSpreadsheet();