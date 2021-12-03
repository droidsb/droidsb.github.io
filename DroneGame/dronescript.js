var keys=[];

var debug=false;

var scene=0;
var loading=false;

//var levels=['[{"type":"rect","x":0,"y":100,"w":2000,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":-410,"y":30,"w":500,"h":100,"r":164,"g":116,"b":73},{"type":"rect","x":-520,"y":-450,"w":960,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":520,"y":-450,"w":960,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":-520,"y":-480,"w":960,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":520,"y":-480,"w":960,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":0,"y":-920,"w":3340,"h":700,"r":100,"g":100,"b":100},{"type":"rect","x":-980,"y":-190,"w":40,"h":560,"r":200,"g":200,"b":200},{"type":"rect","x":980,"y":-170,"w":40,"h":560,"r":200,"g":200,"b":200},{"type":"rect","x":-1320,"y":100,"w":700,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":-1650,"y":-170,"w":40,"h":560,"r":200,"g":200,"b":200},{"type":"rect","x":-1380,"y":-450,"w":580,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":-1380,"y":-480,"w":580,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":-410,"y":-70,"w":300,"h":100,"r":164,"g":116,"b":73},{"type":"rect","x":-410,"y":-170,"w":100,"h":100,"r":164,"g":116,"b":73}]'];


var levels=['[{"type":"rect","x":0,"y":100,"w":1000,"h":40,"r":255,"g":255,"b":255},{"type":"rect","x":-480,"y":-80,"w":40,"h":400,"r":255,"g":255,"b":255},{"type":"rect","x":480,"y":-80,"w":40,"h":400,"r":255,"g":255,"b":255},{"type":"rect","x":0,"y":-260,"w":1000,"h":40,"r":255,"g":255,"b":255},{"type":"rect","x":0,"y":-60,"w":120,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":0,"y":-150,"w":300,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":-300,"y":-50,"w":20,"h":260,"r":100,"g":100,"b":100},{"type":"rect","x":-360,"y":-170,"w":100,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":300,"y":-60,"w":160,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":300,"y":-150,"w":80,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":340,"y":10,"w":240,"h":20,"r":100,"g":100,"b":100}]',
'[{"type":"rect","x":0,"y":100,"w":2000,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":-410,"y":30,"w":500,"h":100,"r":164,"g":116,"b":73},{"type":"rect","x":-530,"y":-450,"w":940,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":530,"y":-450,"w":940,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":-520,"y":-480,"w":960,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":520,"y":-480,"w":960,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":0,"y":-920,"w":3340,"h":700,"r":100,"g":100,"b":100},{"type":"rect","x":-980,"y":-190,"w":40,"h":560,"r":200,"g":200,"b":200},{"type":"rect","x":980,"y":-170,"w":40,"h":560,"r":200,"g":200,"b":200},{"type":"rect","x":-1320,"y":100,"w":700,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":-1650,"y":-170,"w":40,"h":560,"r":200,"g":200,"b":200},{"type":"rect","x":-1380,"y":-450,"w":580,"h":40,"r":200,"g":200,"b":200},{"type":"rect","x":-1380,"y":-480,"w":580,"h":20,"r":100,"g":100,"b":100},{"type":"rect","x":-410,"y":-70,"w":300,"h":100,"r":164,"g":116,"b":73},{"type":"rect","x":-410,"y":-170,"w":100,"h":100,"r":164,"g":116,"b":73},{"type":"rect","x":-50,"y":-440,"w":20,"h":100,"r":100,"g":100,"b":100},{"type":"rect","x":50,"y":-440,"w":20,"h":100,"r":100,"g":100,"b":100}]'];


for(var i=0; i<levels.length; i++){

levels[i]=JSON.parse(levels[i])

}

let tf = new Transformer()

var camspeed=2;



var canvasscale=2;

var cwidth=3072;
var cheight=1920;

var screentouch=[false,false]

let touchScreen=false;

var flameg;

let engineSound1;
let engineSound2;

let engineSound3;
let engineSound4;


var drones=[];

var customLevels=[[{type:"rect",x:0,y:500,w:2000,h:60,r:200,g:200,b:200}]];

var levelObjects=[];

var objectMoveTimer=0;

var objectSelected=0;

var inputText="";
var objectEnterR="";
var objectEnterG="";
var objectEnterB="";
var typing=false;

var cameraMode="Follow"

let cam={x:0,y:0,accx:0,accy:0,speed:0.1,zoom:1,goal:{x:0,y:0}}

const Euler=2.718;

var autofly=false;

let smoketex;

let wait=0;
let waiting=false;

var scrollvalue=50;
var scrollSpeed=4;


var pamount=0;

let smokeRender;

let controller1left=false
let controller1right=false
let controller1flip=false;

let controller1EmoveOut=false;
let controller1EmoveIn=false;

let controller2left=false
let controller2right=false
let controller2flip=false;

let controller2EmoveOut=false;
let controller2EmoveIn=false;

var gamesize=0.3;



let cIndex=false;

let pointsP1=0;
let pointsP2=0;
let pointsP3=0;
let pointsP4=0;

let player1skin=0;
let player2skin=0;
let player3skin=0;
let player4skin=0;

let p1Color={r:255,g:255,b:255}
let p2Color={r:255,g:0,b:0}
let p3Color={r:0,g:255,b:0}
let p4Color={r:0,g:0,b:255}

let p1ExhaustColor={r:255,g:119,b:0}
let p2ExhaustColor={r:255,g:119,b:0}
let p3ExhaustColor={r:255,g:119,b:0}
let p4ExhaustColor={r:255,g:119,b:0}

let ExhaustColors=[];


let selecting=0;

var goal;

var droneIt=0;

var noReTag=3000;



var players=1;



var levelSelected=0;





var clicked=false;

var gamemode=0;

var lastPlayers=0;
var requiredPlayers=0;

var leftScreenClick=false;
var rightScreenClick=false;

var clicks=0;



var textures=[];

var flameSize=50;

function dronetexture(x,y,angle,TangleL,TangleR,size,color,id,engineOn){



/*if(engineOn[0]){

flameSize=80;

}

if(engineOn[1]){

flameSize=80;

}

if(engineOn[0]===false){

flameSize=30;

}

if(engineOn[1]===false){

flameSize=30;

}*/



if(id!==0){

    push()
    translate(x,y)
    rotate(angle)
    scale(size)
    rectMode(CENTER)
    fill(100,100,100)
    //fill(255)
    //rect(0,0,112,10)
    //rect(0,10,158,301)





    image(textures[id][2],-155/2,-4.5,155,30)

    fill(color.r,color.g,color.b)

    //rect(0,0,100,35,5)

    image(textures[id][0],-50,-17.5,100,35)

    angleMode(DEGREES)
    rectMode(CENTER)

    push()
    translate(-70,25)

    rotate(TangleL)
    //rect(0,0,25,20,5)
    image(textures[id][1],-25/2,-20/2,25,20)




    image(flameg,-10,10,20,flameSize)

    pop()





    push()
    translate(70,25)

    rotate(TangleR)
    //rect(0,0,25,20,5)
    image(textures[id][1],-25/2,-20/2,25,20)


    image(flameg,-10,10,20,flameSize)
    pop()



  pop()





}

if(id===0){
  push()
  translate(x,y)
  rotate(angle)
  scale(size)
  rectMode(CENTER)
  fill(100,100,100)
  //fill(255)
  rect(0,0,112,10)
  //rect(0,10,158,301)




  image(textures[id][2],-155/2,-4.5,155,30)

  fill(color.r,color.g,color.b)

  rect(0,0,100,35,5)

  //image(textures[id][0],-50,-17.5,100,35)

  angleMode(DEGREES)
  rectMode(CENTER)

  push()
  translate(-70,25)

  rotate(TangleL)
  rect(0,0,25,20,5)
  //tint(150,150,255)
  image(flameg,-10,10,20,flameSize)
  //image(textures[id][1],-25/2,-20/2,25,20)
  pop()





  push()
  translate(70,25)

  rotate(TangleR)
  rect(0,0,25,20,5)
  //tint(150,150,255)
  image(flameg,-10,10,20,flameSize)
  //image(textures[id][1],-25/2,-20/2,25,20)
  pop()

pop()




}




}




window.addEventListener('gc.button.press', function(event) {
  if(event.detail.name==="MISCBUTTON_4"){
    //print(ci)
  //print(event.detail)
  //this.cUp=true;
  //text(this.cUp,200,100)
  if(event.detail.controllerIndex===0){
  controller1flip=true;
}
if(event.detail.controllerIndex===1){
controller2flip=true;
}

}
}, false);


window.addEventListener('gc.button.hold', function(event) {
  //fill(255)
    //text("Bruh:"+event.detail.controllerIndex,200,300)

    if(event.detail.name==="MISCBUTTON_5"){
      //print(ci)
    //print(event.detail)
    //this.cUp=true;
    //text(this.cUp,200,100)
    if(event.detail.controllerIndex===0){
    controller1EmoveOut=true;
  }
  if(event.detail.controllerIndex===1){
  controller2EmoveOut=true;
}

  }

    if(event.detail.name==="MISCBUTTON_6"){
    //print(ci)
  //print(event.detail)
  //this.cUp=true;
  //text(this.cUp,200,100)
  if(event.detail.controllerIndex===0){
  controller1EmoveIn=true;
}
if(event.detail.controllerIndex===1){
controller2EmoveIn=true;
}

}

    if(event.detail.name==="MISCBUTTON_7"){
      //print(ci)
    //print(event.detail)
    //this.cUp=true;
    //text(this.cUp,200,100)
    if(event.detail.controllerIndex===0){
    controller1left=true;
  }
  if(event.detail.controllerIndex===1){
  controller2left=true;
}

  }

  if(event.detail.name==="MISCBUTTON_8"){


  //this.cUp=true;
  //text(this.cUp,200,100)
  if(event.detail.controllerIndex===0){
  controller1right=true;
  }
  if(event.detail.controllerIndex===1){
  controller2right=true;
  }

}

},false);

window.addEventListener('gc.button.release', function(event) {
//  fill(255)
    //text("Bruh:"+event.detail.value,200,300)

    if(event.detail.name==="MISCBUTTON_5"){
      //print(ci)
    //print(event.detail)
    //this.cUp=true;
    //text(this.cUp,200,100)
    if(event.detail.controllerIndex===0){
    controller1EmoveOut=false;
  }
  if(event.detail.controllerIndex===1){
  controller2EmoveOut=false;
}

  }

  if(event.detail.name==="MISCBUTTON_6"){
  //print(ci)
//print(event.detail)
//this.cUp=true;
//text(this.cUp,200,100)
if(event.detail.controllerIndex===0){
controller1EmoveIn=false;
}
if(event.detail.controllerIndex===1){
controller2EmoveIn=false;
}

}

    if(event.detail.name==="MISCBUTTON_7"){

      //print(event.detail)
    //this.cUp=true;
    //text(this.cUp,200,100)
    if(event.detail.controllerIndex===0){
    controller1left=false;
    }
    if(event.detail.controllerIndex===1){
    controller2left=false;
    }

  }

  if(event.detail.name==="MISCBUTTON_8"){


  //this.cUp=true;
  //text(this.cUp,200,100)
  if(event.detail.controllerIndex===0){
  controller1right=false;
  }
  if(event.detail.controllerIndex===1){
  controller2right=false;
  }

  if(event.detail.name==="MISCBUTTON_4"){
    //print(ci)
  //print(event.detail)
  //this.cUp=true;
  //text(this.cUp,200,100)
  if(event.detail.controllerIndex===0){
  controller1flip=false;
}
if(event.detail.controllerIndex===1){
controller2flip=false;
}

}

}


},false);


Controller.search();
var controllerA;

var controllerB;



  window.addEventListener('gc.controller.found', function(event) {
      var controller = event.detail.controller;
      console.log("Controller found at index " + controller.index + ".");
      console.log("'" + controller.name + "' is ready!");
      if(controller.index===0){
      controllerA=true
      }
      if(controller.index===1){
      controllerB=true
      }
  }, false);

