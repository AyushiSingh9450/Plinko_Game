class Particle{

    constructor(x, y){

        var options = {
            restitution: 1,
            friction: 0.5,
            density: 1,
            isStatic: false
        }

        this.r = 10;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0,255), random(0,255));

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();

    }
}