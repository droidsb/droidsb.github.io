var keys=[];

var debug=false;

var particles=[];

var deleted=[];

var lastparticle=0;

var canvasscale=2;

var cwidth=3072;
var cheight=1920;


var px=10;
var py=300;

var drones=[];

var Euler=2.718;

var autofly=false;

let smoketex;


var scrollvalue=0;
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

var scene=0;

var players=1;

var loading=false;

var loadscene1=false;

var clicked=false;

var gamemode=0;

var requiredPlayers=0;

var leftScreenClick=false;
var rightScreenClick=false;

var clicks=0;

var resetBodies=[];

var textures=[];

function dronetexture(x,y,angle,TangleL,TangleR,size,color,id,engineOn){

var flameSizeL=30
var flameVariationL=10;

var flameSizeR=30
var flameVariationR=10;

var flameScaleL=1;
var flameScaleR=1;

if(engineOn[0]===true){

flameSizeL=100;
flameVariationL=40;
flameScaleL=2;

}

if(engineOn[1]===true){

flameSizeR=100;
flameVariationR=40;
flameScaleR=2;

}

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

    push()
    translate(-64,10)
    rotate(-45)
    //rect(0,0,32,10)
    pop()
    push()
    translate(64,10)
    rotate(45)
    //rect(0,0,32,10)
    pop()



    image(textures[id][2],-158/2,-4.5,158,30)

    fill(color.r,color.g,color.b)

    //rect(0,0,100,35,5)

    image(textures[id][0],-50,-17.5,100,35)



  pop()

    fill(color.r,color.g,color.b)
    push()

    translate(x,y)
    rotate(angle)
    scale(size)
    angleMode(DEGREES)
    rectMode(CENTER)

    push()
    translate(-70,25)

    rotate(TangleL)
    //rect(0,0,25,20,5)
    image(textures[id][1],-25/2,-20/2,25,20)

    tint(150,150,255)
    push()

    image(FlameImage,-10,10,20,random((flameSizeL-flameVariationL),(flameSizeL+flameVariationL)))
    pop()
    pop()





    push()
    translate(70,25)

    rotate(TangleR)
    //rect(0,0,25,20,5)
    image(textures[id][1],-25/2,-20/2,25,20)

    tint(150,150,255)
    image(FlameImage,-10,10,20,random((flameSizeR-flameVariationR),(flameSizeR+flameVariationR)))
    pop()

    pop()

    push()
    translate(x,y)
    rotate(angle)
    scale(size)
    fill(255,0,0,100)
    //rect(0,0,142,50)
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

  push()
  translate(-64,10)
  rotate(-45)
  //rect(0,0,32,10)
  pop()
  push()
  translate(64,10)
  rotate(45)
  //rect(0,0,32,10)
  pop()



  image(textures[id][2],-158/2,-4.5,158,30)

  fill(color.r,color.g,color.b)

  rect(0,0,100,35,5)

  //image(textures[id][0],-50,-17.5,100,35)



pop()

  fill(color.r,color.g,color.b)
  push()

  translate(x,y)
  rotate(angle)
  scale(size)
  angleMode(DEGREES)
  rectMode(CENTER)

  push()
  translate(-70,25)

  rotate(TangleL)
  rect(0,0,25,20,5)
  tint(150,150,255)
  image(FlameImage,-10,10,20,random((flameSizeL-flameVariationL),(flameSizeL+flameVariationL)))
  //image(textures[id][1],-25/2,-20/2,25,20)
  pop()





  push()
  translate(70,25)

  rotate(TangleR)
  rect(0,0,25,20,5)
  tint(150,150,255)
  image(FlameImage,-10,10,20,random((flameSizeR-flameVariationR),(flameSizeR+flameVariationR)))
  //image(textures[id][1],-25/2,-20/2,25,20)
  pop()

  pop()

  push()
  translate(x,y)
  rotate(angle)
  scale(size)
  fill(255,0,0,100)
  //rect(0,0,142,50)
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
controls1player=[[65,68,81,69,83]]
controls2player=[[65,68,81,69,83],[74,76,85,79,75]]

controls3player=[[0,0,0,0,0],[65,68,81,69,83],[74,76,85,79,75]]

controls4player=[[0,0,0,0,0],[0,0,0,0,0],[65,68,81,69,83],[74,76,85,79,75]]

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

constructor(x,y,size,thrustControlLeft,thrustControlRight,thrustAngleLeft,thrustAngleRight,flipButton,indexc,color,texture,exhaustColor){
this.x=x
this.y=y
this.size=size

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

print("Mass:"+this.cbox.mass)

this.fadeout=false;

this.engineSound1;
this.enginesound2;


if(this.texture===2){

this.engineSound1=loadSound('Sound/Future_Drone_Engine.wav');
this.engineSound2=loadSound('Sound/Future_Drone_Engine.wav');

}
else{

this.engineSound1=loadSound('Sound/Engine.wav');
this.engineSound2=loadSound('Sound/Engine.wav');

}




//this.brain=new NeuralNetwork(7,10,2)
//this.brain.random()

}

display(){



	this.x=this.cbox.position.x;
	this.y=this.cbox.position.y



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

/*	push()
		translate(this.x,this.y)
		rotate(this.cbox.angle)
    scale(this.size)
		rectMode(CENTER)
    fill(this.r,this.g,this.b)
    //rect(0,0,140, 50)

		//fill(200,0,0)
		rect(0,0,80,20,4)

		fill(200,200,200)
		rect(-52.5,0,25,9)
		rect(52.5,0,25,9)



	pop()

		fill(200,200,200)
		push()

		translate(this.x,this.y)
		rotate(this.cbox.angle)
    scale(this.size)
		angleMode(DEGREES)
		rectMode(CENTER)

		push()
		translate(-70,10)

		rotate(this.tanglel)
		rect(0,0,25,20,4)
		pop()





		push()
		translate(70,10)

		rotate(this.tangler)
		rect(0,0,25,20,4)
		pop()

		pop()*/

    dronetexture(this.x,this.y,this.cbox.angle,this.tanglel,this.tangler,this.size,this.color,this.texture,this.engineOn)

angleMode(DEGREES)
	//var nout=this.brain.output([[(width/2)-this.x],[(height/2)-this.y],[this.cbox.velocity.x],[this.cbox.velocity.x],[cos(this.cbox.angle)],[sin(this.cbox.angle)],[this.cbox.angularVelocity]])

let powermult=0.008;

/*if(nout[0]>0.2){

var power1=-nout[0]*powermult

var thruster1x=(power1) * Math.cos(((this.cbox.angle*180/Math.PI)+90) * Math.PI / 180)
var thruster1y=(power1) * Math.sin(((this.cbox.angle*180/Math.PI)+90) * Math.PI / 180)

this.smoke2.emit(3)
this.smoke.emit(3)
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[3].x, y: this.cbox.vertices[3].y}, {x: thruster1x, y: thruster1y})

}

if(nout[1]>0.2){
var power2=-nout[1]*powermult

var thruster2x=(power2) * Math.cos(((this.cbox.angle*180/Math.PI)+90) * Math.PI / 180)
var thruster2y=(power2) * Math.sin(((this.cbox.angle*180/Math.PI)+90) * Math.PI / 180)


this.smoke4.emit(3)
this.smoke3.emit(3)
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[2].x, y: this.cbox.vertices[2].y}, {x: thruster2x, y: thruster2y})

}*/


var power1=-powermult*gamesize
var power2=-powermult*gamesize
//print(this.thrustControlLeft)



if(keys[this.thrustAngleLeft] || controller1EmoveOut===true && this.controllerIndex===0 && controllerA!==undefined){

this.tanglel++
this.tangler--

}

if(controller2EmoveOut===true && this.controllerIndex===1 && controllerB!==undefined){

this.tanglel++
this.tangler--

}

if(keys[this.thrustAngleRight] || controller1EmoveIn===true && this.controllerIndex===0 && controllerA!==undefined){

this.tanglel--
this.tangler++

}

if(controller2EmoveIn===true && this.controllerIndex===1 && controllerB!==undefined){

this.tanglel--
this.tangler++

}



if(autofly===true || autofly===false){




//print(bruh)
//text(bruh,200,200)
  //print(this.cUp)

if(keys[this.thrustControlLeft] || controller1left===true && this.controllerIndex===0 && controllerA!==undefined || controller2left===true && this.controllerIndex===1 && controllerB!==undefined || leftScreenClick){
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

if(keys[this.thrustControlRight] || controller1right===true && this.controllerIndex===0 && controllerA!==undefined || controller2right===true && this.controllerIndex===1 && controllerB!==undefined || rightScreenClick){

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



if(keys[this.thrustControlLeft]===false || controller1left===false && this.controllerIndex===0 && controllerA!==undefined || controller2left===false && this.controllerIndex===1 && controllerB!==undefined || leftScreenClick===false){



this.smokeidle2.emit(1)
this.engineSound1.setVolume(0,0.1)
this.engineOn[0]=false;

}
if(keys[this.thrustControlRight]===false || controller1right===false && this.controllerIndex===0 && controllerA!==undefined || controller2right===false && this.controllerIndex===1 && controllerB!==undefined || rightScreenClick){
this.smokeidle1.emit(1)
this.engineSound2.setVolume(0,0.1)
this.engineOn[1]=false;
}

if(keys[this.flipButton] || controller1flip===true && this.controllerIndex===0 || controller2flip===true && this.controllerIndex===1){

if(this.y>height-50){
Matter.Body.applyForce(this.cbox,{x:this.cbox.position.x,y:this.cbox.position.y},{x:0,y:-0.08*gamesize})
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[3].x, y: this.cbox.vertices[3].y}, {x: 0, y: -0.12*gamesize})

if(controller1flip===true){
controller1flip=false;
}
if(controller2flip===true){
controller2flip=false;
}
if(keys[this.flipButton]){
keys[this.flipButton]=false;
}

}

}



}

//text(this.cbox.angle*180/Math.PI,200,200)

/*if(autofly===true){

let dangle=(this.cbox.angle*180/Math.PI)

if(dangle>-2 && dangle<2 && this.y>height/2 || dangle<-2 && this.y>height/2){
var thruster1x=(power1) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)
var thruster1y=(power1) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)

this.smoke2.emit(1)
this.smoke.emit(1)
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[3].x, y: this.cbox.vertices[3].y}, {x: thruster1x, y: thruster1y})

}


if(dangle>-2 && dangle<2 && this.y>height/2 || dangle>2 && this.y>height/2){


var thruster2x=(power2) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)
var thruster2y=(power2) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)


this.smoke4.emit(1)
this.smoke3.emit(1)
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[2].x, y: this.cbox.vertices[2].y}, {x: thruster2x, y: thruster2y})



}

}*/



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

class NeuralNetwork {

	constructor(inputs,hidden,outputs){

		this.inputs=inputs;
		this.hidden=hidden;
		this.outputs=outputs;
		this.weights1=[];
		this.weights2=[];

		this.biases1=new Array(hidden);
		this.biases2=new Array(outputs);

		this.inputm=new Array(inputs)

		this.lastoutput=new Array(outputs)

		this.lastinput=new Array(inputs)



		this.weights1=new Array(this.hidden)

		this.weights2=new Array(this.outputs)

		for(var i=0; i<this.inputm.length; i++){


			this.inputm[i]=[]



			this.inputm[i].push(0)

		}

		for(var i=0; i<this.hidden; i++){

			this.weights1[i]=[]

			for(var p=0; p<this.inputs; p++){

				this.weights1[i].push(0)

			}

		}

		for(var i=0; i<this.outputs; i++){

			this.weights2[i]=[]

			for(var p=0; p<this.hidden; p++){

				this.weights2[i].push(0)

			}

		}


		for(var i=0; i<this.biases1.length; i++){

			this.biases1[i]=[]



			this.biases1[i].push(0)



		}

		for(var i=0; i<this.biases2.length; i++){

			this.biases2[i]=[]



			this.biases2[i].push(0)



		}

		/*print(this.inputm)
		print(this.weights1,this.weights2)
		print(this.biases1,this.biases2)

		print(multiplyMatrices(this.weights1,this.inputm))

		print(addMatrices(multiplyMatrices(this.weights1,this.inputm),this.biases1))

		print(sigMatrix(addMatrices(multiplyMatrices(this.weights1,this.inputm),this.biases1)))*/



	}

	mutate(rate){



	//var oldweights=this.weights1

	var result1=this.weights1;
	var result2=this.weights2;
	var result3=this.biases1;
	var result4=this.biases2;

	for(var i=0; i<result1.length; i++){

		for(var j=0; j<result1[i].length; j++){


			result1[i][j]=result1[i][j]+random(-1,1)*rate


		}

	}

	for(var i=0; i<result2.length; i++){

		for(var j=0; j<result2[i].length; j++){

			result2[i][j]+=random(-1,1)*rate

		}

	}

	for(var i=0; i<result3.length; i++){

		for(var j=0; j<result3[i].length; j++){

			result3[i][j]+=random(-1,1)*rate

		}

	}

	for(var i=0; i<result4.length; i++){

		for(var j=0; j<result4[i].length; j++){

			result4[i][j]+=random(-1,1)*rate

		}

	}

	this.weights1=result1
	this.weights2=result2
	this.biases1=result3
	this.biases2=result4
	//print(oldweights,this.weights1)

	}

	random(){



	//var oldweights=this.weights1

	var result1=this.weights1;
	var result2=this.weights2;
	var result3=this.biases1;
	var result4=this.biases2;

	for(var i=0; i<result1.length; i++){

		for(var j=0; j<result1[i].length; j++){


			result1[i][j]=random(-1,1)


		}

	}

	for(var i=0; i<result2.length; i++){

		for(var j=0; j<result2[i].length; j++){

			result2[i][j]=random(-1,1)

		}

	}

	for(var i=0; i<result3.length; i++){

		for(var j=0; j<result3[i].length; j++){

			result3[i][j]=random(-1,1)

		}

	}

	for(var i=0; i<result4.length; i++){

		for(var j=0; j<result4[i].length; j++){

			result4[i][j]=random(-1,1)

		}

	}

	this.weights1=result1
	this.weights2=result2
	this.biases1=result3
	this.biases2=result4
	//print(this.weights1)

	}

	output(input){


		let result;

		let mult1=multiplyMatrices(this.weights1,input);

		let add1=addMatrices(mult1,this.biases1)

		let sig1=sigMatrix(add1)

		let mult2=multiplyMatrices(this.weights2,sig1);

		let add2=addMatrices(mult2,this.biases2)

		let output=sigMatrix(add2)




		result=output;

		this.lastoutput=output;

		this.lastinput=input

		//sigMatrix(addMatrices(multiplyMatrices(this.weights1,this.inputm),this.biases1))

		return result;


	}

	display(x,y,nodeSize,nodeDistance,nodeSpread){

		for(var i=0; i<this.inputs; i++){


		for(var p=0; p<this.hidden; p++){
			strokeWeight(1)
			stroke(0)

			line(x,y+(i*nodeSpread),x+nodeDistance,y+(p*nodeSpread)+((this.inputs*nodeSpread)/2)-((this.hidden*nodeSpread)/2))



		}

	}

		for(var i=0; i<this.hidden; i++){


		for(var p=0; p<this.outputs; p++){
			strokeWeight(1)
			stroke(0)

			line(x+nodeDistance,y+(i*nodeSpread)+((this.inputs*nodeSpread)/2)-((this.hidden*nodeSpread)/2),x+(nodeDistance*2),y+(p*nodeSpread)+((this.inputs*nodeSpread)/2)-((this.outputs*nodeSpread)/2))

		}
	}



		for(var i=0; i<this.inputs; i++){
		fill(100,100,200)
		ellipse(x,y+(i*nodeSpread),nodeSize,nodeSize)

		fill(0)
		textSize((nodeSize/1.5))
		textAlign(CENTER)
		text((round(this.lastinput[i]*100)/100),x,y+(i*nodeSpread)+5)


	}

		for(var i=0; i<this.hidden; i++){

		fill(100,100,200)
		ellipse(x+nodeDistance,y+(i*nodeSpread)+((this.inputs*nodeSpread)/2)-((this.hidden*nodeSpread)/2),nodeSize,nodeSize)


	}

		for(var i=0; i<this.outputs; i++){

		fill(100,100,200)
		ellipse(x+(nodeDistance*2),y+(i*nodeSpread)+((this.inputs*nodeSpread)/2)-((this.outputs*nodeSpread)/2),nodeSize,nodeSize)
		fill(0)
		textSize((nodeSize/1.5))
		textAlign(CENTER)
		text((round(this.lastoutput[i]*100)/100),x+(nodeDistance*2),y+(i*nodeSpread)+((this.inputs*nodeSpread)/2)-((this.outputs*nodeSpread)/2)+5)

	}





	}

	replace(data){

		this.weights1=data.weights1
		this.weights2=data.weights2
		this.biases1=data.biases1;
		this.biases2=data.biases2;

	}


}



class ParticleEmitter2 {

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


		this.particles.push({x:this.x,y:this.y,size:size,vx:velocityX,vy:velocityY,speedX:speedX,speedY:speedY,lifetime:millis()+this.lifetime,opacity:30,fade:this.fade,drag:this.drag,angle:this.angle})

		this.lastparticle=millis()+this.rate

		}


}


}