console.log(controllerA)
var controls1player;
var controls2player;
var controls3player;
var controls4player;



function sigmoid(x){

return (1/(1+pow(Euler,-x)))

}

function multiplyMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function addMatrices(m1,m2){


	var result=[];
	for(var i=0; i<m1.length; i++){

		result[i]=[];
		for(var j=0; j<m1[i].length; j++){

			result[i][j]=m1[i][j]+m2[i][j]

		}


	}
	return result;

}

function sigMatrix(m){

var result=[];

for(var i=0; i<m.length; i++){
	result[i]=[];

		//result[i][j]=sigmoid(m[i][j])

		for(var j=0; j<m[i].length; j++){

			result[i][j]=sigmoid(m[i][j])

		}


	}
return result;
}



class drone{

constructor(x,y,size,thrustControlLeft,thrustControlRight,thrustAngleLeft,thrustAngleRight,flipButton,indexc,color,texture,exhaustColor,id){
this.x=x
this.y=y
this.size=size

this.id=id

this.thrustControlLeft=thrustControlLeft;
this.thrustControlRight=thrustControlRight;
this.thrustAngleLeft=thrustAngleLeft;
this.thrustAngleRight=thrustAngleRight;

this.flipButton=flipButton;

//this.tanglel=45;
//this.tangler=315;

this.tanglel=15;
this.tangler=345;

this.color=color

this.r=color.r
this.g=color.g
this.b=color.b

this.texture=texture;

this.engineOn=[false,false];

this.inputs=[false,false,false,false,false]


this.flipWait=0;

this.controllerIndex=indexc

//                             x,y,sizeMin,sizeMax,speed,speedMinX,speedMaxX,speedMinY,speedMaxY,lifetime,fade,drag,rate,color,angle     //{r:255,g:119,b:0}
this.smoke=new ParticleEmitter(300,400,20*this.size,40*this.size,20*this.size,0.8*this.size,4*this.size,2*this.size,2*this.size,1000,1000,0.97,0,{r:180,g:180,b:180},0)

this.smoke2=new ParticleEmitter(300,400,20*this.size,40*this.size,20*this.size,0.8*this.size,4*this.size,2*this.size,2*this.size,1000,1000,0.97,0,{r:exhaustColor.r,g:exhaustColor.g,b:exhaustColor.b},0)

this.smoke3=new ParticleEmitter(300,400,20*this.size,40*this.size,20*this.size,0.8*this.size,4*this.size,2*this.size,2*this.size,1000,1000,0.97,0,{r:180,g:180,b:180},0)

this.smoke4=new ParticleEmitter(300,400,20*this.size,40*this.size,20*this.size,0.8*this.size,4*this.size,2*this.size,2*this.size,1000,1000,0.97,0,{r:exhaustColor.r,g:exhaustColor.g,b:exhaustColor.b},0)

this.smokeidle1=new ParticleEmitter(300,400,10*this.size,20*this.size,1.5,0.4,2,1,1,500,500,0.97,0,{r:180,g:180,b:180},0)
this.smokeidle2=new ParticleEmitter(300,400,10*this.size,20*this.size,1.5,0.4,2,1,1,500,500,0.97,0,{r:180,g:180,b:180},0)


this.cbox=Bodies.rectangle(this.x,this.y, 142, 50);
this.cbox.label="dronehitbox"
Matter.Body.scale(this.cbox, this.size, this.size)
Matter.Body.setMass(this.cbox,3.5)
Composite.add(engine.world, [this.cbox]);

//print("Mass:"+this.cbox.mass)

this.fadeout=false;

this.engineSound1;
this.enginesound2;

engineSound1=loadSound('Sound/Engine.wav');
engineSound2=loadSound('Sound/Engine.wav');

engineSound3=loadSound('Sound/Future_Drone_Engine.wav');
engineSound4=loadSound('Sound/Future_Drone_Engine.wav');


if(this.texture===2){

this.engineSound1=engineSound3
this.engineSound2=engineSound4

}
else{

this.engineSound1=engineSound1
this.engineSound2=engineSound2

}




//this.brain=new NeuralNetwork(7,10,2)
//this.brain.random()

}

display(){




  let dronethruster1=[this.cbox.vertices[3].x,this.cbox.vertices[3].y];
  let dronethruster2=[this.cbox.vertices[2].x,this.cbox.vertices[2].y];




	this.smoke2.display()
	this.smoke2.updateAngle((this.cbox.angle*180/Math.PI)-180+this.tanglel)
	this.smoke2.updateLocation(dronethruster1[0],dronethruster1[1])


	this.smoke.display()
	this.smoke.updateAngle((this.cbox.angle*180/Math.PI)-180+this.tanglel)
	this.smoke.updateLocation(dronethruster1[0],dronethruster1[1])


	this.smoke4.display()
	this.smoke4.updateAngle((this.cbox.angle*180/Math.PI)-180+this.tangler)
	this.smoke4.updateLocation(dronethruster2[0],dronethruster2[1])

	this.smoke3.display()
	this.smoke3.updateAngle((this.cbox.angle*180/Math.PI)-180+this.tangler)
	this.smoke3.updateLocation(dronethruster2[0],dronethruster2[1])

  this.smokeidle1.display()
	this.smokeidle1.updateAngle((this.cbox.angle*180/Math.PI)-180+this.tangler)
	this.smokeidle1.updateLocation(dronethruster2[0],dronethruster2[1])

  this.smokeidle2.display()
	this.smokeidle2.updateAngle((this.cbox.angle*180/Math.PI)-180+this.tanglel)
	this.smokeidle2.updateLocation(dronethruster1[0],dronethruster1[1])

angleMode(RADIANS)



    dronetexture(this.x,this.y,this.cbox.angle,this.tanglel,this.tangler,this.size,this.color,this.texture,this.engineOn)

    textAlign(CENTER)
    textSize(20)
    fill(255)
    text("P"+this.id,this.x,this.y-30)

angleMode(DEGREES)
	//var nout=this.brain.output([[(width/2)-this.x],[(height/2)-this.y],[this.cbox.velocity.x],[this.cbox.velocity.x],[cos(this.cbox.angle)],[sin(this.cbox.angle)],[this.cbox.angularVelocity]])
















}

displayIcon(scores){


  if(this.id===1){



    fill(255)
    textSize(20)
    textAlign(LEFT)
    //text("White:"+pointsP1,10,30)
    if(scores){
    text("Points:"+pointsP1,100,115)
    }
    text("Player 1 Engines Angle:"+this.tanglel,10,30)
    fill(0,0,0,100)
    rectMode(CENTER)
    rect(50,80,90,90,5)
    dronetexture(50,75,0,this.tanglel,this.tangler,0.5,p1Color,player1skin,[false,false])





  }

  if(this.id===2){
    fill(255)
    textSize(20)
    textAlign(LEFT)
    //text("White:"+pointsP1,10,30)
    textAlign(RIGHT)
    if(scores){
    text("Points:"+pointsP2,width-100,115)
    }
    text("Player 2 Engines Angle:"+this.tanglel,width-10,30)
    fill(0,0,0,100)
    rectMode(CENTER)
    rect(width-50,80,90,90,5)
    dronetexture(width-50,75,0,this.tanglel,this.tangler,0.5,p2Color,player2skin,[false,false])



  }

  if(this.id===3){

    fill(255)
    textSize(20)
    textAlign(LEFT)
    //text("White:"+pointsP1,10,30)
    text("Player 3 Engines Angle:"+this.tanglel,10,height-10)
    if(scores){
    text("Points:"+pointsP3,100,height-100)
    }
    fill(0,0,0,100)
    rectMode(CENTER)
    rect(50,height-80,90,90,5)
    dronetexture(50,height-80,0,this.tanglel,this.tangler,0.5,p3Color,player3skin,[false,false])


  }

  if(this.id===4){
    fill(255)
    textSize(20)
    textAlign(RIGHT)
    //text("White:"+pointsP1,10,30)
    text("Player 4 Engines Angle:"+this.tanglel,width-10,height-10)
    if(scores){
    text("Points:"+pointsP4,width-100,height-100)
    }
    fill(0,0,0,100)
    rectMode(CENTER)
    rect(width-50,height-80,90,90,5)
    dronetexture(width-50,height-80,0,this.tanglel,this.tangler,0.5,p4Color,player4skin,[false,false])


  }


}

updatePosition(){

  this.x=this.cbox.position.x;
  this.y=this.cbox.position.y


}

calculatePosition(controls){


  this.thrustControlLeft=controls[this.id-1][0]
  this.thrustControlRight=controls[this.id-1][1]
  this.thrustAngleLeft=controls[this.id-1][2]
  this.thrustAngleRight=controls[this.id-1][3]
  this.flipButton=controls[this.id-1][4]



  let dronethruster1=[this.cbox.vertices[3].x,this.cbox.vertices[3].y];
  let dronethruster2=[this.cbox.vertices[2].x,this.cbox.vertices[2].y];


  let powermult=0.008;




  var power1=-powermult*gamesize
  var power2=-powermult*gamesize
  //print(this.thrustControlLeft)



  if(this.thrustAngleLeft){

  this.tanglel++
  this.tangler--


  }



  if(this.thrustAngleRight){

  this.tanglel--
  this.tangler++

  }










  //print(bruh)
  //text(bruh,200,200)
    //print(this.cUp)

  if(this.thrustControlLeft){
  //print("test")
  var thruster1x=(power1) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)
  var thruster1y=(power1) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)

  this.smoke2.emit(1)
  this.smoke.emit(1)
  this.engineOn[0]=true;
  //
  Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[3].x, y: this.cbox.vertices[3].y}, {x: thruster1x, y: thruster1y})

  if (this.engineSound1.isPlaying()) {
  this.engineSound1.setVolume(1,0.001)


  }

  if (this.engineSound1.isPlaying()===false) {
  this.engineSound1.setVolume(1)
  this.engineSound1.rate(random(1.8,2))
  this.engineSound1.play();



  //


  }
  }

  if(this.thrustControlRight){

  var thruster2x=(power2) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)
  var thruster2y=(power2) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)


  this.smoke4.emit(1)
  this.smoke3.emit(1)
  this.engineOn[1]=true;

  Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[2].x, y: this.cbox.vertices[2].y}, {x: thruster2x, y: thruster2y})
  if (this.engineSound2.isPlaying()) {
  this.engineSound2.setVolume(1,0.001)


  }

  if (this.engineSound2.isPlaying()===false) {
  this.engineSound2.setVolume(1)
  this.engineSound2.rate(random(1.8,2))
  this.engineSound2.play();


  //


  }

  }



  if(this.thrustControlLeft!==true){



  this.smokeidle2.emit(1)
  this.engineSound1.setVolume(0,0.1)
  this.engineOn[0]=false;

  }


  if(this.thrustControlRight!==true){
  this.smokeidle1.emit(1)
  this.engineSound2.setVolume(0,0.1)
  this.engineOn[1]=false;
  }




  if(this.flipButton && this.flipWait<millis()){


  Matter.Body.applyForce(this.cbox,{x:this.cbox.position.x,y:this.cbox.position.y},{x:0,y:-0.08*gamesize})
  Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[3].x, y: this.cbox.vertices[3].y}, {x: 0, y: -0.12*gamesize})

  if(controller1flip===true){
  controller1flip=false;
  }
  if(controller2flip===true){
  controller2flip=false;
  }

  this.flipWait=millis()+1000;



  }


}





getPosition(){

return {x:this.x,y:this.y}

}

getAngle(){

return this.tanglel;

}

getDroneAngle(){

return this.cbox.angle*180/Math.PI;

}

}







