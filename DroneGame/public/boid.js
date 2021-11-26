class Boid {

constructor(x,y) {

this.position = createVector(x,y );
this.velocity = p5.Vector.random2D();
this.velocity.setMag(random(2,4))
this.acceleration = createVector();
this.maxForce=0.2;
this.maxSpeed=4;

}


edges(){

if(this.position.x>width){
this.position.x=0;


}

if(this.position.x<0){
this.position.x=width;


}

if(this.position.y>height){
this.position.y=0;


}

if(this.position.y<0){
this.position.y=height;


}

}

align(boids){

	let perceptionRadius=80;

	let steering=createVector();
	
	let total=0;
	
	for(let other of boids){
	
		let d=dist(this.position.x, this.position.y, other.position.x, other.position.y)
		
		if(other!=this && d<perceptionRadius){
		steering.add(other.velocity);
		total++;
		}
	
	}
	if(total>0){
	steering.div(total);
	
	steering.setMag(this.maxSpeed);
	
	steering.sub(this.velocity);
	steering.limit(this.maxForce)
	
	}
	
	return steering;

}

seperation (boids){

	let perceptionRadius=50;

	let steering=createVector();
	
	let total=0;
	
	for(let other of boids){
	
		let d=dist(this.position.x, this.position.y, other.position.x, other.position.y)
		
		if(other!=this && d<perceptionRadius){
		
		let diff = p5.Vector.sub(this.position, other.position)
		
		diff.mult(d^2);
		steering.add(diff);
		total++;
		}
	
	}
	if(total>0){
	steering.div(total);
	
	
	steering.setMag(this.maxSpeed);
	
	steering.sub(this.velocity);
	steering.limit(this.maxForce)
	
	}
	
	return steering;

}

cohesion (boids){

	let perceptionRadius=80;

	let steering=createVector();
	
	let total=0;
	
	for(let other of boids){
	
		let d=dist(this.position.x, this.position.y, other.position.x, other.position.y)
		
		if(other!=this && d<perceptionRadius){
		steering.add(other.position);
		total++;
		}
	
	}
	if(total>0){
	steering.div(total);
	
	steering.sub(this.position)
	steering.setMag(this.maxSpeed);
	
	steering.sub(this.velocity);
	steering.limit(this.maxForce)
	
	}
	
	return steering;

}



avoid (obstacles){
if(obstacles!==undefined){

	let perceptionRadius=100;

	let steering=createVector();
	
	let total=0;
	
	//console.log(obstacles)
	
	//console.log(boids)
	
	
	
	for(let other of obstacles){
	
	perceptionRadius=other.size*2
	
		let d=dist(this.position.x, this.position.y, other.position.x, other.position.y)
		
		if(d<perceptionRadius){
		
		let diff = p5.Vector.sub(this.position, other.position)
		
		diff.mult(d^2);
		steering.add(diff);
		total++;
		
		}
	
	}
	if(total>0){
	steering.div(total);
	
	
	steering.setMag(this.maxSpeed);
	
	steering.sub(this.velocity);
	steering.limit(this.maxForce)
	
	}
	
	return steering;
	
	}

}

flock(boids, obstacles){




let alignment=this.align(boids);
let cohesion=this.cohesion(boids)
let seperation=this.seperation(boids);
let avoid=this.avoid(obstacles);

seperation.mult(seperationSlider.value())
cohesion.mult(cohesionSlider.value())
alignment.mult(alignSlider.value())

avoid.mult(obstacleSlider.value())



this.acceleration.add(alignment); 
this.acceleration.add(cohesion);
this.acceleration.add(seperation)
this.acceleration.add(avoid)


this.acceleration.add(createVector(random(-1,1)/2,random(-1,1)/2))


}

update(){
	
	this.position.add(this.velocity)
	this.velocity.add(this.acceleration)
	this.velocity.limit(this.maxSpeed)
	this.acceleration.set(0,0);

}

show (){

push()

noStroke()


translate(this.position.x,this.position.y)

scale(2)

rotate(atan2(this.velocity.y,this.velocity.x)+radians(90))

triangle(-2, 2, 0, -2, 2, 2)

fill(0)
noStroke()
//ellipse(0,0,2,2)

pop()

}


}