display(){


pamount=pamount+this.particles.length
	for(var i=0; i<this.particles.length; i++){



		var outline=200;
//stroke(0,0,0,particles[i].opacity+20)
		strokeWeight(this.particles[i].size);
		stroke(this.color.r,this.color.g,this.color.b,this.particles[i].opacity)
		point(this.particles[i].x,this.particles[i].y)
		//ellipse(this.particles[i].x,this.particles[i].y,20,20)


		noStroke()





		this.particles[i].size+=0.8;
		this.particles[i].x+=(this.particles[i].vx)
		this.particles[i].y+=(this.particles[i].vy)

		//this.particles[i].x += this.particles[i].vx * Math.cos((this.particles[i].angle-90) * Math.PI / 180);
		//this.particles[i].y += this.particles[i].vy * Math.sin((this.particles[i].angle-90) * Math.PI / 180);



		this.particles[i].vx=this.particles[i].vx*this.particles[i].drag
		this.particles[i].vy=this.particles[i].vy*this.particles[i].drag

		//print(this.particles[i].drag)

    if(this.fadetimer<millis()){
		this.particles[i].opacity=this.particles[i].opacity-(30/(this.particles[i].fade/15))

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


  createCanvas(windowWidth, windowHeight);
pixelDensity(1)


smokeRender = createGraphics(400, 200);

ground = Bodies.rectangle(width/2, height+30, width+1000, 60, { isStatic: true });
roof = Bodies.rectangle(width/2, -30, width+1000, 60, { isStatic: true });
ground.restitution=0.25;

wall1 = Bodies.rectangle(-30, height/2, 60, height+1000, { isStatic: true });
wall2 = Bodies.rectangle(width+30, height/2, 60, height+1000, { isStatic: true });



Composite.add(engine.world, [ground,roof,wall1,wall2]);

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



}






//var testpart=new ParticleEmitter(300,400,30,60,3,0.4,2,1,1,1000,1000,1,0,{r:180,g:180,b:180},0)


var tangle=180;

var droneX=400;

var droneY=200;

var droneVx=0;

var droneVy=0;


var gravity=0.1

var nextgeneration=[];

var timer=0;

//var drone1=new drone(500,500,0.5,81,69,37,0)

var goalSize=200;



function button(x,y,w,h){

if(debug===true){
  rectMode(CENTER)
fill(255,0,0,100)
rect(x,y,w,h)
}

hit = collidePointRect(mouseX, mouseY, x-(w/2), y-(h/2), w, h);


if(mouseIsPressed && hit && clicked===false){
clicked=true;
return [true,hit]
}
else{return [false,hit]}




}

//ar dronethruster1=[boxA.vertices[3].x,boxA.vertices[3].y];

//var dronethruster2=[boxA.vertices[2].x,boxA.vertices[2].y];

var ar=0;
var al=360;

function draw() {

  if(controllerB===true){
  controls3player=[[0,0,0,0,0],[0,0,0,0,0],[65,68,81,69,83]]
  }

timer++;



background(53,81,92)



if(loading===1){

  if(players===1){

    drones.push(new drone((width/2)-200,height-100,gamesize,controls1player[0][0],controls1player[0][1],controls1player[0][2],controls1player[0][3],controls1player[0][4],0,p1Color,player1skin,p1ExhaustColor))
  }
  if(players===2){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls2player[0][0],controls2player[0][1],controls2player[0][2],controls2player[0][3],controls2player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls2player[1][0],controls2player[1][1],controls2player[1][2],controls2player[1][3],controls2player[1][4],1,p2Color,player2skin,p2ExhaustColor))

  }
  if(players===3){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls3player[0][0],controls3player[0][1],controls3player[0][2],controls3player[0][3],controls3player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls3player[1][0],controls3player[1][1],controls3player[1][2],controls3player[1][3],controls3player[1][4],1,p2Color,player2skin,p2ExhaustColor))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls3player[2][0],controls3player[2][1],controls3player[2][2],controls3player[2][3],controls3player[2][4],2,p3Color,player3skin,p3ExhaustColor))

  }
  if(players===4){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls4player[0][0],controls4player[0][1],controls4player[0][2],controls4player[0][3],controls4player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls4player[1][0],controls4player[1][1],controls4player[1][2],controls4player[1][3],controls4player[1][4],1,p2Color,player2skin,p2ExhaustColor))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls4player[2][0],controls4player[2][1],controls4player[2][2],controls4player[2][3],controls4player[2][4],2,p3Color,player3skin,p3ExhaustColor))
    drones.push(new drone((width/2)+200,height-100,gamesize,controls4player[3][0],controls4player[3][1],controls4player[3][2],controls4player[3][3],controls4player[3][4],2,p4Color,player4skin,p4ExhaustColor))


  }

    scene=1;
    loading=false;


}


