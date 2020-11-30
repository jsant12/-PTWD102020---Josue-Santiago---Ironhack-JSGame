class Asteroid {
  constructor(x, y, width, context, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.width = 125;
    this.height = 115;
    this.image = new Image();
    this.image.src = "./IMG/asteroid2.png";

    this.context = context;
  }

  draw() {
    this.y += 1;
    if (this.x <= -300 || this.x >= 1800)
    {
      this.direction *= -1;
    }
    this.x += 15 * this.direction;
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  collisionDetection = (pcShip) => {
    if (
      !(
        pcShip.x > this.x + this.width ||
        pcShip.x + pcShip.width < this.x ||
        pcShip.y > this.y + this.height ||
        pcShip.y + pcShip.height < this.y
      )
    ) {
      return true;
    }
    return false;

    
  };

}
