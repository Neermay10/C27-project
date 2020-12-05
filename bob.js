class Bob {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            mass:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        

    }
    
}