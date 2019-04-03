/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  /**
  * Display phrase on game board
  */
   addPhraseToDisplay() {
    const myArray = game.activePhrase;    
    const splittedArray = myArray.phrase.split('');
    const myUl = document.querySelector('#phrase.section ul');    
    splittedArray.map( letter => {
      const myLI = document.createElement('LI');
      if (letter === ' ') {
        myLI.className = 'space';
      } else {
        myLI.className = `hide letter ${letter.toLowerCase()}`;
        myLI.textContent = letter;
      }
      myUl.appendChild(myLI);      
    });
  }
  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter){
    // const myPhrase = game.activePhrase.phrase;    
    return this.phrase.toLowerCase().includes(letter);    
  }
  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    const myPhraseWords = document.querySelectorAll('#phrase li');
    ///console.log(myPhraseWords);
    Array.from(myPhraseWords)
    .filter(el => el.textContent.toLowerCase() === letter)
    .map(el => {
      el.classList.remove('hide');
      el.classList.add('show');
      });
  }
}