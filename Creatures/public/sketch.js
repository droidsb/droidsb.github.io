var keys = [];



var socket;

var Players = [{
    x: 20 * 100,
    y: 20 * 100,
    cx: 0,
    cy: 0,
    speed: 4,
    id:0
}]

var blendBiomes = 100;

var blendArr = []

var img;

var worldsizex = 100;

var worldsizey = 100;

var chunks = new Array(100);
//0.001
var inc = 0.001;


function searchid(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i];
        }
    }
}


for (var i = 0; i < chunks.length; i++) {


    chunks[i] = new Array(100)

}

function genChunk(chunkOffx, chunkOffy) {

    img = createImage(worldsizex, worldsizey);


    {

        var yoff = 0 + chunkOffy;

        var seedx = 2498453;

        var seedy = 2498453;


        img.loadPixels();

        for (var y = 0; y < worldsizey; y++) {

            var xoff = 0 + chunkOffx;

            for (var x = 0; x < worldsizex; x++) {


                var index = (x + y * worldsizex) * 4

                var r = noise(xoff, yoff)

//2498453
                var r2 = noise(xoff + seedx, yoff + seedy)


                var biomeBlend = random() / (255 - blendBiomes)
                //snow
                if (r < 1 + biomeBlend) {
                    //194, 178, 128

                    var variance = 1;

                    var coloroffset = 20;

                    var rc = 200 - coloroffset;
                    var gc = 200 - coloroffset;
                    var bc = 200 - coloroffset;
                    var ac = 255;

                    img.set(x, y, color(rc, gc, bc, ac));

                }

                //mountains

                if (r < 0.78 + biomeBlend && r2<0.7) {
                    //194, 178, 128

                    var variance = 1;

                    var coloroffset = 100;

                    var rc = 10 + ((255 * r) / variance) - coloroffset;
                    var gc = 10 + ((255 * r) / variance) - coloroffset;
                    var bc = 10 + ((255 * r) / variance) - coloroffset;
                    var ac = 255;

                    img.set(x, y, color(rc, gc, bc, ac));

                }
				
				
				//Tundra
				
				if (r < 0.85 + biomeBlend && r2 > 0.7 + biomeBlend) {
				
				
				 	var variance = 200;

                    var coloroffset = -20;

                    var rc = 255 -(variance * r*r2) -coloroffset;
                    var gc = 255 -(variance * r*r2) -coloroffset;
                    var bc = 255 -(variance * r*r2)- coloroffset;
                    var ac = 255;

                    img.set(x, y, color(rc, gc, bc, ac));
                   
                }
				
				//Dunes/desert
				
				if (r < 0.6 + biomeBlend && r2 > 0.75 + biomeBlend) {
                     //console.log(r)
                    //console.log(r2)

                    //194, 178, 128

                    var variance = 1;

                    var coloroffset = 100;

                    var rc = 175 + ((255 * r) / variance) - coloroffset;
                    var gc = 154 + ((255 * r) / variance) - coloroffset;
                    var bc = 88 + ((255 * r) / variance) - coloroffset;
                    var ac = 255;

                    img.set(x, y, color(rc, gc, bc, ac));

                }

                //forest

                if (r < 0.6 + biomeBlend && r2 < 0.76 + biomeBlend) {
                    //194, 178, 128

                    var variance = 1;

                    var coloroffset = 160;

                    var rc = 47 + ((255 * r) / variance) - coloroffset;
                    var gc = 95 + ((255 * r) / variance) - coloroffset;
                    var bc = 0 + ((255 * r) / variance) - coloroffset;
                    var ac = 255;

                    img.set(x, y, color(rc, gc, bc, ac));

                }

                //grass/plains
                if (r < 0.6 + biomeBlend && r2 < 0.50 + biomeBlend) {
                    //194, 178, 128

                    var variance = 1;

                    var coloroffset = 100;

                    var rc = 47 + ((255 * r) / variance) - coloroffset;
                    var gc = 95 + ((255 * r) / variance) - coloroffset;
                    var bc = 0 + ((255 * r) / variance) - coloroffset;
                    var ac = 255;

                    img.set(x, y, color(rc, gc, bc, ac));

                }
                
                




                //sand/beach
                if (r < 0.45 + biomeBlend && r2 < 0.6 + biomeBlend) {

                    //console.log(r)
                    //console.log(r2)

                    //194, 178, 128

                    var variance = 1;

                    var coloroffset = 100;

                    var rc = 175 + ((255 * r) / variance) - coloroffset;
                    var gc = 154 + ((255 * r) / variance) - coloroffset;
                    var bc = 88 + ((255 * r) / variance) - coloroffset;
                    var ac = 255;

                    img.set(x, y, color(rc, gc, bc, ac));

                }


                //cliffs/rocks
                if (r < 0.45 + biomeBlend && r2 > 0.6 + biomeBlend) {

                    //194, 178, 128

                    var variance = 1;

                    var coloroffset = 0;

                    var rc = 10 + ((255 * r) / variance) - coloroffset;
                    var gc = 10 + ((255 * r) / variance) - coloroffset;
                    var bc = 10 + ((255 * r) / variance) - coloroffset;
                    var ac = 255;

                    img.set(x, y, color(rc, gc, bc, ac));

                }

				
				//Warm ocean
				
				if (r < 0.4 + biomeBlend && r2>0.5) {



                    var rc = 40+ (40 * r);
                    var gc = 40+ (40 * r);
                    var bc = 40 + (255 * r);
                    var ac = 200;
                    if (r > 0.35) {
                        ac = 200 - (r * 20);
                    }


                    img.set(x, y, color(rc, gc, bc, ac));

                }
				
                //Cold ocean
                if (r < 0.4 + biomeBlend && r2<0.5) {



                    var rc = 0;
                    var gc = 0;
                    var bc = 0 + (255 * r);
                    var ac = 200;
                    if (r > 0.35) {
                        ac = 200 - (r * 20);
                    }


                    img.set(x, y, color(rc, gc, bc, ac));

                }




                xoff += inc;

            }

            yoff += inc;
        }


        img.updatePixels();
    }
//img.filter(BLUR, 10);
    return img;

}

