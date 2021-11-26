var keys=[];

var particles=[];

var deleted=[];

var lastparticle=0;

var px=10;
var py=300;

var drones=[];

var Euler=2.718;

var autofly=true;

let smoketex;

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

constructor(x,y,thrustControlLeft,thrustControlRight,thrustAngleLeft,thrustAngleRight){
this.x=x
this.y=y

this.thrustControlLeft=thrustControlLeft;
this.thrustControlRight=thrustControlRight;
this.thrustAngleLeft=thrustAngleLeft;
this.thrustAngleRight=thrustAngleRight;

this.tanglel=45;
this.tangler=315;


this.smoke=new ParticleEmitter(300,400,10,20,10,0.4,2,1,1,1000,1000,1,0,{r:180,g:180,b:180},0)

this.smoke2=new ParticleEmitter(300,400,10,20,10,0.4,2,1,1,1000,1000,1,0,{r:255,g:119,b:0},0)

this.smoke3=new ParticleEmitter(300,400,10,20,10,0.4,2,1,1,1000,1000,1,0,{r:180,g:180,b:180},0)

this.smoke4=new ParticleEmitter(300,400,10,20,10,0.4,2,1,1,1000,1000,1,0,{r:255,g:119,b:0},0)
this.cbox=Bodies.rectangle(this.x,this.y, 140, 20);
Composite.add(engine.world, [this.cbox]);

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
	
	push()
		translate(this.x,this.y)
		rotate(this.cbox.angle)
		rectMode(CENTER)

		fill(200,0,0)
		rect(0,0,80,20,4)

		fill(40,40,40)
		rect(-52.5,0,25,9)
		rect(52.5,0,25,9)

		

	pop()
	
		fill(200,200,200)
		push()
		
		translate(this.x,this.y)
		rotate(this.cbox.angle)
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
	
	//var nout=this.brain.output([[(width/2)-this.x],[(height/2)-this.y],[this.cbox.velocity.x],[this.cbox.velocity.x],[cos(this.cbox.angle)],[sin(this.cbox.angle)],[this.cbox.angularVelocity]])
	
let powermult=0.003;

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


var power1=-powermult
var power2=-powermult
//print(this.thrustControlLeft)

if(autofly===true || autofly===false){

if(keys[this.thrustControlLeft]){

//print("test")
var thruster1x=(power1) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)
var thruster1y=(power1) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)

this.smoke2.emit(3)
this.smoke.emit(3)
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[3].x, y: this.cbox.vertices[3].y}, {x: thruster1x, y: thruster1y})

}

if(keys[this.thrustControlRight]){

var thruster2x=(power2) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)
var thruster2y=(power2) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)


this.smoke4.emit(3)
this.smoke3.emit(3)
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[2].x, y: this.cbox.vertices[2].y}, {x: thruster2x, y: thruster2y})


}

if(keys[this.thrustAngleLeft]){

this.tanglel++;

print(this.tanglel)
}

}

//text(this.cbox.angle*180/Math.PI,200,200)

if(autofly===true){

let dangle=(this.cbox.angle*180/Math.PI)

if(dangle>-2 && dangle<2 && this.y>height/2 || dangle<-2 && this.y>height/2){
var thruster1x=(power1) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)
var thruster1y=(power1) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tanglel) * Math.PI / 180)

this.smoke2.emit(3)
this.smoke.emit(3)
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[3].x, y: this.cbox.vertices[3].y}, {x: thruster1x, y: thruster1y})

}