class ParticleEmitter {

constructor(x,y,sizeMin,sizeMax,speed,speedMinX,speedMaxX,speedMinY,speedMaxY,lifetime,fade,drag,rate,color,angle){

	this.particles=[]

	this.deleted=[];

	this.x=x
	this.y=y
	this.sizeMin=sizeMin
	this.sizeMax=sizeMax
	this.speed=speed
	this.speedMinX=speedMinX
	this.speedMaxX=speedMaxX
	this.speedMinY=speedMinY
	this.speedMaxY=speedMaxY
	this.lifetime=lifetime
	this.fade=fade
	this.drag=drag
	this.rate=rate
	this.color=color
	this.angle=angle
  this.fadetimer=0;
  this.angularVelocity=(Math.random()*0.1)-(0.1/2)
  this.rotation=Math.random()*360;



  this.smoketextures=[];

  for(var i=0; i<255; i++){

    var smokeg=createGraphics(32,32)

    smokeg.tint(this.color.r,this.color.g,this.color.b,i)
    smokeg.image(smoketex,0,0,32,32)

    this.smoketextures.push(smokeg)


  }
  //this.smoketex2.rect(-10,-10,20,20)

	this.lastparticle=0;




}

emit(amount){

if(this.lastparticle<millis()){


		for(var i=0; i<amount; i++){

    let size=random(this.sizeMin,this.sizeMax)




		let velocityX = (this.speed) * Math.cos((this.angle-90) * Math.PI / 180);
		let velocityY = (this.speed) * Math.sin((this.angle-90) * Math.PI / 180);

		let speedX=random(this.speedMinX,this.speedMaxX)
		let speedY=random(this.speedMinY,this.speedMaxY)

		velocityX=random(-speedX+velocityX,speedX+velocityX)
		velocityY=random(-speedY+velocityY,speedY+velocityY)


		this.particles.push({x:this.x,y:this.y,size:size,vx:velocityX,vy:velocityY,speedX:speedX,speedY:speedY,lifetime:millis()+this.lifetime,opacity:50,fade:this.fade,drag:this.drag,angle:this.angle})

		this.lastparticle=millis()+this.rate

		}


}


}

display(){


pamount=pamount+this.particles.length
	for(var i=0; i<this.particles.length; i++){



		var outline=200;
//stroke(0,0,0,particles[i].opacity+20)
		//strokeWeight(this.particles[i].size);
		//stroke(this.color.r,this.color.g,this.color.b,this.particles[i].opacity)
		//point(this.particles[i].x,this.particles[i].y)


    //smokeRender.noFill();
    //smokeRender.stroke(255);
    //tint(this.color.r,this.color.g,this.color.b,this.particles[i].opacity)
    //image(smoketex, 0, 0, 10,10);

    //image(this.smoketex2,200,200,32,32);

    push()

    //translate(-64,-64)
    translate(this.particles[i].x, this.particles[i].y)


    rotate(this.rotation)
    scale(this.particles[i].size/10)



    blendMode(ADD)

    var op=round(this.particles[i].opacity)

    if(op<0){
      op=0;
    }
    if(op>255){
      op=255
    }
    if(this.smoketextures[op]!==undefined){
    image(this.smoketextures[op],-16,-16,32,32);
    }
    noTint()
		//ellipse(this.particles[i].x,this.particles[i].y,20,20)
    pop()

		noStroke()
    blendMode(BLEND)
    this.rotation+=0.001



		this.particles[i].size+=0.8;
		this.particles[i].x+=(this.particles[i].vx)
		this.particles[i].y+=(this.particles[i].vy)

		//this.particles[i].x += this.particles[i].vx * Math.cos((this.particles[i].angle-90) * Math.PI / 180);
		//this.particles[i].y += this.particles[i].vy * Math.sin((this.particles[i].angle-90) * Math.PI / 180);



		this.particles[i].vx=this.particles[i].vx*this.particles[i].drag
		this.particles[i].vy=this.particles[i].vy*this.particles[i].drag

		//print(this.particles[i].drag)

    if(this.fadetimer<millis()){
		this.particles[i].opacity=this.particles[i].opacity-(50/(this.particles[i].fade/25))

    }
      //(30/this.particles[i].fade)



		if(this.particles[i].lifetime<millis() || this.particles[i].opacity<1){


			this.deleted.push(i)


		}

	}

  if(this.fadetimer<millis()){

this.fadetimer=millis()+10

  }


	for(var i=0;i<this.deleted.length; i++){

		this.particles.splice(this.deleted[i],1)



	}

	this.deleted=[]


}


updateAngle(angle){

	this.angle=angle

}

updateLocation(x,y){

this.x=x
this.y=y


}


}

class ParticleEmitterempty {

constructor(x,y,sizeMin,sizeMax,speed,speedMinX,speedMaxX,speedMinY,speedMaxY,lifetime,fade,drag,rate,color,angle){

	this.particles=[]

	this.deleted=[];

	this.x=x
	this.y=y
	this.sizeMin=sizeMin
	this.sizeMax=sizeMax
	this.speed=speed
	this.speedMinX=speedMinX
	this.speedMaxX=speedMaxX
	this.speedMinY=speedMinY
	this.speedMaxY=speedMaxY
	this.lifetime=lifetime
	this.fade=fade
	this.drag=drag
	this.rate=rate
	this.color=color
	this.angle=angle
  this.fadetimer=0;
  this.angularVelocity=(Math.random()*0.1)-(0.1/2)
  this.rotation=Math.random()*360;



  this.smoketextures=[];

  for(var i=0; i<255; i++){

    var smokeg=createGraphics(32,32)

    smokeg.tint(this.color.r,this.color.g,this.color.b,i)
    smokeg.image(smoketex,0,0,32,32)

    this.smoketextures.push(smokeg)


  }
  //this.smoketex2.rect(-10,-10,20,20)

	this.lastparticle=0;




}

emit(amount){}

display(){}


updateAngle(angle){}

updateLocation(x,y){}


}

// module aliases
var Engine = Matter.Engine,
   // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();
var ground;

//engine.gravity=engine.gravity*gamesize;
engine.world.gravity.y=engine.world.gravity.y*2
engine.world.gravity.y=engine.world.gravity.y*gamesize

function preload() {
  smoketex = loadImage('smoke.png');

  TemplateDroneBody = loadImage('Drone_Textures/Template_Drone/Drone_Body.png');
  TemplateDroneThruster = loadImage('Drone_Textures/Template_Drone/Drone_Thruster.png');
  TemplateDroneStruts = loadImage('Drone_Textures/Template_Drone/Drone_Struts.png');
  textures.push([TemplateDroneBody,TemplateDroneThruster,TemplateDroneStruts])
  ExhaustColors.push({r:255,g:119,b:0})

  CautionDroneBody = loadImage('Drone_Textures/Caution_Drone/Drone_Body.png');
  CautionDroneThruster = loadImage('Drone_Textures/Caution_Drone/Drone_Thruster.png');
  CautionDroneStruts = loadImage('Drone_Textures/Caution_Drone/Drone_Struts.png');
  textures.push([CautionDroneBody,CautionDroneThruster,CautionDroneStruts])
  ExhaustColors.push({r:255,g:119,b:0})

  FutureDroneBody = loadImage('Drone_Textures/Future_Drone/Drone_Body.png');
  FutureDroneThruster = loadImage('Drone_Textures/Future_Drone/Drone_Thruster.png');
  FutureDroneStruts = loadImage('Drone_Textures/Future_Drone/Drone_Struts.png');
  textures.push([FutureDroneBody,FutureDroneThruster,FutureDroneStruts])
  ExhaustColors.push({r:17,g:101,b:255})

  CodeDroneBody = loadImage('Drone_Textures/Code_Drone/Drone_Body.png');
  CodeDroneThruster = loadImage('Drone_Textures/Code_Drone/Drone_Thruster.png');
  CodeDroneStruts = loadImage('Drone_Textures/Code_Drone/Drone_Struts.png');
  textures.push([CodeDroneBody,CodeDroneThruster,CodeDroneStruts]);
  ExhaustColors.push({r:255,g:119,b:0})

  EnergizerDroneBody = loadImage('Drone_Textures/Energizer_Drone/Drone_Body.png');
  EnergizerDroneThruster = loadImage('Drone_Textures/Energizer_Drone/Drone_Thruster.png');
  EnergizerDroneStruts = loadImage('Drone_Textures/Energizer_Drone/Drone_Struts.png');
  textures.push([EnergizerDroneBody,EnergizerDroneThruster,EnergizerDroneStruts])
  //145,87,187
  ExhaustColors.push({r:255,g:119,b:0})

  FrameworkDroneBody = loadImage('Drone_Textures/Framework_Drone/Drone_Body.png');
  FrameworkDroneThruster = loadImage('Drone_Textures/Framework_Drone/Drone_Thruster.png');
  FrameworkDroneStruts = loadImage('Drone_Textures/Framework_Drone/Drone_Struts.png');
  textures.push([FrameworkDroneBody,FrameworkDroneThruster,FrameworkDroneStruts])
  ExhaustColors.push({r:255,g:50,b:0})
  //for(var i=0; i<50; i++){

  //}


  FlameImage=loadImage('Drone_Textures/Flame.png');












}


function setup() {

  flameg=createGraphics(25,50)

  flameg.tint(150,150,255)
  flameg.image(FlameImage,0,0,25,50)

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      touchScreen=true;
  }

  createCanvas(windowWidth, windowHeight);
pixelDensity(1)


smokeRender = createGraphics(400, 200);

ground = Bodies.rectangle(width/2, height+30, width+1000, 60, { isStatic: true });
roof = Bodies.rectangle(width/2, -30, width+1000, 60, { isStatic: true });
ground.restitution=0.25;

wall1 = Bodies.rectangle(-30, height/2, 60, height+1000, { isStatic: true });
wall2 = Bodies.rectangle(width+30, height/2, 60, height+1000, { isStatic: true });



//Composite.add(engine.world, [ground,roof,wall1,wall2]);

resetBodies=engine.world.bodies


noStroke()



Engine.run(engine)

//console.log(boxA)
console.log(ground)

/*drones.push(new drone((width/2)+200,height-100,gamesize,0,0,0,0,0,0,{r:255,g:255,b:255}))

drones.push(new drone((width/2)-100,height-100,gamesize,0,0,0,0,0,1,{r:255,g:0,b:0}))
//65,68,81,69,83
drones.push(new drone((width/2)+100,height-100,gamesize,65,68,81,69,83,2,{r:0,g:0,b:255}))

drones.push(new drone((width/2)-200,height-100,gamesize,74,76,85,79,75,3,{r:0,g:255,b:0}))*/




//drones.push(new drone((width/2)+200,500,0.5,37,39,0,0,38))



goal={x:random(20,width-20),y:random(20,height-50)}


cam.x=-width/2
cam.y=-height/2


}






//var testpart=new ParticleEmitter(300,400,30,60,3,0.4,2,1,1,1000,1000,1,0,{r:180,g:180,b:180},0)





var gravity=0.1

var nextgeneration=[];

var timer=0;

//var drone1=new drone(500,500,0.5,81,69,37,0)

var goalSize=200;

//translate(-cam.x-((width/2)-((width/2))/cam.zoom),-cam.y-((height/2)-((height/2))/cam.zoom))


function button(x,y,w,h,adjustForCamera){

  var camax=(cam.x-((width/2)-((width/2)))/cam.zoom)
  var camay=(cam.y-((height/2)-((height/2)))/cam.zoom)

if(debug===true){
  rectMode(CENTER)
fill(255,0,0,100)
push()

scale(1/cam.zoom)
translate(camax,camay)
//ellipse(mouseX,mouseY,50,50)
rect((x*tf.s)+(tf.x),(y*tf.s)+tf.y,w*tf.s,h*tf.s)


pop()

}

if(touchScreen){
  hit = collidePointRect(touches[0].x, touches[0].y, x-(w/2), y-(h/2), w, h);
}
else{
  if(adjustForCamera){
    hit = collidePointRect(mouseX, mouseY, ((x-(w/2))*tf.s)+(tf.x),((y-h/2)*tf.s)+tf.y,w*tf.s,h*tf.s);
  }
  else{
    hit = collidePointRect(mouseX, mouseY, x-(w/2), y-(h/2), w, h);
  }
}


if(mouseIsPressed && hit && clicked===false || touches.length>0 && hit && clicked===false){
clicked=true;
return [true,hit]
}
else{return [false,hit]}




}

