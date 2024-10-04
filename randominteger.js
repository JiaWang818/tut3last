function game() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let count = 0;
    const guesses = [];
    
    const guessField = document.getElementById('guessField');
    const guessSubmit = document.getElementById('guessSubmit');
    const guessesDisplay = document.getElementById('guesses');
    const information = document.getElementById('information');
    const information2 = document.getElementById('information2');

    guessSubmit.addEventListener('click', checkGuess);

    function checkGuess() {
        let usernum = Number(guessField.value);
        count++;
        
        if (isNaN(usernum) || usernum < 1 || usernum > 100) {
            information.textContent = 'please enter a number！(1~100)';
            return;
        }
        
        guesses.push(usernum);
        guessesDisplay.textContent = 'the number you guessed: ' + guesses.join(', ');

        console.log(usernum,randomNumber);

        if (usernum === randomNumber) {
            if (confirm('bingo！want to play again?')) {
                guesses.length = 0;
                guessesDisplay.textContent = '';
                information.textContent = '';
                information2.textContent = '';
                guessField.value = '';
        
            }
        } else if (count === 10) {
            information2.textContent = 'OMG!no chance';
            if (confirm('OMG!no chance！want to play again?')) {
                guesses.length = 0;
                guessesDisplay.textContent = '';
                information.textContent = '';
                information2.textContent = '';
                guessField.value = '';
        
            }
        } else {
            if (usernum < randomNumber) {
                information.textContent = 'too low！';
            } else {
                information.textContent = 'too high！';
            }
        }
        
        guessField.value = '';
    
    }
    

}

game();
