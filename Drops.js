class Drops{
constructor(x,y,diameter){
    var options={
        'friction':0.1,
        'restitution':0.02,
        'density':1.0

    }

this.body=Bodies.circle(this.x,this.y,diameter,options)
this.x=x;
this.y=y;
this.diameter=diameter;
World.add(world,this.body);


}

display(){

    
      
       ellipseMode(CENTER)
       ellipse(this.body.position.x,this.body.position.y)
     
       
       
 }
}
function updateY(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
       }
    
 }

