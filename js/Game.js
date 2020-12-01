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
      this.canvas.height / 30,

      this.context
    );

    this.weapons = [];
    this.plWeapons = [];
    this.asteroid = [];
  }

  init() {
    this.updateCanvasInterval = setInterval(this.updateCanvas, 50);
    this.startWeaponInterval = setInterval(this.startWeapon, Math.floor(Math.random() * 400) + 200);
    // this.startPlWeaponInterval = setInterval(this.startPlWeapon, 2400);
    // this.startAsteroidInterval = setInterval(this.startAsteroid, 4000);

    this.asteroid[0] = new Asteroid(this.canvas.width/2, this.canvas.height/2, this.canvas.width, this.context, -0.60);
    this.asteroid[1] = new Asteroid(this.canvas.width/1.5, this.canvas.height/4, this.canvas.width, this.context, 0.25);
    this.asteroid[2] = new Asteroid(this.canvas.width/1, this.canvas.height/4 + this.canvas.height/3, this.canvas.width, this.context, -0.60);
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
      if (plWeapons.collisionDetection(this.npcShip)) {
        this.gameOver();
      }
      if (plWeapons.y > this.canvas.height) {
        this.score++;
        this.plWeapons.splice(i, 1);
      }
    });

    this.asteroid.forEach((asteroid, i) => {
      asteroid.draw();
      const collision = asteroid.collisionDetection(this.pcShip);
      if (collision) {
        this.gameOver();
      }
    });
    console.log(this.score);
  };

  startWeapon = () => {
    const width = 300 + Math.random() * 500;
    const x = (this.canvas.width - width) * Math.random();
    const weapons = new Weapon(
      this.npcShip.x + 80,
      this.npcShip.height,
      width,
      this.context
    );
      if(Math.floor(Math.random() * 100) % 4 === 0) {
        this.weapons.push(weapons);
      }
  };

  startPlWeapon = () => {
    const width = 100 + Math.random() * 100;
    const plWeapons = new pcWeapon(
      this.pcShip.x + 35,
      this.pcShip.y,
      this.context.width,
      this.context,
      this.plWeapons.y - 100
    );
    this.plWeapons.push(plWeapons);
  };

  startAsteroid = () => {
    const width = 100 + Math.random() * 300;
    const x = (this.canvas.width - width) * Math.random();
    const asteroid = new Asteroid(
      this.canvas.width,
      this.canvas.height/2,
      width,
      this.context
    );
    this.asteroid.push(asteroid);
  };

  scoreBoard = () => {
    context.fillStyle = 'white';
    context.font = '30px "Verdana"';
    context.fillText(`Score :`, 800, 50);
  };

  gameOver = () => {
    clearInterval(this.updateCanvasInterval);
    clearInterval(this.startWeaponInterval);
    clearInterval(this.startAsteroidInterval);
  };
};