function buttonPressed(x,y,w,h){

if(debug===true){
  rectMode(CENTER)
fill(255,0,0,100)
rect(x,y,w,h)
}

hit = collidePointRect(mouseX, mouseY, x-(w/2), y-(h/2), w, h);


if(mouseIsPressed && hit){

return [true,hit]
}
else{return [false,hit]}




}

//var dronethruster1=[boxA.vertices[3].x,boxA.vertices[3].y];

//var dronethruster2=[boxA.vertices[2].x,boxA.vertices[2].y];

var ar=0;
var al=360;

var fpscounter=0;

var fpsamount=0;

var fpstimer=0;

var displayfps=0;



var positioncounter=0;




function draw() {


  controls1player=[[keys[65],keys[68],keys[81],keys[69],keys[83]]]
  controls2player=[[keys[65],keys[68],keys[81],keys[69],keys[83]],[keys[74],keys[76],keys[85],keys[79],keys[75]]]

  controls3player=[[controller1left,controller1right,controller1EmoveOut,controller1EmoveIn,controller1flip],[keys[65],keys[68],keys[81],keys[69],keys[83]],[keys[74],keys[76],keys[85],keys[79],keys[75]]]

  controls4player=[[controller1left,controller1right,controller1EmoveOut,controller1EmoveIn,controller1flip],[controller2left,controller2right,controller2EmoveOut,controller2EmoveIn,controller2flip],[keys[65],keys[68],keys[81],keys[69],keys[83]],[keys[74],keys[76],keys[85],keys[79],keys[75]]]




fpscounter=fpscounter+frameRate()
fpsamount++;

if(fpstimer<millis()){

  displayfps=(fpscounter/fpsamount)

  fpscounter=0;
  fpsamount=0;

  fpstimer=millis()+100
}

  if(controllerA===true && players===1){

  controls1player=[[controller1left,controller1right,controller1EmoveOut,controller1EmoveIn,controller1flip]]


  }

  if(controllerA===true && players===2){

  controls2player=[[controller1left,controller1right,controller1EmoveOut,controller1EmoveIn,controller1flip],[keys[65],keys[68],keys[81],keys[69],keys[83]]]


  }

  if(controllerA===true && controllerB===true && players===2){

  controls4player=[[controller1left,controller1right,controller1EmoveOut,controller1EmoveIn,controller1flip],[controller2left,controller2right,controller2EmoveOut,controller2EmoveIn,controller2flip]]

  }

  if(controllerB===true){
  //controls3player=[[0,0,0,0,0],[0,0,0,0,0],[65,68,81,69,83]]
  controls3player=[[controller1left,controller1right,controller1EmoveOut,controller1EmoveIn,controller1flip],[controller2left,controller2right,controller2EmoveOut,controller2EmoveIn,controller2flip],[keys[65],keys[68],keys[81],keys[69],keys[83]]]

  }

timer++;



background(53,81,92)



if(loading===1){

  ground = Bodies.rectangle(width/2, height+30, width+1000, 60, { isStatic: true });
  roof = Bodies.rectangle(width/2, -30, width+1000, 60, { isStatic: true });
  ground.restitution=0.25;

  wall1 = Bodies.rectangle(-30, height/2, 60, height+1000, { isStatic: true });
  wall2 = Bodies.rectangle(width+30, height/2, 60, height+1000, { isStatic: true });



  Composite.add(engine.world, [ground,roof,wall1,wall2]);

  if(players===1){

    drones.push(new drone((width/2)-200,height-100,gamesize,controls1player[0][0],controls1player[0][1],controls1player[0][2],controls1player[0][3],controls1player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
  }
  if(players===2){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls2player[0][0],controls2player[0][1],controls2player[0][2],controls2player[0][3],controls2player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls2player[1][0],controls2player[1][1],controls2player[1][2],controls2player[1][3],controls2player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))

  }
  if(players===3){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls3player[0][0],controls3player[0][1],controls3player[0][2],controls3player[0][3],controls3player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls3player[1][0],controls3player[1][1],controls3player[1][2],controls3player[1][3],controls3player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls3player[2][0],controls3player[2][1],controls3player[2][2],controls3player[2][3],controls3player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))

  }
  if(players===4){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls4player[0][0],controls4player[0][1],controls4player[0][2],controls4player[0][3],controls4player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls4player[1][0],controls4player[1][1],controls4player[1][2],controls4player[1][3],controls4player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls4player[2][0],controls4player[2][1],controls4player[2][2],controls4player[2][3],controls4player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))
    drones.push(new drone((width/2)+200,height-100,gamesize,controls4player[3][0],controls4player[3][1],controls4player[3][2],controls4player[3][3],controls4player[3][4],2,p4Color,player4skin,p4ExhaustColor,4))


  }



    scene=1;
    loading=false;


}

if(scene===1){

//drone1.display()

positioncounter++;



for(var i=0; i<drones.length; i++){

var controls=[];

if(players===1){

controls=controls1player;

}
if(players===2){

controls=controls2player;

}
if(players===3){

controls=controls3player;

}
if(players===4){

controls=controls4player;

}

drones[i].display();
drones[i].calculatePosition(controls);
drones[i].updatePosition();





if(goalSize<15){

goalSize=15;

}
//text(round(drones[i].getPosition().x)+","+round(drones[i].getPosition().y),20,80+(20*i))

hitgoal = collidePointCircle(goal.x, goal.y, round(drones[i].getPosition().x), round(drones[i].getPosition().y), goalSize+10);

if(hitgoal){

goal={x:random(20,width-20),y:random(20,height-50)}
if(i===0){
pointsP1++;
goalSize=goalSize-4;
}
if(i===1){
pointsP2++;
goalSize=goalSize-4;
}
if(i===2){
pointsP3++;
goalSize=goalSize-4;
}
if(i===3){
pointsP4++;
goalSize=goalSize-4;
}

}

}

for(var i=0; i<drones.length; i++){

drones[i].displayIcon(true);

}





if(positioncounter===2){
positioncounter=0;
}

fill(218,165,32)
ellipse(goal.x,goal.y,goalSize,goalSize)

if(pointsP1===20){

textAlign(CENTER)
textSize(40)
text("WHITE PLAYER WINS",width/2,height/2)
text("Press R to restart",width/2,(height/2)+100)
goal={x:-2000,y:-2000}

}

if(pointsP2===20){

textAlign(CENTER)
textSize(40)
text("RED PLAYER WINS",width/2,height/2)
text("Press R to restart",width/2,(height/2)+100)
goal={x:-2000,y:-2000}
}

if(pointsP3===20){

textAlign(CENTER)
textSize(40)
text("BLUE PLAYER WINS",width/2,height/2)
text("Press R to restart",width/2,(height/2)+100)
goal={x:-2000,y:-2000}
}

if(pointsP4===20){

textAlign(CENTER)
textSize(40)
text("GREEN PLAYER WINS",width/2,height/2)
text("Press R to restart",width/2,(height/2)+100)
goal={x:-2000,y:-2000}
}












var backButton=button(width/2,50,100,100)

if(backButton[1]===false){
fill(50,50,50,150)
}
if(backButton[1]){
fill(70,70,70,150)
}
rect(width/2,50,100,100,5)
fill(255)
textSize(40)
textAlign(CENTER)
text("Back",width/2,50+12)
if(backButton[0]){

  scene=0
  drones=[];
  Matter.World.clear(engine.world);

}



}

if(loading===2){



  if(players===1){

    drones.push(new drone((width/2)-200,height-100,gamesize,controls1player[0][0],controls1player[0][1],controls1player[0][2],controls1player[0][3],controls1player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
  }
  if(players===2){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls2player[0][0],controls2player[0][1],controls2player[0][2],controls2player[0][3],controls2player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls2player[1][0],controls2player[1][1],controls2player[1][2],controls2player[1][3],controls2player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))

  }
  if(players===3){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls3player[0][0],controls3player[0][1],controls3player[0][2],controls3player[0][3],controls3player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls3player[1][0],controls3player[1][1],controls3player[1][2],controls3player[1][3],controls3player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls3player[2][0],controls3player[2][1],controls3player[2][2],controls3player[2][3],controls3player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))

  }
  if(players===4){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls4player[0][0],controls4player[0][1],controls4player[0][2],controls4player[0][3],controls4player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls4player[1][0],controls4player[1][1],controls4player[1][2],controls4player[1][3],controls4player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls4player[2][0],controls4player[2][1],controls4player[2][2],controls4player[2][3],controls4player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))
    drones.push(new drone((width/2)+200,height-100,gamesize,controls4player[3][0],controls4player[3][1],controls4player[3][2],controls4player[3][3],controls4player[3][4],2,p4Color,player4skin,p4ExhaustColor,4))


  }

  ground = Bodies.rectangle(width/2, height+30, width+1000, 60, { isStatic: true });
  roof = Bodies.rectangle(width/2, -30, width+1000, 60, { isStatic: true });
  ground.restitution=0.25;

  wall1 = Bodies.rectangle(-30, height/2, 60, height+1000, { isStatic: true });
  wall2 = Bodies.rectangle(width+30, height/2, 60, height+1000, { isStatic: true });



  Composite.add(engine.world, [ground,roof,wall1,wall2]);

    scene=2;
    loading=false;


}

if(scene===2){



  textSize(30)
  textAlign(CENTER)
  fill(255)
  if(droneIt===0){

  text("PLAYER 1 IS IT!",width/2,140)

  }

  if(droneIt===1){

  text("PLAYER 2 IS IT!",width/2,140)

  }

  if(droneIt===2){

  text("PLAYER 3 IS IT!",width/2,140)

  }

  if(droneIt===3){

  text("PLAYER 4 IS IT!",width/2,140)

  }




for(var i=0; i<drones.length; i++){

  var controls=[];

  if(players===1){

  controls=controls1player;

  }
  if(players===2){

  controls=controls2player;

  }
  if(players===3){

  controls=controls3player;

  }
  if(players===4){

  controls=controls4player;

  }

drones[i].display();
drones[i].calculatePosition(controls);
drones[i].updatePosition();

if(noReTag<millis()){
hitDrone0 = collidePointCircle(drones[0].getPosition().x, drones[0].getPosition().y, round(drones[i].getPosition().x), round(drones[i].getPosition().y), 80);
hitDrone1 = collidePointCircle(drones[1].getPosition().x, drones[1].getPosition().y, round(drones[i].getPosition().x), round(drones[i].getPosition().y), 80);

if(players===3){
hitDrone2 = collidePointCircle(drones[2].getPosition().x, drones[2].getPosition().y, round(drones[i].getPosition().x), round(drones[i].getPosition().y), 80);
}
if(players===4){
hitDrone3 = collidePointCircle(drones[3].getPosition().x, drones[3].getPosition().y, round(drones[i].getPosition().x), round(drones[i].getPosition().y), 80);
}
if(i===droneIt){
if(i===0){
  hitDrone0=false;
}
if(i===1){
  hitDrone1=false;
}
if(i===2){
  hitDrone2=false;
}
if(i===3){
  hitDrone3=false;
}



  if(hitDrone0){
    droneIt=0
    noReTag=millis()+3000;
  }
  if(hitDrone1){
    droneIt=1
    noReTag=millis()+3000;
  }
if(players>2 && players<4){
  if(hitDrone2){
    droneIt=2
    noReTag=millis()+3000;
  }
}
if(players===4){
  if(hitDrone3){
    droneIt=3
    noReTag=millis()+3000;
  }
}


}



}





}

for(var i=0; i<drones.length; i++){

drones[i].displayIcon(true);

}


fill(255,255,255,100)
ellipse(drones[droneIt].getPosition().x,drones[droneIt].getPosition().y,80,80)


var backButton=button(width/2,50,100,100)

if(backButton[1]===false){
fill(50,50,50,150)
}
if(backButton[1]){
fill(70,70,70,150)
}
rect(width/2,50,100,100,5)
fill(255)
textSize(40)
textAlign(CENTER)
text("Back",width/2,50+12)
if(backButton[0]){

  scene=0
  drones=[];
  Matter.World.clear(engine.world);

}


}

