class Weapon {
  constructor(x, y, width, context) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./IMG/torpedo1.png";

    this.context = context;
  }

  draw() {
    this.y += 5;
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
