class asteroid {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.dx = 10;
    this.width = 160;
    this.height = 160;
    this.image = new Image();
    this.image.src = "./IMG/asteroid2.png";

    this.context = context;
  }

  draw() {
    this.y += 0.5;
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    if (this.x >= canvas.width - this.width) {
      this.dx = this.x-10;
    } else if (this.x <= 0) {
      this.dx = 10;
    }
    this.x += this.dx;
  }
  
  
}
