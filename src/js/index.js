import { elements } from "./views/base";
import SnakeGameLogic from "./models/SnakeGameLogic";
//import SnakeGameView from "./views/SnakeGameView";


let snakeGame = new SnakeGameLogic(elements.canvas);
//let GAME_PLAY = false;
snakeGame.drawSnakeObjects();

elements.playBtn.addEventListener('click',e=>{
    console.log("play clicked!");
    SnakeGameLogic.GAME_STATUS = !SnakeGameLogic.GAME_STATUS;
    if(SnakeGameLogic.GAME_STATUS){
        snakeGame.gamePlay();
        elements.playBtnIcon.src = './img/pause.png';
    }else{
        elements.playBtnIcon.src = './img/play.png';
    }

});

document.addEventListener('keydown' , e => {
    e.preventDefault();
    let code = e.code;
    if(SnakeGameLogic.GAME_STATUS){
        console.log(code);
    }
})

let i = 0;
let txt = "snake game";
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    elements.headingTxt.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);