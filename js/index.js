window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  
  function startGame() {
    const canvas = document.getElementById('canvas');
    const context = this.canvas.getContext('2d');
    const game = new Game(canvas, context);
    game.init();


    document.addEventListener('keydown', event => {
      switch(event.code) {
        case 'ArrowLeft':
        case 'KeyA':
          if(game.pcShip.x > 55) game.pcShip.x -= 20; 
          break;
        case 'ArrowRight':
        case 'KeyD':
          if(game.pcShip.x <= game.canvas.width - game.pcShip.width - 55) game.pcShip.x += 20;
          break;
      };
      console.log(game.pcShip.x);
      
    });

    
  }
};
