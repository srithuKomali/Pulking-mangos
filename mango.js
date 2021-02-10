class mango{
	constructor(x,y,radius)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		
		
		this.body=Bodies.circle(x, y, radius/2, options)
		this.image=loadImage("Plucking mangoes/mango.png")
		
		this.radius=radius
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		 rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius*2, this.radius*2)
		pop()
 }
}