if(scene===1){

//drone1.display()

for(var i=0; i<drones.length; i++){

drones[i].display();

if(i===0){
  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  text("Points:"+pointsP1,100,115)
  text("Player 1 Engines Angle:"+drones[i].getAngle(),10,30)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(50,80,90,90,5)
  dronetexture(50,75,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p1Color,player1skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P1",drones[i].getPosition().x,drones[i].getPosition().y-30)



}

if(i===1){
  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  textAlign(RIGHT)
  text("Points:"+pointsP2,width-100,115)
  text("Player 2 Engines Angle:"+drones[i].getAngle(),width-10,30)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(width-50,80,90,90,5)
  dronetexture(width-50,75,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p2Color,player2skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P2",drones[i].getPosition().x,drones[i].getPosition().y-30)

}

if(i===2){

  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  text("Player 3 Engines Angle:"+drones[i].getAngle(),10,height-10)
  text("Points:"+pointsP3,100,height-100)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(50,height-80,90,90,5)
  dronetexture(50,height-80,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p3Color,player3skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P3",drones[i].getPosition().x,drones[i].getPosition().y-30)

/*fill(255)
textSize(20)
textAlign(LEFT)
//text("Blue:"+pointsP3,10,height-30)
text("Blue Engines Angle:"+drones[i].getAngle(),10,height-10)*/

}

if(i===3){
  fill(255)
  textSize(20)
  textAlign(RIGHT)
  //text("White:"+pointsP1,10,30)
  text("Player 4 Engines Angle:"+drones[i].getAngle(),width-10,height-10)
  text("Points:"+pointsP4,width-100,height-100)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(width-50,height-80,90,90,5)
  dronetexture(width-50,height-80,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p4Color,player4skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P4",drones[i].getPosition().x,drones[i].getPosition().y-30)

}

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


}

if(loading===2){



  if(players===1){

    drones.push(new drone((width/2)-200,height-100,gamesize,controls1player[0][0],controls1player[0][1],controls1player[0][2],controls1player[0][3],controls1player[0][4],0,p1Color,player1skin,p1ExhaustColor))
  }
  if(players===2){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls2player[0][0],controls2player[0][1],controls2player[0][2],controls2player[0][3],controls2player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls2player[1][0],controls2player[1][1],controls2player[1][2],controls2player[1][3],controls2player[1][4],1,p2Color,player2skin,p2ExhaustColor))

  }
  if(players===3){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls3player[0][0],controls3player[0][1],controls3player[0][2],controls3player[0][3],controls3player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls3player[1][0],controls3player[1][1],controls3player[1][2],controls3player[1][3],controls3player[1][4],1,p2Color,player2skin,p2ExhaustColor))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls3player[2][0],controls3player[2][1],controls3player[2][2],controls3player[2][3],controls3player[2][4],2,p3Color,player3skin,p3ExhaustColor))

  }
  if(players===4){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls4player[0][0],controls4player[0][1],controls4player[0][2],controls4player[0][3],controls4player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls4player[1][0],controls4player[1][1],controls4player[1][2],controls4player[1][3],controls4player[1][4],1,p2Color,player2skin,p2ExhaustColor))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls4player[2][0],controls4player[2][1],controls4player[2][2],controls4player[2][3],controls4player[2][4],2,p3Color,player3skin,p3ExhaustColor))
    drones.push(new drone((width/2)+200,height-100,gamesize,controls4player[3][0],controls4player[3][1],controls4player[3][2],controls4player[3][3],controls4player[3][4],2,p4Color,player4skin,p4ExhaustColor))


  }

    scene=2;
    loading=false;


}

