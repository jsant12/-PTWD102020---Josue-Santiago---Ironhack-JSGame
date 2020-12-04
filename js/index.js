window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById("canvas");
    const context = this.canvas.getContext("2d");
    const game = new Game(canvas, context);

    game.init();
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
        case "KeyA":
          if (game.pcShip.x > 55) game.pcShip.x -= 20;
          break;
        case "ArrowRight":
        case "KeyD":
          if (game.pcShip.x <= game.canvas.width - game.pcShip.width - 55)
            game.pcShip.x += 20;
          break;
        case "ControlRight":
        case "KeyX":
          game.startPlWeapon();
      }
      console.log(game.pcShip.x);
    });

    let myVar = setInterval(function () {
      myTimer();
    }, 1000);
    let secondLimit = 1;

    const myTimer = () => {
      if (game.stopTime) {
        myStopFunction();
      }
      document.getElementById("safeTimerDisplay").innerHTML =
      "00:" + zeroPad(secondLimit, 2);
      secondLimit = secondLimit += 1;
      game.score++;
      scoring(game);
    };

    const myStopFunction = () => {
      clearInterval(myVar);
    };

    const zeroPad = (num, places) => {
      var zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    };
  }

  const scoring = (game) => {
    document.getElementById("score").innerText = `${game.score}`;
  };    
  
};
