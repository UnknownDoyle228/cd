class Ball{
  constructor(x,y){
      var options={
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=40;
      this.body=Bodies.circle(x,y,40,options);
      World.add(world,this.body);
  }
  display(){

      var pos = this.body.position;

      push();
    //   translate(pos.x,pos.y);
      ellipseMode(CENTER);
    //   strokeWeight(3);
      fill(255,0,255);
      ellipse(pos.x,pos.y,40,40);
      pop();
  }
}