if(scene===2){



  textSize(30)
  textAlign(CENTER)
  fill(255)
  if(droneIt===0){

  text("PLAYER 1 IS IT!",width/2,30)

  }

  if(droneIt===1){

  text("PLAYER 2 IS IT!",width/2,30)

  }

  if(droneIt===2){

  text("PLAYER 3 IS IT!",width/2,30)

  }

  if(droneIt===3){

  text("PLAYER 4 IS IT!",width/2,30)

  }

for(var i=0; i<drones.length; i++){

drones[i].display();


if(i===0){
  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  text("Player 1 Engines Angle:"+drones[i].getAngle(),10,30)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(50,80,90,90,5)
  dronetexture(50,75,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p1Color,player1skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P1",drones[i].getPosition().x,drones[i].getPosition().y-30)


}

if(i===1){
  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  textAlign(RIGHT)
  text("Player 2 Engines Angle:"+drones[i].getAngle(),width-10,30)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(width-50,80,90,90,5)
  dronetexture(width-50,75,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p2Color,player2skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P2",drones[i].getPosition().x,drones[i].getPosition().y-30)

}

if(i===2){

  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  text("Player 3 Engines Angle:"+drones[i].getAngle(),10,height-10)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(50,height-80,90,90,5)
  dronetexture(50,height-80,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p3Color,player3skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P3",drones[i].getPosition().x,drones[i].getPosition().y-30)

/*fill(255)
textSize(20)
textAlign(LEFT)
//text("Blue:"+pointsP3,10,height-30)
text("Blue Engines Angle:"+drones[i].getAngle(),10,height-10)*/

}

if(i===3){
  fill(255)
  textSize(20)
  textAlign(RIGHT)
  //text("White:"+pointsP1,10,30)
  text("Player 4 Engines Angle:"+drones[i].getAngle(),width-10,height-10)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(width-50,height-80,90,90,5)
  dronetexture(width-50,height-80,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p4Color,player4skin,[false,false])

  textSize(15)
  textAlign(CENTER)
  text("P4",drones[i].getPosition().x,drones[i].getPosition().y-30)

}

//text(round(drones[i].getPosition().x)+","+round(drones[i].getPosition().y),20,80+(20*i))


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

fill(255,255,255,100)
ellipse(drones[droneIt].getPosition().x,drones[droneIt].getPosition().y,80,80)

}

if(loading===3){

  if(players===1){

    drones.push(new drone((width/2)-200,height-100,gamesize,controls1player[0][0],controls1player[0][1],controls1player[0][2],controls1player[0][3],controls1player[0][4],0,p1Color,player1skin,p1ExhaustColor))
  }
  if(players===2){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls2player[0][0],controls2player[0][1],controls2player[0][2],controls2player[0][3],controls2player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls2player[1][0],controls2player[1][1],controls2player[1][2],controls2player[1][3],controls2player[1][4],1,p2Color,player2skin,p2ExhaustColor))

  }
  if(players===3){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls3player[0][0],controls3player[0][1],controls3player[0][2],controls3player[0][3],controls3player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls3player[1][0],controls3player[1][1],controls3player[1][2],controls3player[1][3],controls3player[1][4],1,p2Color,player2skin,p2ExhaustColor))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls3player[2][0],controls3player[2][1],controls3player[2][2],controls3player[2][3],controls3player[2][4],2,p3Color,player3skin,p3ExhaustColor))

  }
  if(players===4){
    drones.push(new drone((width/2)-200,height-100,gamesize,controls4player[0][0],controls4player[0][1],controls4player[0][2],controls4player[0][3],controls4player[0][4],0,p1Color,player1skin,p1ExhaustColor))
    drones.push(new drone((width/2)-100,height-100,gamesize,controls4player[1][0],controls4player[1][1],controls4player[1][2],controls4player[1][3],controls4player[1][4],1,p2Color,player2skin,p2ExhaustColor))
    drones.push(new drone((width/2)+100,height-100,gamesize,controls4player[2][0],controls4player[2][1],controls4player[2][2],controls4player[2][3],controls4player[2][4],2,p3Color,player3skin,p3ExhaustColor))
    drones.push(new drone((width/2)+200,height-100,gamesize,controls4player[3][0],controls4player[3][1],controls4player[3][2],controls4player[3][3],controls4player[3][4],2,p4Color,player4skin,p4ExhaustColor))


  }

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

