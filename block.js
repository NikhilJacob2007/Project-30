class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution: 0.4,
          friction: 0.0
        }

        this.image_block = loadImage("block.png");

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.visibility = 255;

      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed < 5) {

          push();
          imageMode(CENTER);
          image(this.image_block, pos.x, pos.y, this.width, this.height);
          pop();

        } else {

          World.remove(world, this.body);
          push();

          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          image(this.image_block, pos.x, pos.y, this.width, this.height);

          pop();
        }
      }
}