if(loading===3){

  if(players===1){

    drones.push(new drone((width/2)-200,height-100,gamesize,controls1player[0][0],controls1player[0][1],controls1player[0][2],controls1player[0][3],controls1player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
  }
  if(players===2){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls2player[0][0],controls2player[0][1],controls2player[0][2],controls2player[0][3],controls2player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls2player[1][0],controls2player[1][1],controls2player[1][2],controls2player[1][3],controls2player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))

  }
  if(players===3){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls3player[0][0],controls3player[0][1],controls3player[0][2],controls3player[0][3],controls3player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls3player[1][0],controls3player[1][1],controls3player[1][2],controls3player[1][3],controls3player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls3player[2][0],controls3player[2][1],controls3player[2][2],controls3player[2][3],controls3player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))

  }
  if(players===4){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls4player[0][0],controls4player[0][1],controls4player[0][2],controls4player[0][3],controls4player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls4player[1][0],controls4player[1][1],controls4player[1][2],controls4player[1][3],controls4player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls4player[2][0],controls4player[2][1],controls4player[2][2],controls4player[2][3],controls4player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))
    drones.push(new drone((width/2)+200,height-100,gamesize,controls4player[3][0],controls4player[3][1],controls4player[3][2],controls4player[3][3],controls4player[3][4],2,p4Color,player4skin,p4ExhaustColor,4))


  }

  ground = Bodies.rectangle(width/2, height+30, width+1000, 60, { isStatic: true });
  roof = Bodies.rectangle(width/2, -30, width+1000, 60, { isStatic: true });
  ground.restitution=0.25;

  wall1 = Bodies.rectangle(-30, height/2, 60, height+1000, { isStatic: true });
  wall2 = Bodies.rectangle(width+30, height/2, 60, height+1000, { isStatic: true });



  Composite.add(engine.world, [ground,roof,wall1,wall2]);

  platform1 = Bodies.rectangle(200, 300, 200, 30, { isStatic: true });
  platform2 = Bodies.rectangle(width-200, 300, 200, 30, { isStatic: true });
  platform3 = Bodies.rectangle(200, height-300, 200, 30, { isStatic: true });
  platform4 = Bodies.rectangle(width-200, height-300, 200, 30, { isStatic: true });
  wallf1 = Bodies.rectangle(width/2, height/2, 30, 400, { isStatic: true });
Composite.add(engine.world, [platform1,platform2,platform3,platform4,wallf1])
    scene=3;
    loading=false;

}

if(scene===3){



  textSize(30)
  textAlign(CENTER)
  fill(255)


  for(var i=0; i<drones.length; i++){

    var controls=[];

    if(players===1){

    controls=controls1player;

    }
    if(players===2){

    controls=controls2player;

    }
    if(players===3){

    controls=controls3player;

    }
    if(players===4){

    controls=controls4player;

    }

  drones[i].display();
  drones[i].calculatePosition(controls);
  drones[i].updatePosition();







  }

  for(var i=0; i<drones.length; i++){

  drones[i].displayIcon(false);

  }


fill(50)
rectMode(CENTER)
rect(200, 300, 200, 30)
rect(width-200, 300, 200, 30)
rect(200, height-300, 200, 30)
rect(width-200, height-300, 200, 30)

rect(width/2, height/2, 30, 400)
rectMode(CORNER)


var backButton=button(width/2,50,100,100)

if(backButton[1]===false){
fill(50,50,50,150)
}
if(backButton[1]){
fill(70,70,70,150)
}
rect(width/2,50,100,100,5)
fill(255)
textSize(40)
textAlign(CENTER)
text("Back",width/2,50+12)
if(backButton[0]){

  scene=0
  drones=[];
  Matter.World.clear(engine.world);

}



}


if(loading===4){




    scene=4;
    loading=false;

}

if(scene===4){
  rectMode(CENTER)
  textAlign(CENTER)

  for(var i=0; i<levels.length; i++){
  //x,y,angle,TangleL,TangleR,size,color,id
  var value=i%5
  var xpos=0;
  var ypos=0;
  var spread=200;

  xpos=(value-2)*spread
  ypos=floor(i/5)*spread;



  var levelButton=button((width/2)+xpos,(height/2)-400+ypos+scrollvalue,180,180)

    push()
    translate(width/2,height/2)
    if(levelButton[1]){
    fill(150,100)
    }
    if(levelButton[1]===false){
    fill(100,100)
    }


    rect(xpos,-400+ypos+scrollvalue,180,180,5)
    fill(255)

    text("Level "+i,xpos,-400+ypos+scrollvalue)
    pop()

    if(levelButton[0]){



      levelSelected=i;




    }




  }


  textSize(30)
  fill(100)
  rect(width/2,40,150,50,5)
  fill(255)
  text("Level "+levelSelected,width/2,50)

  if(keys[40]){

    scrollvalue+=scrollSpeed;

  }
  if(keys[38]){

    scrollvalue-=scrollSpeed;

  }


  var backButton=button(50,height/2,100,100)

  if(backButton[1]===false){
  fill(50)
  }
  if(backButton[1]){
  fill(70)
  }
  rect(50,height/2,100,100,5)
  fill(255)
  textSize(40)
  text("Back",50,height/2+12)
  if(backButton[0]){

  scene=0;

  }

  var playButton=button(width-50,(height/2)-100,100,100)

  if(playButton[1]===false){
  fill(50)
  }
  if(playButton[1]){
  fill(70)
  }
  rect(width-50,(height/2)-100,100,100,5)
  fill(255)
  textSize(40)
  text("Play",width-50,(height/2)-100+12)
  if(playButton[0]){



  loading="Loading Screen"


  }

  var editButton=button(width-50,(height/2)+100,100,100)

  if(editButton[1]===false){
  fill(50)
  }
  if(editButton[1]){
  fill(70)
  }
  rect(width-50,(height/2)+100,100,100,5)
  fill(255)
  textSize(40)
  text("Edit",width-50,(height/2)+100+12)
  if(editButton[0]){



  scene=-10;
  var tempv=JSON.stringify(levels[levelSelected])
  levelObjects=JSON.parse(tempv)


  }








}


//STORY MODE LEVELS

{

if(loading==="Loading Screen"){

scene=false;
textSize(30)
textAlign(CENTER)
text("LOADING...",width/2,height/2)

if(wait<millis() && waiting===false){
wait=millis()+50;
waiting=true;
}

if(wait<millis() && waiting===true){
loading=1000+levelSelected;
waiting=false;
}


}

if(loading===1000){

  var player1spawn={x:0,y:0}
  var player2spawn={x:0,y:0}
  var player3spawn={x:0,y:0}
  var player4spawn={x:0,y:0}

  if(players===1){

    drones.push(new drone(player1spawn.x,player1spawn.y,gamesize,controls1player[0][0],controls1player[0][1],controls1player[0][2],controls1player[0][3],controls1player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
  }
  if(players===2){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls2player[0][0],controls2player[0][1],controls2player[0][2],controls2player[0][3],controls2player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls2player[1][0],controls2player[1][1],controls2player[1][2],controls2player[1][3],controls2player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))

  }
  if(players===3){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls3player[0][0],controls3player[0][1],controls3player[0][2],controls3player[0][3],controls3player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls3player[1][0],controls3player[1][1],controls3player[1][2],controls3player[1][3],controls3player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls3player[2][0],controls3player[2][1],controls3player[2][2],controls3player[2][3],controls3player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))

  }
  if(players===4){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls4player[0][0],controls4player[0][1],controls4player[0][2],controls4player[0][3],controls4player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls4player[1][0],controls4player[1][1],controls4player[1][2],controls4player[1][3],controls4player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls4player[2][0],controls4player[2][1],controls4player[2][2],controls4player[2][3],controls4player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))
    drones.push(new drone((width/2)+200,height-100,gamesize,controls4player[3][0],controls4player[3][1],controls4player[3][2],controls4player[3][3],controls4player[3][4],2,p4Color,player4skin,p4ExhaustColor,4))


  }

  /*rect(750, 1500, 1500, 60)
  rect(750, 0, 1500, 60)

  rect(0, 750, 60, 1500)
  rect(1500, 750, 60, 1500)*/

  /*ground = Bodies.rectangle(750, 1500, 1500, 60, { isStatic: true });

  roof = Bodies.rectangle(750, 0, 1500, 60, { isStatic: true });

  ground.restitution=0.25;

  wall1 = Bodies.rectangle(0, 750, 60, 1500, { isStatic: true });
  wall2 = Bodies.rectangle(1500, 750, 60, 1500, { isStatic: true });



  Composite.add(engine.world, [ground,roof,wall1,wall2]);

  platform1 = Bodies.rectangle(200, 300, 200, 30, { isStatic: true });
  platform2 = Bodies.rectangle(width-200, 300, 200, 30, { isStatic: true });
  platform3 = Bodies.rectangle(200, height-300, 200, 30, { isStatic: true });
  platform4 = Bodies.rectangle(width-200, height-300, 200, 30, { isStatic: true });
  wallf1 = Bodies.rectangle(width/2, height/2, 30, 400, { isStatic: true });
  Composite.add(engine.world, [platform1,platform2,platform3,platform4,wallf1])*/



  for(var i=0; i<levels[0].length; i++){

  print(levels[0][i])

  if(levels[0][i].type==="rect"){
  Composite.add(engine.world, [Bodies.rectangle(levels[0][i].x, levels[0][i].y, levels[0][i].w, levels[0][i].h, { isStatic: true })])
  }

  }

    scene=1000;
    loading=false;


}

if(scene===1000){


  textSize(30)
  textAlign(CENTER)
  fill(255)

  push()


  scale(cam.zoom)

  translate(-cam.x-((width/2)-((width/2))/cam.zoom),-cam.y-((height/2)-((height/2))/cam.zoom))


  //translate(0,height-(height/cam.zoom))
  var cgoalx=0;
  var cgoaly=0;

  var distanceFromCam=0;

  for(var i=0; i<drones.length; i++){

    var controls=[];

    if(players===1){

    controls=controls1player;

    }
    if(players===2){

    controls=controls2player;

    }
    if(players===3){

    controls=controls3player;

    }
    if(players===4){

    controls=controls4player;

    }

  cgoalx=cgoalx+drones[i].x
  cgoaly=cgoaly+drones[i].y

  distanceFromCam+=sqrt(pow((cam.x+width/2)-drones[i].x,2)+pow((cam.y+height/2)-drones[i].y,2))

  drones[i].display();
  drones[i].calculatePosition(controls);
  drones[i].updatePosition();



  //text(round(drones[i].getPosition().x)+","+round(drones[i].getPosition().y),20,80+(20*i))






  }



  cgoalx=cgoalx/drones.length
  cgoaly=cgoaly/drones.length

  distanceFromCam=distanceFromCam/drones.length;

  cam.goal.x=cgoalx
  cam.goal.y=cgoaly



  fill(50)
  rectMode(CENTER)

  for(var i=0; i<levels[0].length; i++){

  fill(levels[0][i].r,levels[0][i].g,levels[0][i].b)
  rectMode(CENTER)
  rect(levels[0][i].x,levels[0][i].y,levels[0][i].w,levels[0][i].h)

  }

  pop()

  for(var i=0; i<drones.length; i++){

  drones[i].displayIcon(true);

  }

  //text(cam.x+","+cam.y,200,200)

  if(cameraMode==="Follow"){

    //cam.goal


    if(cam.x+width/2<cam.goal.x+50){

      cam.accx=-((cam.x+width/2)-cam.goal.x)*cam.speed

    }

    if(cam.x+width/2>cam.goal.x-50){

    cam.accx=(cam.goal.x-(cam.x+width/2))*cam.speed

    }

    if(cam.y+height/2<cam.goal.y+50){

      cam.accy=-((cam.y+height/2)-cam.goal.y)*cam.speed

    }

    if(cam.y+height/2>cam.goal.y-50){

    cam.accy=(cam.goal.y-(cam.y+height/2))*cam.speed

    }



    cam.x+=cam.accx
    cam.y+=cam.accy

    cam.zoom=1/(distanceFromCam/400)
    if(cam.zoom>1.8){

      cam.zoom=1.8;
    }

  }

  var backButton=button(width/2,50,100,100)

  if(backButton[1]===false){
  fill(50,50,50,150)
  }
  if(backButton[1]){
  fill(70,70,70,150)
  }
  rect(width/2,50,100,100,5)
  fill(255)
  textSize(40)
  textAlign(CENTER)
  text("Back",width/2,50+12)
  if(backButton[0]){

    scene=4
    drones=[];
    Matter.World.clear(engine.world);

  }


  //text(frameRate(),200,200)

}

