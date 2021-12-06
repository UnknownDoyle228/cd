class Rope {
  constructor(bodyA, pointB) {

    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.5,
      length: 250
    }
 
    //this.pointA = po
   
    this.rope = Constraint.create(options); 
    this.pointB = pointB;
    World.add(world, this.rope);
  }

  attach(body) {
    this.rope.bodyA = body;
  }

  fly() {
    this.rope.bodyA = null;
  }

  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke(48, 22, 8);
      strokeWeight(3);

      line( pointA.x, pointA.y,pointB.x, pointB.y);

      pop();
    }
  }
}
