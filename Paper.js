class Paper
{
    constructor()
    {
        var option={
            'isStatic':false,
            'restitution' : 0.3,
            'friction': 0.5,
            'density': 3.5
        }
        this.body=Bodies.circle(100,600,20/2,option);
        World.add(world,this.body);
        this.width=100;
        this.height=100;
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill ("blue");
        rectMode(CENTER);
        ellipse(0,0,40,40);
        pop();     
    }

}