drones[i].display();


if(i===0){
  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  text("Player 1 Engines Angle:"+drones[i].getAngle(),10,30)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(50,80,90,90,5)
  dronetexture(50,75,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p1Color,player1skin,[false,false])

  fill(255)
  //print(drones[i].getPosition().x,drones[i].getPosition().y)
  textSize(15)
  textAlign(CENTER)
  text("P1",drones[i].getPosition().x,drones[i].getPosition().y-30)

}

if(i===1){
  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  textAlign(RIGHT)
  text("Player 2 Engines Angle:"+drones[i].getAngle(),width-10,30)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(width-50,80,90,90,5)
  dronetexture(width-50,75,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p2Color,player2skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P2",drones[i].getPosition().x,drones[i].getPosition().y-30)

}

if(i===2){

  fill(255)
  textSize(20)
  textAlign(LEFT)
  //text("White:"+pointsP1,10,30)
  text("Player 3 Engines Angle:"+drones[i].getAngle(),10,height-10)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(50,height-80,90,90,5)
  dronetexture(50,height-80,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p3Color,player3skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P3",drones[i].getPosition().x,drones[i].getPosition().y-30)

/*fill(255)
textSize(20)
textAlign(LEFT)
//text("Blue:"+pointsP3,10,height-30)
text("Blue Engines Angle:"+drones[i].getAngle(),10,height-10)*/

}

if(i===3){
  fill(255)
  textSize(20)
  textAlign(RIGHT)
  //text("White:"+pointsP1,10,30)
  text("Player 4 Engines Angle:"+drones[i].getAngle(),width-10,height-10)
  fill(0,0,0,100)
  rectMode(CENTER)
  rect(width-50,height-80,90,90,5)
  dronetexture(width-50,height-80,0,drones[i].getAngle(),360-drones[i].getAngle(),0.5,p4Color,player4skin,[false,false])

  fill(255)
  textSize(15)
  textAlign(CENTER)
  text("P4",drones[i].getPosition().x,drones[i].getPosition().y-30)

}

//text(round(drones[i].getPosition().x)+","+round(drones[i].getPosition().y),20,80+(20*i))






}

fill(50)
rectMode(CENTER)
rect(200, 300, 200, 30)
rect(width-200, 300, 200, 30)
rect(200, height-300, 200, 30)
rect(width-200, height-300, 200, 30)

rect(width/2, height/2, 30, 400)
rectMode(CORNER)



}


