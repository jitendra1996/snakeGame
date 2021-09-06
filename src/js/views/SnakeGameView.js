export default class SnakeGameView {
  static width = 20;
  static height = 20;

  constructor(context, xCoordinates, yCoordinates) {
    this.context = context;
    this.xCoordinates = xCoordinates;
    this.yCoordinates = yCoordinates;
    this.alive = false;
  }

  draw() {
    this.context.strokeStyle = "#6495ed";
    this.context.fillStyle = this.alive ? "#6495ed" : "#000000";
    this.context.fillRect(
      this.xCoordinates * SnakeGameView.width,
      this.yCoordinates * SnakeGameView.height,
      SnakeGameView.width,
      SnakeGameView.height
    );
    this.context.strokeRect(
      this.xCoordinates * SnakeGameView.width,
      this.yCoordinates * SnakeGameView.height,
      SnakeGameView.width,
      SnakeGameView.height
    );
  }
}
