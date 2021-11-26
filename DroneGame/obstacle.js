class Obstacle {

constructor(x,y) {

this.position = createVector(x,y );
this.size=20

}


show (){

push()

noStroke()


translate(this.position.x,this.position.y)



fill(0)
noStroke()
ellipse(0,0,this.size,this.size)

pop()

}


}