if(scene===0){

  var playbutton=button(width/2,height/2-200,400,50)
  var playersincrease=button((width/2)+175,height/2-100,40,40)
  var playersdecrease=button((width/2)-175,height/2-100,40,40)

  var gamemodebutton=button(width/2,height/2,400,50)

  var cosmeticsbutton=button(width/2,height/2+100,400,50)



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
  }
  if(playersdecrease[0]){
    players=players-1;
    if(players<1){
      players=1
    }
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

    if(gamemode>2){
      gamemode=0;
    }

  }

  if(gamemode===0){

    fill(255)
    text("Reach the Goal",width/2,height/2+8)
    requiredPlayers=1;


  }

  if(gamemode===1){

    fill(255)
    text("Drone Tag",width/2,height/2+8)
    requiredPlayers=2;
    if(players<requiredPlayers){

      players=requiredPlayers

    }


  }

  if(gamemode===2){

    fill(255)
    text("Freeplay",width/2,height/2+8)
    requiredPlayers=1;
    if(players<requiredPlayers){

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



  }





}

if(scene===100){

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
  fill(130)
  }
  if(player1SkinButton[1]===false && selecting!==0){
  fill(80)
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
  fill(130)
  }
  if(player2SkinButton[1]===false && selecting!==1){
  fill(80)
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
  fill(130)
  }
  if(player3SkinButton[1]===false && selecting!==2){
  fill(80)
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
  fill(130)
  }
  if(player4SkinButton[1]===false && selecting!==3){
  fill(80)
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

/*if(value===0){

xpos=-(spread*2);

}
if(value===1){

xpos=-(spread);

}
if(value===2){

xpos=0;

}
if(value===3){

xpos=(spread);

}
if(value===4){

xpos=(spread*2);

}*/




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

//dronetexture(200,200,0,al,ar,2,{r:255,g:255,b:255},1,[false,false])

//dronetexture(600,200,0,al,ar,2,{r:255,g:255,b:255},1)
//ar--;
//al++;


fill(0,255,255)
//text(round(frameRate()),400,30)




pamount=0;

if(loading){
clicks=0;

}

}

