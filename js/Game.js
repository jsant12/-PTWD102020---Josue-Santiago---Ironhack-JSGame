class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.score = 0;
    this.background = new Image();
    this.background.src = "./IMG/background5.jpg";
    
    this.pcShip = new pcShip(
      this.canvas.width / 2 - 40,
      (this.canvas.height / 4) * 3.5,
      this.context
    );
    
    this.npcShip = new npcShip(
      this.canvas.width / 2 - 40,
      this.canvas.height / 30 ,
      
      this.context
    );

    this.asteroid = new asteroid(
      this.canvas.width / 2 - 1000,
      this.canvas.height /4,
      
      this.context
    );

    this.weapons = [];
    this.plWeapons = [];
    // this.asteroid = [];
  }

  init() {
    this.updateCanvasInterval = setInterval(this.updateCanvas, 50);
    this.startWeaponInterval = setInterval(this.startWeapon, 1500);
    this.startPlWeaponInterval = setInterval(this.startPlWeapon, 1500);
    this.startAsteroidInterval = setInterval(this.startAsteroid, 3500);
  }

  updateCanvas = () => {
    this.context.drawImage(
      this.background,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    this.pcShip.draw();

    this.npcShip.draw();

    this.asteroid.draw();
    
    this.weapons.forEach((weapons, i) => {
      weapons.draw();
      const collision = weapons.collisionDetection(this.pcShip);
      if (collision) {
        this.gameOver();
      }
      if (weapons.y > this.canvas.height) {
        this.score++;
        this.weapons.splice(i, 1);
      }
    });

      this.plWeapons.forEach((plWeapons, i) => {
        plWeapons.draw();
        const collision = plWeapons.collisionDetection(this.npcShip);
        if (collision) {
          this.gameOver();
        }
        if (plWeapons.y > this.canvas.height) {
          this.score++;
          this.plWeapons.splice(i, 1);
        }
      
    });
    console.log(this.score);  
  };

  startWeapon = () => {
    const width = 100 + Math.random() * 100;
    const x = (this.canvas.width - width) * Math.random();
    const weapons = new Weapon(this.npcShip.x + 80, this.npcShip.height, width, this.context);
    this.weapons.push(weapons);
  };

  startPlWeapon = () => {
    const width = 100 + Math.random() * 100;
    const x = (this.canvas.width - width) * Math.random();
    const plWeapons = new pcWeapon(this.pcShip.x + 80, this.pcShip.y, this.context.width, this.context);
    this.plWeapons.push(plWeapons);
  };


  // startAsteroid = () => {
  //   const asteroid = new Asteroid();
  //   this.asteroid.push(asteroid);
  // };
  gameOver = () => {
    clearInterval(this.updateCanvasInterval);
    clearInterval(this.startWeaponInterval);
  };
}
