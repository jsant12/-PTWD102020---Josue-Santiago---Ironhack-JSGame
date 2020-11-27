class pcShip {
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 160;
        this.image = new Image();
        this.image.src = './IMG/whiteShip.png';
        this.context = context;
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        
    }

}