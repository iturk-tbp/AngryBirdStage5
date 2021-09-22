class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255
  }
display(){
  console.log(this.body.speed);
  if(this.body.speed<5){
    super.display();
  }
  else{
    World.remove(world,this.body)
    //push command helps us to accept new changes for this particular class only.
    push ();
    this.visiblity = this.visiblity - 2;
    tint(255,this.visiblity);
    image (this.image,this.body.position.x,this.body.position.y,50,50);
    //pop helps in going back to our own settings.
    pop ();
  }
  
}
};