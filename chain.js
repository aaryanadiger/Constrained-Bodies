class Chain {
    constructor(bodyA,bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:1,
            length:100
        }

        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    display(){
        var pA = this.body.bodyA.position;
        var pB = this.body.bodyB.position;

        strokeWeight(3);
        line(pA.x,pA.y,pB.x,pB.y);

    }
} 