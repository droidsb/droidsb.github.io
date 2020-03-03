const {GoogleSpreadsheet} = require('google-spreadsheet');

const { promisify } = require('util')


const creds=require('./client_secret.json')

function searchname(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}


async function accessSpreadsheet(){

const doc = new GoogleSpreadsheet('19AlnuXv11v2RhTL1NgRYK6DXnGtW-1bN6xYEo1FjSzg')

await doc.useServiceAccountAuth(require('./client_secret.json'));


await doc.loadInfo();

console.log(doc.title);


const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

console.log(sheet.title);

await sheet.loadCells('A1:J150'); // loads a range of cells
console.log(sheet.cellStats);




var bwin=0;

var name="";

var data=[];



var text=""

var tempdata=[]

for(var i=0; i<100; i++){

if(sheet.getCell(1+i, 6).value!==null){

data.push({name: sheet.getCell(1+i, 1).value, 
kills:sheet.getCell(1+i, 2).value, 
deaths:sheet.getCell(1+i, 3).value,
sdeaths:sheet.getCell(1+i, 4).value,
wins:sheet.getCell(1+i, 5).value,
losses:sheet.getCell(1+i, 6).value,
wlr:sheet.getCell(1+i, 7).value,
kdr:sheet.getCell(1+i, 8).value,
kdrsd:sheet.getCell(1+i, 9).value

})



}



//document.write(data.length)





/*
var cellW=sheet.getCell(1+i, 4);

var cellN=sheet.getCell(1+i, 6);

if(cellW.value>bwin){

	bwin=cellW.value;
	
	name=cellN.value;
	

}*/


}



for(var i=0; i<data.length; i++){

	for(var p=0; p<data.length; p++){
	
	
	
		if(i!==p){
		
				
				if(sheet.getCell(1+i, 1).value===sheet.getCell(1+p, 1).value){
					
					data[i].kills+=data[p].kills
					data[i].deaths+=data[p].deaths
					data[i].sdeaths+=data[p].sdeaths
					data[i].wins+=data[p].wins
					data[i].losses+=data[p].losses
					data[i].wlr+=data[p].wlr
					data[i].kdr+=data[p].kdr
					data[i].kdrsd+=data[p].kdrsd
					
					
					
					
					
					
				
				}
				
				//console.log(searchname(data[i].name,tempdata))
				if(searchname(data[i].name,tempdata)===undefined){
				
				tempdata.push(data[i])
				
				}
		
		}
	
	
	}


}


data=tempdata;

console.log(tempdata)

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

addText(document.getElementById("stats"),"Name:"+data[i].name+"<br>Kills:"+data[i].kills+"<br>Deaths:"+data[i].deaths+"<br>Self Deaths:"+data[i].sdeaths+"<br>Wins:"+data[i].wins+"<br>Losses:"+data[i].losses+"<br>WLR:"+data[i].wlr+"<br>KDR:"+data[i].kdr+"<br>KDR(Self Deaths):"+data[i].kdrsd+"<br><br>");



}



/*
document.writeln(name+"<br>")
document.writeln("<span class='red'>"+bwin)
*/


//var cellN=sheet.getCell(1, 4);

//console.log(cellN.value)

}
 
accessSpreadsheet();