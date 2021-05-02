class Chain{
    constructor(body1,body2){
  var opt={
      bodyA : body1,
      bodyB : body2,
      stiffness : 0.04,
      length : 10
  }

  this.body1 = body1
  this.body2 = body2
this.body = Constraint.create(opt)
World.add(world,this.body)
 

    }
display(){



line(this.body1.position.x,this.body1.position.y,this.body2.position.x,this.body2.position.y);
}
}