class pcShip {
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 80;
        this.image = new Image();
        this.image.src = './IMG/whiteShip.png';
        this.context = context;
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        
    }

}