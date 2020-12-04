class pcWeapon {
  constructor(x, y, width, context) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./IMG/torpedo2.png";

    this.context = context;
  }

  draw() {
    this.y -= 5;
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  collisionDetection = (npcShip) => {
    if (
      !(
        npcShip.x + 30 > this.x + this.width ||
        npcShip.x + npcShip.width < this.x + 30||
        npcShip.y + 30 > this.y + this.height ||
        npcShip.y + npcShip.height < this.y + 30
      )
    ) {
      return true;
    }
    return false;
  };
}
