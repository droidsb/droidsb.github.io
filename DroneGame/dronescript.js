var keys=[];

var particles=[];

var deleted=[];

var lastparticle=0;

var px=10;
var py=300;

var drones=[];

var Euler=2.718;

var autofly=false;

let smoketex;

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

var gamesize=0.2;



let cIndex=false;

let pointsP1=0;
let pointsP2=0;

var goal;


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

constructor(x,y,size,thrustControlLeft,thrustControlRight,thrustAngleLeft,thrustAngleRight,flipButton,indexc,color){
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

this.r=color.r
this.g=color.g
this.b=color.b



this.controllerIndex=indexc

//                             x,y,sizeMin,sizeMax,speed,speedMinX,speedMaxX,speedMinY,speedMaxY,lifetime,fade,drag,rate,color,angle
this.smoke=new ParticleEmitter(300,400,20*this.size,40*this.size,20*this.size,0.8*this.size,4*this.size,2*this.size,2*this.size,1000,1000,0.97,0,{r:180,g:180,b:180},0)

this.smoke2=new ParticleEmitter(300,400,20*this.size,40*this.size,20*this.size,0.8*this.size,4*this.size,2*this.size,2*this.size,1000,1000,0.97,0,{r:255,g:119,b:0},0)

this.smoke3=new ParticleEmitter(300,400,20*this.size,40*this.size,20*this.size,0.8*this.size,4*this.size,2*this.size,2*this.size,1000,1000,0.97,0,{r:180,g:180,b:180},0)

this.smoke4=new ParticleEmitter(300,400,20*this.size,40*this.size,20*this.size,0.8*this.size,4*this.size,2*this.size,2*this.size,1000,1000,0.97,0,{r:255,g:119,b:0},0)

this.smokeidle1=new ParticleEmitter(300,400,10*this.size,20*this.size,1.5,0.4,2,1,1,500,500,0.97,0,{r:180,g:180,b:180},0)
this.smokeidle2=new ParticleEmitter(300,400,10*this.size,20*this.size,1.5,0.4,2,1,1,500,500,0.97,0,{r:180,g:180,b:180},0)


this.cbox=Bodies.rectangle(this.x,this.y, 140, 50);
Matter.Body.scale(this.cbox, this.size, this.size)
Matter.Body.setMass(this.cbox,3.5)
Composite.add(engine.world, [this.cbox]);

print("Mass:"+this.cbox.mass)

this.fadeout=false;

this.engineSound1 = loadSound('Sound/Engine.wav');
this.engineSound2 = loadSound('Sound/Engine2.wav');

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
	push()
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

		pop()
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

if(keys[this.thrustControlLeft] || controller1left===true && this.controllerIndex===0 && controllerA!==undefined || controller2left===true && this.controllerIndex===1 && controllerB!==undefined){
//print("test")
var thruster1x=(power1) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)
var thruster1y=(power1) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)

this.smoke2.emit(1)
this.smoke.emit(1)
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

if(keys[this.thrustControlRight] || controller1right===true && this.controllerIndex===0 && controllerA!==undefined || controller2right===true && this.controllerIndex===1 && controllerB!==undefined){

var thruster2x=(power2) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)
var thruster2y=(power2) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)


this.smoke4.emit(1)
this.smoke3.emit(1)

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



if(keys[this.thrustControlLeft]===false || controller1left===false && this.controllerIndex===0 && controllerA!==undefined || controller2left===false && this.controllerIndex===1 && controllerB!==undefined){



this.smokeidle2.emit(1)
this.engineSound1.setVolume(0,0.1)

}
if(keys[this.thrustControlRight]===false || controller1right===false && this.controllerIndex===0 && controllerA!==undefined || controller2right===false && this.controllerIndex===1 && controllerB!==undefined){
this.smokeidle1.emit(1)
this.engineSound2.setVolume(0,0.1)
}

if(keys[this.flipButton] || controller1flip===true && this.controllerIndex===0 || controller2flip===true && this.controllerIndex===1){

if(this.y>756){
Matter.Body.applyForce(this.cbox,{x:this.cbox.position.x,y:this.cbox.position.y},{x:0,y:-0.08*gamesize})
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[3].x, y: this.cbox.vertices[3].y}, {x: 0, y: -0.12*gamesize})
controller1flip=false;
controller2flip=false;
keys[this.flipButton]=false
}

}



}

