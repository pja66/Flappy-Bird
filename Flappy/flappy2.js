var c = document.getElementById("canvas"); 
var ctx = c.getContext("2d");
var frame = 0;
 var x =0;
 var a = 0;
 var playAgain;
 

 	
 		
 		
 
 
 
 var speed = prompt("Please enter how fast you want the game", "Slow, Medium, or Fast");

var z = 0;

 if(speed == "Slow")
 	{
 		z = 30;
 	
 	}
 else if(speed == "Medium") 
 	{
 		z = 60;
 	
 	}
 else if(speed == "Fast")
 	{
 		z = 90;
 	
 	}
 else{
 		z = 30;
 
 	}
 
 
 function Bird() {
					this.x = 64;
					this.y = c.height/2;                                  
					this.gravity = 1;
					this.velocity = 0;
					this.lift = -20;      
					this.show = function(){
					     					 ctx.beginPath();
					     					 ctx.arc(this.x,this.y,16,0, 2*Math.PI); 
					     					 ctx.fillStyle = "green";
					     					  ctx.fill();
										}    
										
					this.update = function() { //the gravity to the velocity and limit the velocity then apply the vveloicty to the birds y position. 
												this.velocity += this.gravity;
												this.velocity *= 0.9; 
												this.y += this.velocity;
												
												if(this.y <0) {
																this.velocity = 0;
																this.y = 0;
														
															}
												else if(this.y > c.height)
															{
																this.velocity = 0;
																this.y = c.height;
															}
											}	
														
					this.up = function() {
											this.velocity += this.lift;
										}
										
					this.right = function() {
											this.x += 10;
										}
										
					this.left = function() {
											this.x += -10;
										}				
					
				 } 		 
					var bird1 = new Bird();
					
	function Pipe(){ //pipe constructor object  
					this.gap = 100;
					
					this.width = 32;
					this.speed = -2;
					this.x = c.width;
					this.color = "green";
					this.top = Math.random()*(c.height-this.gap); 
					this.bottom = this.top+this.gap;
					ctx.fillStyle = "#332211";
					this.show = function(){
											this.hit();
											ctx.fillStyle = this.color;
											ctx.fillRect(this.x,0,this.width,this.top);
											ctx.fillRect(this.x,this.bottom,this.width,c.height-this.bottom);
										}
					this.update = function(){
												this.x += this.speed;
										}
					this.hit = function() {
											if(this.color == "green")
												{
												if((bird.x) >= this.x && (bird.x) <= (this.x + this.width)){
													if((bird.y)<=this.top || (bird.y) >= this.bottom)
														{
															this.color = "red";
															x = 0; 
															
															
														
														if(a ==0)
															{
															playAgain = prompt("You died. Your score was "+x+". If you want to play again type yes.");
															if(playAgain == "yes")
																{
																	location.reload();
																}
															else
																{
																	a++;
																}
															}
														}
																else{
																		this.color = "blue";
																		x++;
																	}
														}
														
													}
											}
				}	
				  
		
		
var bird;
 var pipes = [];

		
 var test = document.getElementById("test");

 
function setup() {
					document.addEventListener("keydown", keyPush); 
					bird = new Bird()
					bird.show();
					pipes.push(new Pipe());
					
					for(var i = 0; i < pipes.length;i++)
						{
							
							pipes[i].show();
						
						}
					

				}

function draw() {
					ctx.clearRect(0,0, canvas.width, canvas.height); // clears canvas of all drawn elements.  
					bird.update();
					bird.show();
					
					
					
					for(var i = pipes.length-1;i>=0;i--)
						{
							if(pipes[i].x<0)
								{
									pipes.splice(i,1);
								}
							else
								{
									pipes[i].update();
									pipes[i].show();
								}
								
							pipes[i].update();
							pipes[i].show();
						
						}
					
					 test.innerHTML = "Your Score is "+x;
					
					frame++;
					
					if(frame % 90 ==0)
						{
							pipes.push(new Pipe());
						}
						
					if(a >0)
						{
							ctx.clearRect(0,0, canvas.width, canvas.height); // clears canvas of all drawn elements. 
																	 
						}
					
					
				}
				


function keyPush(evt,rightKey) 
		{
			switch(evt.keyCode){
				case 32:
				console.log("space");
				bird.up();
				break;  
				case 39:
				console.log("right"); 
				bird.right();
				break;  
				case 37:
				console.log("left");
				bird.left();
				break;  
				} 
		}				
				
				
 setInterval(draw,1000/z);