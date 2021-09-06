import SnakeGameView from "../views/SnakeGameView";

export default class SnakeGameLogic {
  static val = 0;
  static randomNum = -1 ;
  static collisionDetection = false;
  static GAME_STATUS = false ;

  constructor(canvasId) {
    this.canvas = canvasId;
    this.context = canvasId.getContext("2d");
    this.rows = Math.floor(this.canvas.height / SnakeGameView.width);
    this.cols = Math.floor(this.canvas.width / SnakeGameView.height);
    this.snakeObjects = new Array();
    this.snake = new Array();
    this.createGrid();
  }
  
  gamePlay(){
    window.requestAnimationFrame(() => this.gameLoop());
  }

  createGrid() {
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.cols; column++) {
        this.snakeObjects.push(new SnakeGameView(this.context, column, row));
      }
    }
  }

  snakeMovementTrack() {
    if (SnakeGameLogic.val === this.snakeObjects.length) {
      this.snakeObjects[SnakeGameLogic.val - 1].alive =
        !this.snakeObjects[SnakeGameLogic.val - 1].alive;
      SnakeGameLogic.val = 0;
    } else {
    //    if(this.snakeObjects[SnakeGameLogic.val].xCoordinates > this.snakeObjects[SnakeGameLogic.randomNum].xCoordinates){

    //    }
    //    if(this.snakeObjects[SnakeGameLogic.val].xCoordinates < this.snakeObjects[SnakeGameLogic.randomNum].xCoordinates){

    //    }
    //    if(this.snakeObjects[SnakeGameLogic.val].yCoordinates > this.snakeObjects[SnakeGameLogic.randomNum].yCoordinates){

    //    }
    //    if(this.snakeObjects[SnakeGameLogic.val].yCoordinates < this.snakeObjects[SnakeGameLogic.randomNum].yCoordinates){

    //    }
      this.snakeObjects[SnakeGameLogic.val].alive =
        !this.snakeObjects[SnakeGameLogic.val].alive;
      if (SnakeGameLogic.val >= 1) {
        this.snakeObjects[SnakeGameLogic.val - 1].alive =
          !this.snakeObjects[SnakeGameLogic.val - 1].alive;
        if (SnakeGameLogic.val < this.snakeObjects.length - 1) {
          if (this.snakeObjects[SnakeGameLogic.val + 1].alive === true) {
            SnakeGameLogic.collisionDetection = false;
            this.snakeObjects[SnakeGameLogic.val + 1].alive = false;
          }
        }
      }
      SnakeGameLogic.val++;
    }
  }

  generateRandomGrid() {
      if (!SnakeGameLogic.collisionDetection) {
        SnakeGameLogic.randomNum = Math.floor(Math.random() * this.snakeObjects.length);
      this.snakeObjects[SnakeGameLogic.randomNum].alive = true;
      SnakeGameLogic.collisionDetection = true;
    }
  }

  snakeMoveOnX(){

  }

  gameLoop() {
    if(SnakeGameLogic.GAME_STATUS){

      //clear the screen
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      //draw random grid on canvas
      this.generateRandomGrid();
  
      //draw the moving grid on canvas
      this.snakeMovementTrack();
      
      //draw SnakeObjects on canvas
      this.drawSnakeObjects();
      //this.newState();
  
      setTimeout(() => {
        //use to make endless loop
        window.requestAnimationFrame(() => this.gameLoop());
      }, 10);
    }else{
      this.drawSnakeObjects();
    }
  }

  newState() {
    for (let i = 0; i < this.snakeObjects.length; i++) {
      this.snakeObjects[i].alive = true;
    }
  }

  drawSnakeObjects() {
    for (let i = 0; i < this.snakeObjects.length; i++) {
      this.snakeObjects[i].draw();
    }
  }

  drawSnake(){
    for (let i = 0 ; i < this.snake.length ; i++){
      this.snake[i].alive = true ;
    }
  }
}