//text(this.cbox.angle*180/Math.PI,200,200)

if(autofly===true){

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

}



}

getPosition(){

return {x:this.x,y:this.y}

}

getAngle(){

return this.tanglel;

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

/*class ParticleEmitter {

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


		this.particles.push({x:this.x,y:this.y,size:size,vx:velocityX,vy:velocityY,speedX:speedX,speedY:speedY,lifetime:millis()+this.lifetime,opacity:100,fade:this.fade,drag:this.drag,angle:this.angle})

		this.lastparticle=millis()+this.rate

		}


}


}

display(){



	for(var i=0; i<this.particles.length; i++){



		var outline=200;
//stroke(0,0,0,particles[i].opacity+20)
		strokeWeight(this.particles[i].size);
		stroke(this.color.r,this.color.g,this.color.b,this.particles[i].opacity)
		//point(this.particles[i].x,this.particles[i].y)
		tint(this.color.r,this.color.g,this.color.b,this.particles[i].opacity);
		//tint(255, this.particles[i].opacity);
		image(smoketex, this.particles[i].x,this.particles[i].y, this.particles[i].size, this.particles[i].size);
		//ellipse(this.particles[i].x,this.particles[i].y,20,20)


		noStroke()






		this.particles[i].x+=(this.particles[i].vx)
		this.particles[i].y+=(this.particles[i].vy)

		//this.particles[i].x += this.particles[i].vx * Math.cos((this.particles[i].angle-90) * Math.PI / 180);
		//this.particles[i].y += this.particles[i].vy * Math.sin((this.particles[i].angle-90) * Math.PI / 180);



		this.particles[i].vx=this.particles[i].vx*this.particles[i].drag
		this.particles[i].vy=this.particles[i].vy*this.particles[i].drag

		if(this.particles[i].lifetime-millis()<this.particles[i].fade){

			this.particles[i].opacity=this.particles[i].opacity-5

		}

		if(this.particles[i].lifetime<millis()){


			this.deleted.push(i)


		}

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


}*/

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
    image(this.smoketextures[round(this.particles[i].opacity)],-16,-16,32,32);
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


}


