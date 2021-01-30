class Umbrella{
    constructor(){
        var options ={
           isStatic:true
        }
    
    this.body = Bodies.rectangle(200,275,50,50,options);
    this.image=loadImage("images/WalkingFrame/walking_1.png");
    World.add(world,this.body);
    }
    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,250,250);
    }
}