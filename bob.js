class Bob{
    constructor(x,y,radius){
        var gr = {
            'isStatic':false,
            'restitution':1,
            'friction':0
  
        }
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y,this.radius,gr);
       
  
      World.add(world,this.body);
    }
    display(){
        var posi = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(posi.x,posi.y,this.radius,this.radius);
        
    }
  };