if(dangle>-2 && dangle<2 && this.y>height/2 || dangle>2 && this.y>height/2){


var thruster2x=(power2) * Math.cos(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)
var thruster2y=(power2) * Math.sin(((this.cbox.angle*180/Math.PI)+90+this.tangler) * Math.PI / 180)


this.smoke4.emit(3)
this.smoke3.emit(3)
Matter.Body.applyForce(this.cbox,{x: this.cbox.vertices[2].x, y: this.cbox.vertices[2].y}, {x: thruster2x, y: thruster2y})



}

}



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

	

	for(var i=0; i<this.particles.length; i++){
		
		
		
		var outline=200;
//stroke(0,0,0,particles[i].opacity+20)
		strokeWeight(this.particles[i].size);
		stroke(this.color.r,this.color.g,this.color.b,this.particles[i].opacity)
		//point(this.particles[i].x,this.particles[i].y)
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

			this.particles[i].opacity=this.particles[i].opacity-0.5

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

	

	for(var i=0; i<this.particles.length; i++){
		
		
		
		var outline=200;
//stroke(0,0,0,particles[i].opacity+20)
		strokeWeight(this.particles[i].size);
		stroke(this.color.r,this.color.g,this.color.b,this.particles[i].opacity)
		point(this.particles[i].x,this.particles[i].y)
		//ellipse(this.particles[i].x,this.particles[i].y,20,20)
		
		
		noStroke()
		
		
		
		
		

		this.particles[i].x+=(this.particles[i].vx)
		this.particles[i].y+=(this.particles[i].vy)
		
		//this.particles[i].x += this.particles[i].vx * Math.cos((this.particles[i].angle-90) * Math.PI / 180);
		//this.particles[i].y += this.particles[i].vy * Math.sin((this.particles[i].angle-90) * Math.PI / 180);
		
		

		this.particles[i].vx=this.particles[i].vx*this.particles[i].drag
		this.particles[i].vy=this.particles[i].vy*this.particles[i].drag

		if(this.particles[i].lifetime-millis()<this.particles[i].fade){

			this.particles[i].opacity=this.particles[i].opacity-0.5

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



function setup() {
createCanvas(1000, 600);


ground = Bodies.rectangle(width/2, height, 2000, 60, { isStatic: true });



Composite.add(engine.world, [ground]);


noStroke()



Engine.run(engine)

//console.log(boxA)
console.log(ground)

smoketex = loadImage('smoke.png');





}

particle=function(x,y,sizeMin,sizeMax,vx,vy,speedMinX,speedMaxX,speedMinY,speedMaxY,lifetime,fade,drag,rate,color){

var size=random(sizeMin,sizeMax)
var speedX=random(speedMinX,speedMaxX)
var speedY=random(speedMinY,speedMaxY)

var velocityX=random(-speedX+vx,speedX+vx)
var velocityY=random(-speedY+vy,speedY+vy)



/*stroke(0)
strokeWeight(2);
fill(0,0,255,30)
ellipse(x,y,size,size)
noStroke()*/
if(lastparticle<millis()){
particles.push({x:x,y:y,size:size,vx:velocityX,vy:velocityY,speedX:speedX,speedY:speedY,lifetime:millis()+lifetime,opacity:30,fade:fade,drag:drag})
lastparticle=millis()+rate
}


for(var i=0; i<particles.length; i++){
var outline=200;
//stroke(0,0,0,particles[i].opacity+20)
strokeWeight(particles[i].size);
stroke(color.r,color.g,color.b,particles[i].opacity)
point(particles[i].x,particles[i].y)
noStroke()

particles[i].x=particles[i].x+particles[i].vx
particles[i].y=particles[i].y+particles[i].vy

particles[i].vx=particles[i].vx*particles[i].drag
particles[i].vy=particles[i].vy*particles[i].drag

if(particles[i].lifetime-millis()<particles[i].fade){

particles[i].opacity=particles[i].opacity-0.5

}

if(particles[i].lifetime<millis()){


deleted.push(i)


}

}



for(var i=0;i<deleted.length; i++){

particles.splice(deleted[i],1)


}

deleted=[]


}

//x,y,sizeMin,sizeMax,vx,vy,speedMinX,speedMaxX,speedMinY,speedMaxY,lifetime,fade,drag,rate


var smoke=new ParticleEmitter(300,400,10,20,3,0.4,2,1,1,1000,1000,1,0,{r:180,g:180,b:180},0)

var smoke2=new ParticleEmitter(300,400,10,20,3,0.4,2,1,1,1000,1000,1,0,{r:255,g:119,b:0},0)

var smoke3=new ParticleEmitter(300,400,10,20,3,0.4,2,1,1,1000,1000,1,0,{r:180,g:180,b:180},0)

var smoke4=new ParticleEmitter(300,400,10,20,3,0.4,2,1,1,1000,1000,1,0,{r:255,g:119,b:0},0)


var tangle=180;

var droneX=400;

var droneY=200;

var droneVx=0;

var droneVy=0;


var gravity=0.1

var nextgeneration=[];

var timer=0;

var drone1=new drone(500,500,81,69,37,0)



//ar dronethruster1=[boxA.vertices[3].x,boxA.vertices[3].y];

//var dronethruster2=[boxA.vertices[2].x,boxA.vertices[2].y];

function draw() {

timer++;

//dronethruster1=[boxA.vertices[3].x,boxA.vertices[3].y];
//dronethruster2=[boxA.vertices[2].x,boxA.vertices[2].y];

//tangle+=1

background(100)

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

drone1.display()

if(timer>300){


drones=nextgeneration;
print(drones)
nextgeneration=[];

timer=0;

}

ellipse(width/2,height/2,50,50)


push()
rectMode(CENTER)
translate(ground.position.x,ground.position.y)
//print(ground.position.x,ground.position.y)
//rotate(ground.angle)
fill(0)
rect(0,20,2000,60)

pop()



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
text(round(millis()),20,20)
text(particles.length,20,40)

}

function mouseDragged(){



}


function keyPressed(){



	keys[keyCode]=true;

}

function keyReleased(){


	keys[keyCode]=false;

}