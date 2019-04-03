/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrase();
    this.activePhrase = null;//this.getRandomPhrase();     
  }
  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
    createPhrase(){
      let phrases = [];
      phrases.push(new Phrase("Be a voice not an echo"));
      phrases.push(new Phrase("Fortune favors the brave"));
      phrases.push(new Phrase("Brevity is the soul of wit"));
      phrases.push(new Phrase("Imitation is suicide")); 
      phrases.push(new Phrase("A joke is a very serious thing"));
      return phrases;
    
  }
  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random()*this.phrases.length)];
  }
  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {    
    const startScreen = document.querySelector('#overlay');
    startScreen.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();    
    this.activePhrase.addPhraseToDisplay();
  }
  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button) {
    const letter = button.innerHTML;      
    const checkLetter = this.activePhrase.checkLetter(letter);        
    button.setAttribute('disabled',true);
    if (checkLetter) {      
      button.classList.add('chosen');
      game.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {      
      button.classList.add('wrong');
      this.removeLife();
    }

  }
  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
    won
  */
  checkForWin() {
    const myli = Array.from(document.querySelectorAll('#phrase.section ul li.letter'));
    return myli.every( el => el.classList.contains('show'));
  }
  /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
  removeLife() {
    let lives = document.getElementsByClassName('tries');
    lives = Array.from(lives);
    lives = lives.filter( el => el.firstChild.getAttribute("src") === "images/liveHeart.png");
    lives[0].firstChild.setAttribute('src','images/lostHeart.png');
    this.missed += 1;
    if (this.missed === 5){
      this.gameOver(false);
    }
  }
  /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver(gameWon) {
    const startScreen = document.querySelector('#overlay');
    const gameOverMessage = document.getElementById("game-over-message");
    if(gameWon) {
    startScreen.style.display = 'flex';
    startScreen.classList.remove('start','lose');
    startScreen.classList.add('win');
    gameOverMessage.textContent = "Great Job!!!";
    } else {    
    startScreen.style.display = 'flex';
    startScreen.classList.remove('start','win');
    startScreen.classList.add('lose');
    gameOverMessage.textContent = "Sorry, You lost";
    }
    this.resetGame();
  }
  /*
    Game reset method resets the game to initial state
  */
   resetGame() {
    Array.from(document.querySelectorAll('#phrase li')).forEach(el => el.remove());
    const myButtons = document.querySelectorAll('.key');
    myButtons.forEach(el => {
      el.removeAttribute('disabled');
      el.classList.remove('chosen','wrong');
      el.classList.add('key');
    });
    document.querySelectorAll('.tries img').forEach(img => img.src = "images/liveHeart.png");
    this.missed = 0;
  } 
}