if(loading===1001){

  var player1spawn={x:0,y:0}
  var player2spawn={x:0,y:0}
  var player3spawn={x:0,y:0}
  var player4spawn={x:0,y:0}

  if(players===1){

    drones.push(new drone(player1spawn.x,player1spawn.y,gamesize,controls1player[0][0],controls1player[0][1],controls1player[0][2],controls1player[0][3],controls1player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
  }
  if(players===2){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls2player[0][0],controls2player[0][1],controls2player[0][2],controls2player[0][3],controls2player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls2player[1][0],controls2player[1][1],controls2player[1][2],controls2player[1][3],controls2player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))

  }
  if(players===3){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls3player[0][0],controls3player[0][1],controls3player[0][2],controls3player[0][3],controls3player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls3player[1][0],controls3player[1][1],controls3player[1][2],controls3player[1][3],controls3player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls3player[2][0],controls3player[2][1],controls3player[2][2],controls3player[2][3],controls3player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))

  }
  if(players===4){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls4player[0][0],controls4player[0][1],controls4player[0][2],controls4player[0][3],controls4player[0][4],0,p1Color,player1skin,p1ExhaustColor,1))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls4player[1][0],controls4player[1][1],controls4player[1][2],controls4player[1][3],controls4player[1][4],1,p2Color,player2skin,p2ExhaustColor,2))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls4player[2][0],controls4player[2][1],controls4player[2][2],controls4player[2][3],controls4player[2][4],2,p3Color,player3skin,p3ExhaustColor,3))
    drones.push(new drone((width/2)+200,height-100,gamesize,controls4player[3][0],controls4player[3][1],controls4player[3][2],controls4player[3][3],controls4player[3][4],2,p4Color,player4skin,p4ExhaustColor,4))


  }

  /*rect(750, 1500, 1500, 60)
  rect(750, 0, 1500, 60)

  rect(0, 750, 60, 1500)
  rect(1500, 750, 60, 1500)*/

  /*ground = Bodies.rectangle(750, 1500, 1500, 60, { isStatic: true });

  roof = Bodies.rectangle(750, 0, 1500, 60, { isStatic: true });

  ground.restitution=0.25;

  wall1 = Bodies.rectangle(0, 750, 60, 1500, { isStatic: true });
  wall2 = Bodies.rectangle(1500, 750, 60, 1500, { isStatic: true });



  Composite.add(engine.world, [ground,roof,wall1,wall2]);

  platform1 = Bodies.rectangle(200, 300, 200, 30, { isStatic: true });
  platform2 = Bodies.rectangle(width-200, 300, 200, 30, { isStatic: true });
  platform3 = Bodies.rectangle(200, height-300, 200, 30, { isStatic: true });
  platform4 = Bodies.rectangle(width-200, height-300, 200, 30, { isStatic: true });
  wallf1 = Bodies.rectangle(width/2, height/2, 30, 400, { isStatic: true });
  Composite.add(engine.world, [platform1,platform2,platform3,platform4,wallf1])*/



  for(var i=0; i<levels[1].length; i++){

  print(levels[1][i])

  if(levels[1][i].type==="rect"){
  Composite.add(engine.world, [Bodies.rectangle(levels[1][i].x, levels[1][i].y, levels[1][i].w, levels[1][i].h, { isStatic: true })])
  }

  }

    scene=1001;
    loading=false;


}

if(scene===1001){


  textSize(30)
  textAlign(CENTER)
  fill(255)

  push()


  scale(cam.zoom)

  translate(-cam.x-((width/2)-((width/2))/cam.zoom),-cam.y-((height/2)-((height/2))/cam.zoom))


  //translate(0,height-(height/cam.zoom))
  var cgoalx=0;
  var cgoaly=0;

  var distanceFromCam=0;

  for(var i=0; i<drones.length; i++){

    var controls=[];

    if(players===1){

    controls=controls1player;

    }
    if(players===2){

    controls=controls2player;

    }
    if(players===3){

    controls=controls3player;

    }
    if(players===4){

    controls=controls4player;

    }

  cgoalx=cgoalx+drones[i].x
  cgoaly=cgoaly+drones[i].y

  distanceFromCam+=sqrt(pow((cam.x+width/2)-drones[i].x,2)+pow((cam.y+height/2)-drones[i].y,2))

  drones[i].display();
  drones[i].calculatePosition(controls);
  drones[i].updatePosition();



  //text(round(drones[i].getPosition().x)+","+round(drones[i].getPosition().y),20,80+(20*i))






  }



  cgoalx=cgoalx/drones.length
  cgoaly=cgoaly/drones.length

  distanceFromCam=distanceFromCam/drones.length;

  cam.goal.x=cgoalx
  cam.goal.y=cgoaly



  fill(50)
  rectMode(CENTER)

  for(var i=0; i<levels[1].length; i++){

  fill(levels[1][i].r,levels[1][i].g,levels[1][i].b)
  rectMode(CENTER)
  rect(levels[1][i].x,levels[1][i].y,levels[1][i].w,levels[1][i].h)

  }

  pop()

  for(var i=0; i<drones.length; i++){

  drones[i].displayIcon(true);

  }

  //text(cam.x+","+cam.y,200,200)

  if(cameraMode==="Follow"){

    //cam.goal


    if(cam.x+width/2<cam.goal.x+50){

      cam.accx=-((cam.x+width/2)-cam.goal.x)*cam.speed

    }

    if(cam.x+width/2>cam.goal.x-50){

    cam.accx=(cam.goal.x-(cam.x+width/2))*cam.speed

    }

    if(cam.y+height/2<cam.goal.y+50){

      cam.accy=-((cam.y+height/2)-cam.goal.y)*cam.speed

    }

    if(cam.y+height/2>cam.goal.y-50){

    cam.accy=(cam.goal.y-(cam.y+height/2))*cam.speed

    }



    cam.x+=cam.accx
    cam.y+=cam.accy

    cam.zoom=1/(distanceFromCam/400)
    if(cam.zoom>1.8){

      cam.zoom=1.8;
    }

  }

  var backButton=button(width/2,50,100,100)

  if(backButton[1]===false){
  fill(50,50,50,150)
  }
  if(backButton[1]){
  fill(70,70,70,150)
  }
  rect(width/2,50,100,100,5)
  fill(255)
  textSize(40)
  textAlign(CENTER)
  text("Back",width/2,50+12)
  if(backButton[0]){

    scene=4
    drones=[];
    Matter.World.clear(engine.world);

  }


  //text(frameRate(),200,200)

}


}


if(scene===0){

  var playbutton=button(width/2,height/2-200,400,50)
  var playersincrease=button((width/2)+175,height/2-100,40,40)
  var playersdecrease=button((width/2)-175,height/2-100,40,40)

  var gamemodebutton=button(width/2,height/2,400,50)

  var cosmeticsbutton=button(width/2,height/2+100,400,50)

  var settingsbutton=button(width/2,height/2+200,400,50)

  /*

  var backButton=button(100,height/2,100,100)

  if(backButton[1]===false){
  fill(50)
  }
  if(backButton[1]){
  fill(70)
  }
  rect(100,height/2,100,100,5)
  fill(255)
  textSize(40)
  text("Back",100,height/2+12)
  if(backButton[0]){

  scene=0;

  }
*/


  if(playbutton[0]){
    fill(255)
    text("LOADING...",width/2,height/2)

    loading=gamemode+1;


  }
  //print(button(width/2,height/2,20,20))
  if(loading===false){
  if(playbutton[1]===false){
  fill(50)
  }
  if(playbutton[1]){
  fill(70)
  }
  rectMode(CENTER)
  rect(width/2,height/2-200,400,50,10)
  textAlign(CENTER)
  textSize(20)
  fill(255)
  text("PLAY",width/2,height/2-192.5)



  fill(50)
  rect(width/2,height/2-100,400,50,10)
  fill(255)
  text("PLAYERS: "+players,width/2,height/2+8-100)
  if(playersincrease[1]){
  fill(150)
  }
  if(playersincrease[1]===false){
  fill(100)
  }
  rect((width/2)+175,height/2-100,40,40,10)
  if(playersdecrease[1]){
  fill(150)
  }
  if(playersdecrease[1]===false){
  fill(100)
  }

  rect((width/2)-175,height/2-100,40,40,10)


  if(playersincrease[0]){
    players=players+1;
    if(players>4){
      players=4;
    }
    lastPlayers=players;
  }
  if(playersdecrease[0]){
    players=players-1;
    if(players<1){
      players=1
    }
    lastPlayers=players;
  }


  if(gamemodebutton[1]){
  fill(70)
  }
  if(gamemodebutton[1]===false){
  fill(50)
  }
  rect(width/2,height/2,400,50,10)

  if(gamemodebutton[0]){

    gamemode=gamemode+1;

    if(gamemode>3){
      gamemode=0;
    }

  }

  if(gamemode===0){

    fill(255)
    text("Reach the Goal",width/2,height/2+8)
    if(players>lastPlayers){
      players=lastPlayers
    }
    requiredPlayers=1;
    if(players<requiredPlayers){
      lastPlayers=players;
      players=requiredPlayers

    }


  }

  if(gamemode===1){

    fill(255)
    text("Drone Tag",width/2,height/2+8)
    requiredPlayers=2;
    if(players<requiredPlayers){
      lastPlayers=players;
      players=requiredPlayers

    }


  }

  if(gamemode===2){

    fill(255)
    text("Freeplay",width/2,height/2+8)

    if(players>lastPlayers){
      players=lastPlayers
    }
    requiredPlayers=1;

    if(players<requiredPlayers){
      lastPlayers=players;
      players=requiredPlayers

    }




  }

  if(gamemode===3){

    fill(255)
    text("Story",width/2,height/2+8)

    if(players>lastPlayers){
      players=lastPlayers
    }
    requiredPlayers=1;

    if(players<requiredPlayers){
      lastPlayers=players;
      players=requiredPlayers

    }




  }

  if(cosmeticsbutton[1]){
  fill(70)
  }
  if(cosmeticsbutton[1]===false){
  fill(50)
  }
  rect(width/2,height/2+100,400,50,10)
  fill(255)
  text("Cosmetics",width/2,height/2+108)
  if(cosmeticsbutton[0]){

    scene=100;

  }


  if(settingsbutton[1]){
  fill(70)
  }
  if(settingsbutton[1]===false){
  fill(50)
  }
  rect(width/2,height/2+200,400,50,10)
  fill(255)
  text("Settings",width/2,height/2+208)
  if(settingsbutton[0]){

    scene=-100;

  }



  }





}


