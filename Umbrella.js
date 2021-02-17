class Umbrella{
    constructor(x,y,diameter){
        var options={
isStatic:false
        }
    
    this.body=Bodies.circle(this.x,this.y,diameter)
    this.x=x;
    this.y=y;
    this.diameter=diameter;
    this.image = loadImage("Images/Walking Frame/walking_1.png");
    World.add(world,this.body);
    }

display(){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
   rotate(angle);
  // fill ("pink");
   imageMode(CENTER);
    image(this.image,this.x,this.y,this.diameter,this.diameter);
    pop();

}
}