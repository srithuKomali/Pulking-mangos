class stone{

	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		
		
		 this.body=Bodies.circle(x, y, radius/2, options)
		this.radius=radius
		this.image=loadImage("Plucking mangoes/stone.png");
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER);
		rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.radius*2, this.radius*2)
			pop()
			
	}

}