if(scene===100){

  var backButton=button(50,height/2,100,100)

  if(backButton[1]===false){
  fill(50)
  }
  if(backButton[1]){
  fill(70)
  }
  rect(50,height/2,100,100,5)
  fill(255)
  textSize(40)
  text("Back",50,height/2+12)
  if(backButton[0]){

  scene=0;

  }

  if(keys[40]){

    scrollvalue+=scrollSpeed;

  }
  if(keys[38]){

    scrollvalue-=scrollSpeed;

  }

  //Player 1 Skin Select

  {
  var player1SkinButton=button(50,80,80,80)
  var player1R=button(20,140,20,20)
  var player1G=button(50,140,20,20)
  var player1B=button(80,140,20,20)

  if(player1SkinButton[1] || selecting===0){
  fill(130,130,130)
  }
  if(player1SkinButton[1]===false && selecting!==0){
  fill(80,80,80)
  }
  rectMode(CENTER)
  rect(50,80,80,80,5)
  textAlign(LEFT)
  textSize(20)
  fill(255)
  text("Player 1 Cosmetics",10,25)
  dronetexture(50,80,0,15,345,0.4,p1Color,player1skin,[false,false])

  if(player1R[1]){
  fill(255,100,100)
  }
  if(player1R[1]===false){
  fill(255,0,0)
  }
  rect(20,140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p1Color.r,20,160)


  if(player1R[0]){

  p1Color.r+=5
  if(p1Color.r>255){

    p1Color.r=0;
  }

  }


  if(player1G[1]){
  fill(150,255,150)
  }
  if(player1G[1]===false){
  fill(0,255,0)
  }
  rect(50,140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p1Color.g,50,160)


  if(player1G[0]){

  p1Color.g+=5
  if(p1Color.g>255){

    p1Color.g=0;
  }

  }

  if(player1B[1]){
  fill(100,100,255)
  }
  if(player1B[1]===false){
  fill(0,0,255)
  }
  rect(80,140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p1Color.b,80,160)

  if(player1B[0]){

  p1Color.b+=5
  if(p1Color.b>255){

    p1Color.b=0;
  }

  }

  if(player1SkinButton[0]){

    selecting=0;

  }
}
  //Player 2 Skin Select
  {

  var player2SkinButton=button(width-50,80,80,80)
  var player2R=button(width-80,140,20,20)
  var player2G=button(width-50,140,20,20)
  var player2B=button(width-20,140,20,20)



  if(player2SkinButton[1] || selecting===1){
  fill(130,130,130)
  }
  if(player2SkinButton[1]===false && selecting!==1){
  fill(80,80,80)
  }
  rectMode(CENTER)
  rect(width-50,80,80,80,5)
  textAlign(RIGHT)
  fill(255)
  textSize(20)
  text("Player 2 Cosmetics",width-10,25)
  dronetexture(width-50,80,0,15,345,0.4,p2Color,player2skin,[false,false])


  if(player2R[1]){
  fill(255,100,100)
  }
  if(player2R[1]===false){
  fill(255,0,0)
  }
  rect(width-80,140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p2Color.r,width-80,160)


  if(player2R[0]){

  p2Color.r+=5
  if(p2Color.r>255){

    p2Color.r=0;
  }

  }


  if(player2G[1]){
  fill(150,255,150)
  }
  if(player2G[1]===false){
  fill(0,255,0)
  }
  rect(width-50,140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p2Color.g,width-50,160)


  if(player2G[0]){

  p2Color.g+=5
  if(p2Color.g>255){

    p2Color.g=0;
  }

  }

  if(player2B[1]){
  fill(100,100,255)
  }
  if(player2B[1]===false){
  fill(0,0,255)
  }
  rect(width-20,140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p2Color.b,width-20,160)

  if(player2B[0]){

  p2Color.b+=5
  if(p2Color.b>255){

    p2Color.b=0;
  }

  }


  if(player2SkinButton[0]){

    selecting=1;

  }
}

  //Player 3 Skin Select
  {
  var player3SkinButton=button(50,height-80,80,80)
  var player3R=button(20,height-140,20,20)
  var player3G=button(50,height-140,20,20)
  var player3B=button(80,height-140,20,20)



  if(player3SkinButton[1] || selecting===2){
  fill(130,130,130)
  }
  if(player3SkinButton[1]===false && selecting!==2){
  fill(80,80,80)
  }
  rectMode(CENTER)
  rect(50,height-80,80,80,5)
  textAlign(LEFT)
  fill(255)
  textSize(20)
  text("Player 3 Cosmetics",10,height-15)
  dronetexture(50,height-80,0,15,345,0.4,p3Color,player3skin,[false,false])


  if(player3R[1]){
  fill(255,100,100)
  }
  if(player3R[1]===false){
  fill(255,0,0)
  }
  rect(20,height-140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p3Color.r,20,height-155)


  if(player3R[0]){

  p3Color.r+=5
  if(p3Color.r>255){

    p3Color.r=0;
  }

  }


  if(player3G[1]){
  fill(150,255,150)
  }
  if(player3G[1]===false){
  fill(0,255,0)
  }
  rect(50,height-140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p3Color.g,50,height-155)


  if(player3G[0]){

  p3Color.g+=5
  if(p3Color.g>255){

    p3Color.g=0;
  }

  }

  if(player3B[1]){
  fill(100,100,255)
  }
  if(player3B[1]===false){
  fill(0,0,255)
  }
  rect(80,height-140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p3Color.b,80,height-155)

  if(player3B[0]){

  p3Color.b+=5
  if(p3Color.b>255){

    p3Color.b=0;
  }

  }



  if(player3SkinButton[0]){

    selecting=2;

  }
}

  //Player 4 Skin Select
  {
  var player4SkinButton=button(width-50,height-80,80,80)
  var player4R=button(width-80,height-140,20,20)
  var player4G=button(width-50,height-140,20,20)
  var player4B=button(width-20,height-140,20,20)



  if(player4SkinButton[1] || selecting===3){
  fill(130,130,130)
  }
  if(player4SkinButton[1]===false && selecting!==3){
  fill(80,80,80)
  }
  rectMode(CENTER)
  rect(width-50,height-80,80,80,5)
  textAlign(RIGHT)
  fill(255)
  textSize(20)
  text("Player 4 Cosmetics",width-10,height-15)
  dronetexture(width-50,height-80,0,15,345,0.4,p4Color,player4skin,[false,false])


  if(player4R[1]){
  fill(255,100,100)
  }
  if(player4R[1]===false){
  fill(255,0,0)
  }
  rect(width-80,height-140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p4Color.r,width-80,height-155)


  if(player4R[0]){

  p4Color.r+=5
  if(p4Color.r>255){

    p4Color.r=0;
  }

  }


  if(player4G[1]){
  fill(150,255,150)
  }
  if(player4G[1]===false){
  fill(0,255,0)
  }
  rect(width-50,height-140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p4Color.g,width-50,height-155)


  if(player4G[0]){

  p4Color.g+=5
  if(p4Color.g>255){

    p4Color.g=0;
  }

  }

  if(player4B[1]){
  fill(100,100,255)
  }
  if(player4B[1]===false){
  fill(0,0,255)
  }
  rect(width-20,height-140,20,20,5)
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text(p4Color.b,width-20,height-155)

  if(player4B[0]){

  p4Color.b+=5
  if(p4Color.b>255){

    p4Color.b=0;
  }

  }


  if(player4SkinButton[0]){

    selecting=3;

  }

}



for(var i=0; i<textures.length; i++){
//x,y,angle,TangleL,TangleR,size,color,id
var value=i%5
var xpos=0;
var ypos=0;
var spread=200;

xpos=(value-2)*spread
ypos=floor(i/5)*spread;



var droneButton=button((width/2)+xpos,(height/2)-400+ypos+scrollvalue,180,180)

  push()
  translate(width/2,height/2)
  if(droneButton[1]){
  fill(150,100)
  }
  if(droneButton[1]===false){
  fill(100,100)
  }

  rect(xpos,-400+ypos+scrollvalue,180,180,5)
  if(i!==0){
  dronetexture(xpos,-400+ypos+scrollvalue,0,15,345,1,{r:100,g:100,b:100},i,[false,false])
  }
  if(i===0){
  dronetexture(xpos,-400+ypos+scrollvalue,0,15,345,1,{r:255,g:255,b:255},i,[false,false])
  }
  pop()

  if(droneButton[0]){

    if(selecting===0){

      player1skin=i;
      p1ExhaustColor=ExhaustColors[i];


    }
    if(selecting===1){

      player2skin=i;
      p2ExhaustColor=ExhaustColors[i];


    }
    if(selecting===2){

      player3skin=i;
      p3ExhaustColor=ExhaustColors[i];


    }
    if(selecting===3){

      player4skin=i;
      p4ExhaustColor=ExhaustColors[i];


    }

  }




}

}

if(scene===-100){

var mobilebutton=button(width/2,height/2-200,400,50)

if(mobilebutton[1]===false){
fill(50)
}
if(mobilebutton[1]){
fill(70)
}
rectMode(CENTER)
rect(width/2,height/2-200,400,50,10)
textAlign(CENTER)
textSize(20)
fill(255)
text("Mobile",width/2,height/2-192.5)


var backButton=button(width/2,50,100,100)

if(backButton[1]===false){
fill(50,50,50,150)
}
if(backButton[1]){
fill(70,70,70,150)
}
rect(width/2,50,100,100,5)
fill(255)
textSize(40)
text("Back",width/2,50+12)
if(backButton[0]){

scene=0;

}


}

