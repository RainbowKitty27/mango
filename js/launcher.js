class Slingshot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:1,
        
        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)


}
fly(){
    this.sling.bodyA=null
    
}
attach(body){
    this.sling.bodyA=body
}
display(){
    if (this.sling.bodyA){
    var posA=this.sling.bodyA.position
    var posB=this.pointB
    line(posA.x,posA.y,posB.x,posB.y)
    }
}
}