function setup() {
createCanvas(1780, 900);
pixelDensity(1)


smokeRender = createGraphics(400, 200);

ground = Bodies.rectangle(width/2, height+30, 2000, 60, { isStatic: true });
roof = Bodies.rectangle(width/2, -130, 2000, 60, { isStatic: true });
ground.restitution=0.25;
/*ball = Bodies.circle(width/2, 40, 40)

ball.restitution=1.5
Matter.Body.setMass(ball,0.2)*/

wall1 = Bodies.rectangle(-30, 0, 60, 2000, { isStatic: true });
wall2 = Bodies.rectangle(width+30, 0, 60, 2000, { isStatic: true });



Composite.add(engine.world, [ground,roof,wall1,wall2]);


noStroke()



Engine.run(engine)

//console.log(boxA)
console.log(ground)

drones.push(new drone((width/2)-100,500,gamesize,81,69,49,51,87,0,{r:255,g:0,b:0}))

drones.push(new drone((width/2)+100,500,gamesize,85,79,55,57,73,1,{r:0,g:0,b:255}))

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







//ar dronethruster1=[boxA.vertices[3].x,boxA.vertices[3].y];

//var dronethruster2=[boxA.vertices[2].x,boxA.vertices[2].y];

function draw() {

timer++;

//dronethruster1=[boxA.vertices[3].x,boxA.vertices[3].y];
//dronethruster2=[boxA.vertices[2].x,boxA.vertices[2].y];

//tangle+=1

background(0)



if(timer<300){

/*for(var i=0; i<drones.length; i++){

drones[i].display()

hitgoal = collidePointCircle(drones[i].x, drones[i].y, width/2, height/2, 50,50);

if(hitgoal){

print("GOAL!")


var newdrone=new drone(random(0,width),random(0,height),300)
newdrone.brain=drones[i].brain
newdrone.brain.mutate()

drones.push(drones[i])



drones.splice(i,1)


}


}*/


}

//drone1.display()

for(var i=0; i<drones.length; i++){

drones[i].display();


if(i===0){
fill(255)
textSize(20)
textAlign(LEFT)

text("Engines Angle:"+drones[i].getAngle(),10,60)
}

if(i===1){
fill(255)
textSize(20)
textAlign(RIGHT)

text("Engine Angle:"+drones[i].getAngle(),width-10,60)
}
//text(round(drones[i].getPosition().x)+","+round(drones[i].getPosition().y),20,80+(20*i))

hitgoal = collidePointCircle(goal.x, goal.y, round(drones[i].getPosition().x), round(drones[i].getPosition().y), 100);

if(hitgoal){

goal={x:random(20,width-20),y:random(20,height-50)}
if(i===0){
pointsP1++;
}
if(i===1){
pointsP2++;
}

}

}

fill(255)
textSize(20)
textAlign(LEFT)
text("RED:"+pointsP1,10,30)
textAlign(RIGHT)
text("BLUE:"+pointsP2,width-10,30)

fill(218,165,32)

ellipse(goal.x,goal.y,80,80)

if(pointsP1===20){

textAlign(CENTER)
textSize(40)
text("RED PLAYER WINS",width/2,height/2)
text("Press R to restart",width/2,(height/2)+100)
goal={x:-2000,y:-2000}

}

if(pointsP2===20){

textAlign(CENTER)
textSize(40)
text("BLUE PLAYER WINS",width/2,height/2)
text("Press R to restart",width/2,(height/2)+100)
goal={x:-2000,y:-2000}
}




//ellipse(width/2,height/2,50,50)


push()
rectMode(CENTER)
translate(ground.position.x,ground.position.y)
//print(ground.position.x,ground.position.y)
//rotate(ground.angle)
fill(0)
//rect(0,0,2000,60)

pop()

fill(0,255,0)
//ellipse(ball.position.x,ball.position.y,80,80)

//text(frameRate(),20,60)

/*


push()
translate(droneX,droneY)
rotate(boxA.angle)
rectMode(CENTER)

fill(200,0,0)
rect(0,0,80,20,4)

fill(40,40,40)
rect(-52.5,0,25,9)
rect(52.5,0,25,9)

fill(200,200,200)
rect(-60,15,25,20,4)



rect(60,15,25,20,4)

pop()


droneVy=droneVy+gravity;

droneY+=droneVy

if(droneY>height-28){

	droneY=height-28

}

*/
/*rectMode(CENTER)
push()
translate(boxA.position.x,boxA.position.y)
rotate(boxA.angle)
//rect(0,0,105,20)

pop()*/



fill(0,0,255)
//ellipse(boxA.vertices[3].x,boxA.vertices[3].y,10,10)

//(-0.01) * Math.cos((boxA.angle) * Math.PI / 180);
//(-0.01) * Math.sin((boxA.angle) * Math.PI / 180);



angleMode(DEGREES)

//var thruster1x=(forcey) * Math.cos(((boxA.angle*180/Math.PI)+90) * Math.PI / 180)
//var thruster1y=(forcey) * Math.sin(((boxA.angle*180/Math.PI)+90) * Math.PI / 180)

angleMode(RADIANS)

//thrusty=0

//print(round(thrustx*100000)/100000,round(thrusty*100000)/100000)



//x,y,sizeMin,sizeMax,vx,vy,speedMinX,speedMaxX,speedMinY,speedMaxY,lifetime,fade,drag,rate


//particle(500,600,10,20,0,-1.5,0.4,0.4,1,1,3000,1000,1,0,{r:255,g:165,b:0})

//particle(300,600,10,20,0,-1.5,0.4,0.4,1,1,3000,1000,1,0,{r:200,g:200,b:200})

//particle(px,py,20,30,2,0,0.1,0.4,0.2,0.2,3000,1000,1,0,{r:200,g:200,b:200})

//particle(px,py,20,30,2,0,0.1,0.4,0.2,0.2,3000,1000,1,0,{r:200,g:200,b:200})

//particle(px+20,py,10,20,0,-2.5,0.4,0.4,1,1,3000,1000,1,0,{r:255,g:165,b:0})

//particle(px+40,py,10,20,0,-2.5,0.4,0.4,1,1,3000,1000,1,0,{r:255,g:165,b:0})

//px=px+2;

if(px>1000){

px=0

}

fill(0)
//text(round(millis()),20,20)
//text(pamount,20,40)
pamount=0;

}

function mouseDragged(){



}


function keyPressed(){



	keys[keyCode]=true;

}

function keyReleased(){

  if(keys[82]){

    goal={x:random(20,width-20),y:random(20,height-50)}
    pointsP1=0;
    pointsP2=0;

  }

	keys[keyCode]=false;

}
