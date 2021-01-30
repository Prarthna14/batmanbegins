class Rain{
    constructor(x,y,r){
        var options ={
            restitution: 1.0,
            }
    
    this.body = Bodies.circle(x,y,r,options);
    this.r=r;
    World.add(world,this.body);
    }
    display(){
        //this.body.position.x=random(50,350);
        //this.body.position.y=-10;
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
      //rotate(angle);
      fill ("blue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r);
    pop();
    }
}