function mouseDragged(){



}

function touchStarted() {

  clicks++;
if(loading===false && clicks>1){
  if(mouseX<width/2){

    leftScreenClick=true;


  }

  if(mouseX>width/2){

    rightScreenClick=true;

  }
}


}

function mouseIsPressed(){

}


function keyPressed(){





	keys[keyCode]=true;

}

function keyReleased(){

  if(keys[27]){


    scene=0
    drones=[];
    print(engine.world.bodies.length)
    var arrlength=engine.world.bodies.length;
    var removebodies=[]





          Matter.World.clear(engine.world);
          //Engine.clear(engine);





    ground = Bodies.rectangle(width/2, height+30, width+1000, 60, { isStatic: true });
    roof = Bodies.rectangle(width/2, -30, width+1000, 60, { isStatic: true });
    ground.restitution=0.25;

    wall1 = Bodies.rectangle(-30, height/2, 60, height+1000, { isStatic: true });
    wall2 = Bodies.rectangle(width+30, height/2, 60, height+1000, { isStatic: true });



    Composite.add(engine.world, [ground,roof,wall1,wall2]);





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

	keys[keyCode]=false;

}


function mouseReleased() {

clicked=false;


}

function touchEnded() {

leftScreenClick=false;
rightScreenClick=false;

}

/*function windowResized() {

  //resizeCanvas(windowWidth, windowHeight);
}*/

function windowResized() {
  canvas=resizeCanvas(windowWidth, windowHeight);




}
