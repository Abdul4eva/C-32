class Boat {

  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("assets/boat.png")
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    this.image(this.image,0, 0, this.width, this.height);
    pop();
  }
}
