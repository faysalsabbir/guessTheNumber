/**
 * Guess The Number Game
 */

// Variable for store the correct random number 
let correctNumber;
let guesses = []

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    initGame()
}

/**
 * Functionality for playing the whole game
 */
function playGame() {

    let numberGuess = document.getElementById('number-guess').value
    console.log('Correct Number', correctNumber)
    if (numberGuess !== '') {
        displayResult(numberGuess)
        saveGuessHistory(numberGuess)
        displayHistory()
    }
    

}

/**
 * Show the result for if the guess it too high, too low, or correct
 */
function displayResult(numberGuess) {

    if (numberGuess > correctNumber) {
        showNumberAbove()
    } else if (numberGuess < correctNumber) {
        showNumberBelow()
    } else {
        showYouWon()
    }
}


/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame() {
    // *CODE GOES BELOW HERE *
    getRandomNumber()
    document.getElementById('number-guess').value = ''
    resetResultContent()
    document.getElementById('history').innerHTML = ''
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber() {

    correctNumber = Math.floor((Math.random() * 100) + 1)

}

/**
 * Save guess history 
 */
function saveGuessHistory(guess) {
    // guesses.push(guess)
    // guesses.splice(0, 0, guess)
    guesses.unshift(guess)
}

/**
 * Display guess history to user
 */
function displayHistory() {
    let index; // TODO
    let list = "<ul class='list-group'>";

    for (guess of guesses) {
        list += `
        <li class='list-group-item'>You guessed ${guess}</li>
        `
    }

    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showYouWon() {
    const text = "Awesome job, you got it!"
    /**
     * Retrieve the dialog using the getDialog() function
     */
    let dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     */
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     */
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}
