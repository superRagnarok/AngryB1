class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:1,
            friction:1.0
            
           
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        stroke("white");
        fill("orange");
        rect(0,0,this.width,this.height);
        pop();
    }
    
    
    
}