var mobile=false;

function enableMobile(){

console.log("enabled mobile")

mobile=true;

}

function setup() {

  socket = io.connect('http://192.168.1.40:3000');
  

 
 button = createButton('Enable Mobile');
  button.position(150, 40);
  button.mousePressed(enableMobile);
  
  
   pixelDensity(1)

    createCanvas(windowWidth - 15, windowHeight - 20);

    fullscreen();
    
    var seed=Math.round(random(0,200000000))
    
    //seed=
    console.log(seed);

noiseSeed(81151387)
  
}

var time = 0;



//genMap();

var viewDistance = 4;

var cgenstepx = -5;
var cgenstepy = -5;

var csize = 1;

var cstep = 0;
var cmin = 1;

var savePcX = 0;
var savePcY = 0;


var otherPlayers=[]

function draw() {

noiseDetail(16)

    background(100)
    
    for(var CurrentPlayer=0; CurrentPlayer<Players.length; CurrentPlayer++){

    Players[CurrentPlayer].cx = Math.floor(Players[CurrentPlayer].x / 100)

    Players[CurrentPlayer].cy = Math.floor(Players[CurrentPlayer].y / 100)




    if (cstep > (csize * csize) - ((csize - 2) * (csize - 2))) {

        csize = csize + 2;
        cstep = 0;
        savePcX = Players[CurrentPlayer].cx;
        savePcY = Players[CurrentPlayer].cy;


    }

    if (savePcX !== Players[CurrentPlayer].cx || savePcY !== Players[CurrentPlayer].cy) {

        csize = 1;
        cstep = 0;
        savePcX = Players[CurrentPlayer].cx;
        savePcY = Players[CurrentPlayer].cy;

    }

    if (csize > 1 + (viewDistance * 2)) {

        csize = 1;

    }




    var xg = Math.floor(csize / 2)

    var yg = Math.floor(csize / 2)

    if (Math.floor(cstep / csize) < 1) {
        xg = xg - cstep
    }

    if (cstep > (csize - 1) && cstep < csize * 2 - 1) {

        yg = yg - ((cstep % csize) + 1)
        xg = xg - (csize - 1)

    }

    if (cstep >= ((csize * 2) - 1) && cstep < (csize * 3) - 2) {

        yg = yg - (csize - 1)
        xg = xg + (cstep - csize * 2) - (csize - 3)

    }

    if (cstep >= (csize * 3) - 2) {

        yg = yg + (cstep - csize * 3) - (csize - 4)


    }




    cgenstepx = xg;
    cgenstepy = yg;

    if (csize === 1) {

        cgenstepx = 0;
        cgenstepy = 0;

    }

    //console.log(cstep)
    //console.log(cgenstepx+","+cgenstepy)

    if ((Players[CurrentPlayer].cx + cgenstepx) * inc * 100 >= 0) {
        if (chunks[Players[CurrentPlayer].cx + cgenstepx][Players[CurrentPlayer].cy + cgenstepy] === undefined) {

            //console.log((Players[CurrentPlayer].cx+cgenstepx)*inc*100)



            chunks[Players[CurrentPlayer].cx + cgenstepx][Players[CurrentPlayer].cy + cgenstepy] = genChunk((Players[CurrentPlayer].cx + cgenstepx) * inc * 100, (Players[CurrentPlayer].cy + cgenstepy) * inc * 100)

				
			
				
        }

    }




    cstep++;

    if (Players[CurrentPlayer].x < 20) {

        Players[CurrentPlayer].x = 20;

    }

    if (Players[CurrentPlayer].y <= 20) {

        Players[CurrentPlayer].y = 20;

    }

    var cutoff = 8;

    var Vx1 = Players[CurrentPlayer].cx - cutoff;
    var Vy1 = Players[CurrentPlayer].cy - cutoff;

    var Vx2 = Players[CurrentPlayer].cx + cutoff;
    var Vy2 = Players[CurrentPlayer].cy + cutoff;

    if (Vx1 < 0) {

        Vx1 = 0

    }

    if (Vy1 < 0) {

        Vy1 = 0

    }

    if (Vx2 > chunks.length) {

        Vx2 = chunks.length

    }

    if (Vy2 < chunks.length) {

        Vy2 = chunks.length

    }


    for (var x = Vx1; x < Vx2; x++) {
        for (var y = Vy1; y < Vy2; y++) {

            if (chunks[x][y] !== undefined) {


                if (x * 100 - Players[CurrentPlayer].x + width / 2 > -100 && x * 100 - Players[CurrentPlayer].x + width / 2 < width && y * 100 - Players[CurrentPlayer].y + height / 2 > -100 && y * 100 - Players[CurrentPlayer].y + height / 2 < height)
                    image(chunks[x][y], x * 100 - Players[CurrentPlayer].x + width / 2, y * 100 - Players[CurrentPlayer].y + height / 2)



            }


        }




    }


    //mini map
    /*{
        var minimapsize = 2000;

        push()

        translate(width - 240, 40)

        scale(0.1)

        fill(100)
        rect(0, 0, minimapsize, minimapsize)

        pop()

        cutoff = 11;



        Vx1 = Players[CurrentPlayer].cx - cutoff;
        Vy1 = Players[CurrentPlayer].cy - cutoff;

        Vx2 = Players[CurrentPlayer].cx + cutoff;
        Vy2 = Players[CurrentPlayer].cy + cutoff;

        if (Vx1 < 0) {

            Vx1 = 0

        }

        if (Vy1 < 0) {

            Vy1 = 0

        }

        if (Vx2 > chunks.length) {

            Vx2 = chunks.length

        }

        if (Vy2 < chunks.length) {

            Vy2 = chunks.length

        }

        for (var x = Vx1; x < Vx2; x++) {
            for (var y = Vy1; y < Vy2; y++) {

                if (chunks[x][y] !== undefined) {



                    push()

                    translate(width - 240, 40)

                    scale(0.1)




                    if ((y * 100 - Players[CurrentPlayer].y + height / 2) + (minimapsize / 4) < minimapsize - 100 && (y * 100 - Players[CurrentPlayer].y + height / 2) + (minimapsize / 4) > 0 && (x * 100 - Players[CurrentPlayer].x + width / 2) + (minimapsize / 8) > 0 && (x * 100 - Players[CurrentPlayer].x + width / 2) + (minimapsize / 8) < minimapsize - 100) {

                        image(chunks[x][y], (x * 100 - Players[CurrentPlayer].x + width / 2) + (minimapsize / 8), (y * 100 - Players[CurrentPlayer].y + height / 2) + (minimapsize / 4))

                    




                    fill(0)

                    rect(0, 0, 100, minimapsize)

                    rect(0, 0, minimapsize, 100)

                    rect(minimapsize - 100, 0, 100, minimapsize)

                    rect(0, minimapsize - 100, minimapsize, 100)

                    pop()

                }


            }




        }
    }*/

    //image(img,0,0)


    fill(0)
    text("X:"+Players[CurrentPlayer].x+",Y:"+Players[CurrentPlayer].y, 20, 20)
    //text(Players[CurrentPlayer].cy, 20, 40)

    text("FPS:"+frameRate().toFixed(), 20, 40)

    




    fill(0)
    rect(width / 2, height / 2, 20, 20)
    
    if(mobile===false){

    if (keys[87]) {
		
        Players[CurrentPlayer].y -= Players[CurrentPlayer].speed;

    }

    if (keys[83]) {
		
        Players[CurrentPlayer].y += Players[CurrentPlayer].speed;

    }

    if (keys[65]) {
		
        Players[CurrentPlayer].x -= Players[CurrentPlayer].speed;

    }

    if (keys[68]) {
		
        Players[CurrentPlayer].x += Players[CurrentPlayer].speed;

    }
    
    
    
    
    }
    
    if(mobile===true){
    //fullscreen(true);
    
    //if(mouseIsPressed){

    	var xd=Players[CurrentPlayer].x-(mouseX+Players[CurrentPlayer].x)+width/2
    	
    	var yd=Players[CurrentPlayer].y-(mouseY+Players[CurrentPlayer].y)+height/2
    	
    	
    
    	var vec=createVector(xd,yd );
    	
    	
    	
    	vec.limit(Players[CurrentPlayer].speed)
    	
    	
		Players[CurrentPlayer].x -= vec.x;
        Players[CurrentPlayer].y -= vec.y;
        

   // }

    /*if (mouseIsPressed && mouseY<height/2) {
		
        Players[CurrentPlayer].y += Players[CurrentPlayer].speed;

    }

    if (mouseIsPressed && mouseX>width/2) {
		
        Players[CurrentPlayer].x -= Players[CurrentPlayer].speed;

    }

    if (mouseIsPressed && mouseX<width/2) {
		
        Players[CurrentPlayer].x += Players[CurrentPlayer].speed;

    }*/
    
    }

    time++;

    //console.log(get(Players[CurrentPlayer].x, Players[CurrentPlayer].y))
    socket.on('playerDisconnect', function(data) {
    
    
      
      if(searchid(data.id,otherPlayers)!==undefined){
      
      	otherPlayers.splice(otherPlayers[otherPlayers.indexOf(searchid(data.id,otherPlayers))],1);
      
      
      }
    
    
    });
    
    
    socket.on('playerMovement',
    // When we receive data
    function(data) {
      
      //console.log("test")
      //otherPlayers.x=data.x-Players[0].x+width/2;
      //otherPlayers.y=data.y-Players[0].y+height/2;
      
      if(searchid(data.id,otherPlayers)===undefined){
      
      	otherPlayers.push(data)
      	//console.log(data)
      }
      
      if(searchid(data.id,otherPlayers)!==undefined){
      
      	otherPlayers[otherPlayers.indexOf(searchid(data.id,otherPlayers))]=data
      
      
      }
      
      //console.log(data.x)
      
    }
  );
  
  sendplayer(Players);
  
  //console.log("Hi"+otherPlayers[0])
  
  for(var i=0; i<otherPlayers.length; i++){
  		fill(200)
      rect(otherPlayers[i].x-Players[0].x+width/2,otherPlayers[i].y-Players[0].y+height/2,20,20)
      //console.log("yeet")
      
      }


    fill(0)

    rect(0, 0, 10, height)

    rect(0, 0, width, 10)

    rect(width - 10, 0, 10, height)

    rect(0, height - 10, width, 10)
    var color=get(width/2, (height/2)+20);
   
   text(Players[CurrentPlayer].speed,20,100)
   
  //console.log(color)
  
  var biomeNum = noise(Players[CurrentPlayer].x*inc, Players[CurrentPlayer].y*inc)
  
  //2498453

  
  var biomeNum2=noise(Players[CurrentPlayer].x*inc + 2498453, Players[CurrentPlayer].y*inc + 2498453)
  
  var biome="";
  
  				//snow
  				if (biomeNum < 1) {
  				
  					biome="Mountain Top"
  				
  				}

                //mountains

                if (biomeNum < 0.78 && biomeNum2<0.7) {
                
                	biome="Mountains"
                	
                }
				
				
				//Tundra
				
				if (biomeNum < 0.85 && biomeNum2 > 0.7) {
				
					biome="Tundra"
				
				}
				
				//Dunes/desert
				
				if (biomeNum < 0.6 && biomeNum2 > 0.75) {
				
					biome="Desert"
				
				}

                //forest

                if (biomeNum < 0.6 && biomeNum2 < 0.76) {
                
                	biome="Forest"
                
                }

                //grass/plains
                if (biomeNum < 0.6 && biomeNum2 < 0.50) {
                
                	biome="Plains"
                
                
                }
                
                




                //sand/beach
                if (biomeNum < 0.45 && biomeNum2 < 0.6) {
                
                	biome="Beach"
                
                
                }


                //cliffs/rocks
                if (biomeNum < 0.45 && biomeNum2 > 0.6) {
                
                	biome="Cliffs"
                
                
                }

				
				//Warm ocean
				
				if (biomeNum < 0.4 && biomeNum2>0.5) {
				
					biome="Warm Ocean"
				
				}
				
                //Cold ocean
                if (biomeNum < 0.4 && biomeNum2<0.5) {
                
                	biome="Cold Ocean"
                
                }
  
  text(biome,20,80)
  
  }
  

}



function mousePressed() {
  
  
  
  
}

// Function for sending to the socket
function sendplayer(Players) {
  // We are sending!
  
  
  // Make a little object with  and y
  var data = Players[0];
  
 // console.log("sendplayerdata: "+data);

  // Send that object to the socket
  socket.emit('playerMovement',data);
}



function keyPressed() {



    keys[keyCode] = true;
    
   

}

function keyReleased() {


    keys[keyCode] = false;

}