if(scene===-10){



  tf.push()




  tf.scale(cam.zoom)

  tf.translate(-cam.x-((width/2)-((width/2))/cam.zoom),-cam.y-((height/2)-((height/2))/cam.zoom))

  //fill(255)
  //ellipse((mouseX/tf.s)+cam.x+((width/2)-((width/2))/cam.zoom),(mouseY/tf.s)+cam.y+((height/2)-((height/2))/cam.zoom),50,50)


  var priority=false;

  var deleted=[];

  for(var i=0; i<levelObjects.length; i++){
  fill(levelObjects[i].r,levelObjects[i].g,levelObjects[i].b)
  rectMode(CENTER)
  rect(levelObjects[i].x,levelObjects[i].y,levelObjects[i].w,levelObjects[i].h)
  }

  for(var i=0; i<levelObjects.length; i++){

  if(levelObjects[i].type==="rect"){



    var objectButton=button(levelObjects[i].x,levelObjects[i].y,levelObjects[i].w,levelObjects[i].h,true)

    textSize(12)

    if(keys[16] && keys[68]){

      var duped={type:"rect",x:levelObjects[objectSelected].x+10,y:levelObjects[objectSelected].y+10,w:levelObjects[objectSelected].w,h:levelObjects[objectSelected].h,r:levelObjects[objectSelected].r,g:levelObjects[objectSelected].g,b:levelObjects[objectSelected].b}

      levelObjects.push(duped)

      keys[16]=false
      keys[68]=false;

      objectSelected=levelObjects.length-1;

    }

    if(keys[8]){

    deleted.push(objectSelected)
    keys[8]=false;

    }



    if(objectButton[1]){

      fill(255,100)
      rect(levelObjects[i].x,levelObjects[i].y,levelObjects[i].w,levelObjects[i].h)

    }

    if(objectSelected===i){
      priority=true;
      //fill(0,255,0,100)
      //rect(levelObjects[i].x,levelObjects[i].y,levelObjects[i].w,levelObjects[i].h)

      //stretching buttons
      {


      var stretchLeft=button(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y+20,20,20,true)
      fill(0,255,0)
      rect(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y+20,20,20)
      if(stretchLeft[1]){

        fill(255,100)
        rect(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y+20,20,20)
        priority=false;


      }
      if(stretchLeft[0]){

        levelObjects[i].w+=20;
        levelObjects[i].x+=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }


      var shrinkLeft=button(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y-20,20,20,true)
      fill(255,0,0)
      rect(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y-20,20,20)
      if(shrinkLeft[1]){

        fill(255,100)
        rect(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y-20,20,20)
        priority=false;


      }
      if(shrinkLeft[0]){

        levelObjects[i].w-=20;
        levelObjects[i].x-=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }




      var stretchRight=button(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y+20,20,20,true)
      fill(0,255,0)
      rect(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y+20,20,20)
      if(stretchRight[1]){

        fill(255,100)
        rect(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y+20,20,20)
        priority=false;

      }
      if(stretchRight[0]){

        levelObjects[i].w+=20;
        levelObjects[i].x-=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }


      var shrinkRight=button(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y-20,20,20,true)
      fill(255,0,0)
      rect(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y-20,20,20)
      if(shrinkRight[1]){

        fill(255,100)
        rect(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y-20,20,20)
        priority=false;

      }
      if(shrinkRight[0]){

        levelObjects[i].w-=20;
        levelObjects[i].x+=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }





      var stretchUp=button(levelObjects[i].x+20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20,true)
      fill(0,255,0)
      rect(levelObjects[i].x+20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20)
      if(stretchUp[1]){

        fill(255,100)
        rect(levelObjects[i].x+20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20)
        priority=false;

      }
      if(stretchUp[0]){

        levelObjects[i].h+=20;
        levelObjects[i].y+=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }


      var shrinkUp=button(levelObjects[i].x-20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20,true)
      fill(255,0,0)
      rect(levelObjects[i].x-20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20)
      if(shrinkUp[1]){

        fill(255,100)
        rect(levelObjects[i].x-20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20)
        priority=false;


      }
      if(shrinkUp[0]){

        levelObjects[i].h-=20;
        levelObjects[i].y-=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }




      var stretchDown=button(levelObjects[i].x+20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20,true)
      fill(0,255,0)
      rect(levelObjects[i].x+20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20)
      if(stretchDown[1]){

        fill(255,100)
        rect(levelObjects[i].x+20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20)
        priority=false;

      }
      if(stretchDown[0]){

        levelObjects[i].h+=20;
        levelObjects[i].y-=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }


      var shrinkDown=button(levelObjects[i].x-20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20,true)
      fill(255,0,0)
      rect(levelObjects[i].x-20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20)
      if(shrinkDown[1]){

        fill(255,100)
        rect(levelObjects[i].x-20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20)
        priority=false;

      }
      if(shrinkDown[0]){

        levelObjects[i].h-=20;
        levelObjects[i].y+=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }

      }

      /*

      {


      var stretchLeft=button(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y+20,20,20,true)
      fill(0,255,0)
      rect(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y+20,20,20)
      if(stretchLeft[1]){

        fill(255,100)
        rect(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y+20,20,20)


      }
      if(stretchLeft[0]){

        levelObjects[i].w+=20;
        levelObjects[i].x+=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }


      var shrinkLeft=button(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y-20,20,20,true)
      fill(255,0,0)
      rect(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y-20,20,20)
      if(shrinkLeft[1]){

        fill(255,100)
        rect(levelObjects[i].x-(levelObjects[i].w/2)-20,levelObjects[i].y-20,20,20)


      }
      if(shrinkLeft[0]){

        levelObjects[i].w-=20;
        levelObjects[i].x-=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }




      var stretchRight=button(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y+20,20,20,true)
      fill(0,255,0)
      rect(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y+20,20,20)
      if(stretchRight[1]){

        fill(255,100)
        rect(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y+20,20,20)

      }
      if(stretchRight[0]){

        levelObjects[i].w+=20;
        levelObjects[i].x-=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }


      var shrinkRight=button(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y-20,20,20,true)
      fill(255,0,0)
      rect(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y-20,20,20)
      if(shrinkRight[1]){

        fill(255,100)
        rect(levelObjects[i].x+(levelObjects[i].w/2)+20,levelObjects[i].y-20,20,20)

      }
      if(shrinkRight[0]){

        levelObjects[i].w-=20;
        levelObjects[i].x+=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }





      var stretchUp=button(levelObjects[i].x+20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20,true)
      fill(0,255,0)
      rect(levelObjects[i].x+20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20)
      if(stretchUp[1]){

        fill(255,100)
        rect(levelObjects[i].x+20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20)

      }
      if(stretchUp[0]){

        levelObjects[i].h+=20;
        levelObjects[i].y+=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }


      var shrinkUp=button(levelObjects[i].x-20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20,true)
      fill(255,0,0)
      rect(levelObjects[i].x-20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20)
      if(shrinkUp[1]){

        fill(255,100)
        rect(levelObjects[i].x-20,levelObjects[i].y-(levelObjects[i].h/2)-20,20,20)


      }
      if(shrinkUp[0]){

        levelObjects[i].h-=20;
        levelObjects[i].y-=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }




      var stretchDown=button(levelObjects[i].x+20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20,true)
      fill(0,255,0)
      rect(levelObjects[i].x+20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20)
      if(stretchDown[1]){

        fill(255,100)
        rect(levelObjects[i].x+20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20)

      }
      if(stretchDown[0]){

        levelObjects[i].h+=20;
        levelObjects[i].y-=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }


      var shrinkDown=button(levelObjects[i].x-20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20,true)
      fill(255,0,0)
      rect(levelObjects[i].x-20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20)
      if(shrinkDown[1]){

        fill(255,100)
        rect(levelObjects[i].x-20,levelObjects[i].y+(levelObjects[i].h/2)+20,20,20)

      }
      if(shrinkDown[0]){

        levelObjects[i].h-=20;
        levelObjects[i].y+=10;

        if(keys[16]){

          //levelObjects[i].w=levelObjects[i].w+50;

        }

      }

      }

*/



      var objectMoveWaitTime=80

      if(objectMoveTimer<millis()){
      if(keys[38]){

      levelObjects[i].y-=10;
      //keys[38]=false;
      objectMoveTimer=millis()+objectMoveWaitTime
      }

      if(keys[40]){

      levelObjects[i].y+=10;
      //keys[40]=false;
      objectMoveTimer=millis()+objectMoveWaitTime
      }

      if(keys[37]){

      levelObjects[i].x-=10;
      //keys[37]=false;
      objectMoveTimer=millis()+objectMoveWaitTime
      }

      if(keys[39]){

      levelObjects[i].x+=10;
      //keys[39]=false;
      objectMoveTimer=millis()+objectMoveWaitTime
      }



      }











      var colorButton=button(levelObjects[i].x,levelObjects[i].y+(levelObjects[i].h/2)+50,80,20,true)
      fill(200)

      rect(levelObjects[i].x,levelObjects[i].y+(levelObjects[i].h/2)+50,80,20,5)

      if(colorButton[1]){

        fill(255,200)
        rect(levelObjects[i].x,levelObjects[i].y+(levelObjects[i].h/2)+50,80,20,5)

      }

      if(colorButton[0]){typing=true;}



      if(typing===true){
        for(var p=0; p<10; p++){

        if(keys[48+p]){
        if(inputText.length<3){
        inputText+=String.fromCharCode(48+p)
        }
        keys[48+p]=false
        }

        }

        /*if(keys[188]){

        objectEnterR+=","
        keys[188]=false;

      }*/

      if(keys[13]){

      if(objectEnterR===""){

        objectEnterR=inputText
        inputText="";

      }

      else if(objectEnterG===""){

        objectEnterG=inputText
        inputText="";


      }

      else if(objectEnterB===""){

        objectEnterB=inputText
        inputText="";


      }




      }

      }

      if(objectEnterR!=="" && objectEnterG!=="" && objectEnterB!==""){

        levelObjects[i].r=Number(objectEnterR)
        levelObjects[i].g=Number(objectEnterG)
        levelObjects[i].b=Number(objectEnterB)

        objectEnterR="";
        objectEnterG="";
        objectEnterB="";
        typing=false;

      }



      textAlign(CENTER)
      fill(0)

      if(typing){
      text(objectEnterR+","+objectEnterG+","+objectEnterB,levelObjects[i].x,levelObjects[i].y+(levelObjects[i].h/2)+54)
      }

      if(typing===false){
      text(levelObjects[i].r+","+levelObjects[i].g+","+levelObjects[i].b,levelObjects[i].x,levelObjects[i].y+(levelObjects[i].h/2)+54)
      }

      text(levelObjects[i].x+","+levelObjects[i].y,levelObjects[i].x,levelObjects[i].y)



      text(levelObjects[i].w,levelObjects[i].x,levelObjects[i].y+(levelObjects[i].h/2))

      textAlign(LEFT)
      text(levelObjects[i].h,levelObjects[i].x-(levelObjects[i].w/2),levelObjects[i].y)



    }



    if(objectButton[0]){

      objectSelected=i;

    }






  }



  }

  for(var i=0; i<deleted.length; i++){

    levelObjects.splice(deleted[i],1)

  }

  textAlign(CENTER)
  fill(0)
  text("0,0",0,0)


  dronetexture(0,0,0,15,360-15,0.3,{r:255,g:255,b:255},0,[true,true])

  tf.pop()

  if(keys[80]){

    //ellipse((mouseX/tf.s)+cam.x+((width/2)-((width/2))/cam.zoom),(mouseY/tf.s)+cam.y+((height/2)-((height/2))/cam.zoom),50,50)


    var tempx=(mouseX/cam.zoom)+cam.x+((width/2)-((width/2))/cam.zoom)
    var tempy=(mouseY/cam.zoom)+cam.y+((height/2)-((height/2))/cam.zoom)

    tempx=Math.ceil(tempx/10)*10;
    tempy=Math.ceil(tempy/10)*10;

    levelObjects.push({type:"rect",x:tempx,y:tempy,w:80,h:80,r:255,g:255,b:255})

    keys[80]=false;

  }

  if(keys[87]){

    cam.y-=camspeed/cam.zoom;


  }

  if(keys[83]){

    cam.y+=camspeed/cam.zoom;

  }

  if(keys[65]){

    cam.x-=camspeed/cam.zoom;

  }

  if(keys[68]){

    cam.x+=camspeed/cam.zoom;

  }

  if(keys[81]){

    cam.zoom-=camspeed/100;
    if(cam.zoom<0.1){

      cam.zoom=0.1;

    }

  }

  if(keys[69]){

    cam.zoom+=camspeed/100;

  }



  var backButton=button(50,height/2,100,100)

  if(backButton[1]===false){
  fill(50)
  }
  if(backButton[1]){
  fill(70)
  }
  rect(50,height/2,100,100,5)
  fill(255)
  textSize(40)
  text("Back",50,height/2+12)
  if(backButton[0]){

  scene=4;

  }


  var saveButton=button(width-50,height/2,100,100)

  if(saveButton[1]===false){
  fill(50)
  }
  if(saveButton[1]){
  fill(70)
  }
  rect(width-50,height/2,100,100,5)
  fill(255)
  textSize(40)
  text("Save",width-50,height/2+12)
  if(saveButton[0]){


  levels[levelSelected]=levelObjects


  }


}



//dronetexture(200,200,0,al,ar,2,{r:255,g:255,b:255},1,[false,false])

//dronetexture(600,200,0,al,ar,2,{r:255,g:255,b:255},1)
//ar--;
//al++;





//text(round(frameRate()),400,30)




pamount=0;

if(loading!==false){
clicks=0;
}


//leftScreenClick=screentouch[0]
//rightScreenClick=screentouch[1]



//text(screentouch,200,300)








//text(round(displayfps),200,200)



}



window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};



/*function touchStarted() {
if(touchScreen){
clicks++



for (var i = 0; i < touches.length; i++) {
  ellipse(touches[i].x, touches[i].y, 300, 300);
  if(touches[i].x<width/2){

    leftScreenClick=true;

  }
  if(touches[i].x>width/2){

    rightScreenClick=true;

  }
}


  userStartAudio();

}


}*/




function keyPressed(){





	keys[keyCode]=true;

}

function keyReleased(){

  if(keys[27]){


    scene=0
    drones=[];
    Matter.World.clear(engine.world);
          //Engine.clear(engine);











  }

  if(keys[220]){


  print(engine.world.bodies)

  }

  if(keys[82]){

    goal={x:random(20,width-20),y:random(20,height-50)}
    pointsP1=0;
    pointsP2=0;
    pointsP3=0;
    pointsP4=0;
    goalSize=200;

  }



  if(keys[79] && scene===-10){

    print(JSON.stringify(levelObjects))

    navigator.clipboard.writeText(JSON.stringify(levelObjects));


  }



	keys[keyCode]=false;

}


function mouseReleased() {

clicked=false;




}

/*function touchEnded() {


if(touchScreen){

if(touches.length===0){

  leftScreenClick=false;


  rightScreenClick=false;


}

for (var i = 0; i < touches.length; i++) {
  ellipse(touches[i].x, touches[i].y, 300, 300);
  if(touches[i].x<width/2){

    rightScreenClick=false;

  }
  if(touches[i].x>width/2){

    leftScreenClick=false;

  }
}

}


}*/

/*function windowResized() {

  //resizeCanvas(windowWidth, windowHeight);
}*/

function windowResized() {
  canvas=resizeCanvas(windowWidth, windowHeight);




}
if(touchScreen===true){
document.addEventListener('gesturestart', function(e) {

  e.preventDefault();

});
}
