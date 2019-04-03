/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', () => {
  
  game = new Game();
  game.startGame();
  //game.handleInteraction();  
});
const keyBoardButton = Array.from(document.querySelectorAll("#qwerty button"));
   keyBoardButton.forEach( (item) => {
     item.addEventListener("click", ev => game.handleInteraction(ev.target));
     });

