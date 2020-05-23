//This is the code for the malware guessing game (evaluation module) using vanilla javascript
//Set of words to be guessed
var malwares = [
    "ransomware",
    "virus",
    "keylogger",
    "trojan",
    "spyware",
    "adware",
    "worm",
    "rootkit",
    "bots"
];

//Set of hints that correspond to malwares
var hints = [
    "Designed to block access to a computer system until a sum of money is paid",
    "Piece of code capable of copying itself while having a detrimental effect on a users system",
    "Records every keystroke made by a user",
    "Program that looks legitimate but can take control of your computer",
    "Obtains and transmits covert info about a persons computer activities",
    "Automatically displays or downloads undesired advertising material when a user is online",
    "Replicates itself in order to spread harm to other computers typically using a computer network",
    "Set of tools that enable an unauthorized user to gain control of a computer system undetected",
    "Can be used maliciously in many ways, including in DOS attacks"
];

/*   var correctFx = new Audio('assets/audio/correct.mp3');
 */

//Audio that plays based on word completion and module completion; also if user selects wrong letter
var completeFx = new Audio('assets/audio/complete.mp3');
var winFx = new Audio('assets/audio/win.mp3');
var failFx = new Audio('assets/audio/fail.mp3');
var incorrectFx = new Audio('assets/audio/incorrect.mp3');

//Variables used to initialize the game and keep track of states within the game
let answer = '';
let lives = 5;
let guessed = [];
let wordStatus = null;
let hintIndex = '';
let wordsGenerated = [];
let hintGenerated = [];
let correct = 0;
let lvldstatus = false;
let gamestatus = true;
let lvlPass = false;


//Generate the list of words to be guessed in a random order
function generateList(n) {
    var i;
    for (i = 0; i < n; i++) {
        var ans;
        var hint;
        ans = malwares[Math.floor(Math.random() * malwares.length)];
        if (wordsGenerated.includes(ans)){         //this is to prevent repeat words from occuring by checking to see if the generated word is already included in the list of answers chosen
            generateList(1);                       //calls the generateList function with parameter of 1 if the word generated already exist in the list of answers
        } else{
            wordsGenerated.push(ans);
            hint = malwares.indexOf(ans);          //using the same index of ans to define the index of the hint to be chosen since they line up in the array definition (ie the answers and hints have indexes that correspond to eachother)
            hintGenerated.push(hint);
            
        }
    }
    //The first word and hint in the list will be the first word the user must guess
    answer = wordsGenerated[0];
    hintIndex = hintGenerated[0];
}

//This function creates the buttons that contain letters the user will use to make guesses
//Note: uses backticks to create html code
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
        <button
            class="btn btn-lg btn-primary m-2"
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
        >
            ` + letter + `
        </button>
        `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

//Handle the letter the user guesses and hide the button once guessed
function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    document.getElementById(chosenLetter).style.display = 'none';

    if(answer.indexOf(chosenLetter) >= 0){
        guessedWord();
        checkWin();
        /* if(lvldstatus == false){
            correctFx.play();
        } */
    } else if (answer.indexOf(chosenLetter) === -1) {
        lives--;
        updateLives();
        checkLost();
        if(lvldstatus == false){
            incorrectFx.play();
        }
        
        
    }
}

//This is to also allow keyboard input instead of just buttons
//Does not work for Safari or old verisons of IE because "key" is not available in those browsers
document.body.addEventListener('keypress', getKey);
function getKey(event){
    var x = event.key;
    console.log(x);
    handleGuess(x);
}

//Did the player win the round/guess the correct word?
function checkWin() {
    if(wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = "NICE!! Try the next word!!";
        correct = correct + 1;
        lvldstatus = true;
        completeFx.play();
    }
    //Did the player guess all the words correctly?
    if(correct == 9){
        document.getElementById('keyboard').innerHTML = "YOU WON!!";
        document.getElementById("next").disabled = true; 
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("previous").disabled = true; 
        document.getElementById("previous").style.visibility = "hidden";
        gamestatus = false;
        lvlPass = true;
        winFx.play();
        document.body.removeEventListener('keypress', getKey);
        switchWithCondition(lvlPass);
    }
}

//Did the player run out of lives?
function checkLost() {
    if(lives === 0){
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = "YOU LOSE!!";
        document.getElementById("next").disabled = true; 
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("previous").disabled = true; 
        document.getElementById("previous").style.visibility = "hidden";
        gamestatus = false;
        lvldstatus = true;
        failFx.play();
        reset();
        switchWithCondition(lvlPass);

    }
}

//Show hints and "_" for unguessed letters
function guessedWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter: "_ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
    document.getElementById('hint').innerHTML = hints[hintIndex];
}

//Update the lives count
function updateLives() {
    document.getElementById('lives').innerHTML = lives;
}

//Go back to previous word in the array
function previousWord(){
    guessed = [];
    //Helps traverse the array and make sure player doesn't go beyond the bounds of the array
    var a = wordsGenerated.indexOf(answer) - 1;
    if (a < 0){
        a = 0;
    }
    answer = wordsGenerated[a];
    hintIndex = hintGenerated[a];
    guessedWord();
    generateButtons();
    lvldstatus = false;
}

//Go to next word in the array
function nextWord(){
    guessed = [];
    //Helps traverse the array and make sure player doesn't go beyond the bounds of the array
    var a = wordsGenerated.indexOf(answer) + 1;
    if (a > 8){
        a = 8;
    }
    answer = wordsGenerated[a];
    hintIndex = hintGenerated[a];
    guessedWord();
    generateButtons();
    lvldstatus = false;
}

//Resets the game state so if player fails, the game is reset for them
function reset(){
    mistakes = 0;
    lives = 5;
    guessed = [];
    wordsGenerated = [];
    hintGenerated = [];
    rep = [];
    answer = '';
    hintIndex = '';
    correct = 0;

    generateList(9);
    guessedWord();
    updateLives();
    generateButtons();

    document.getElementById("next").disabled = false; 
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("previous").disabled = false; 
    document.getElementById("previous").style.visibility = "visible";

    gamestatus = true;

}

document.getElementById('lives').innerHTML = lives;

 generateList(9);
 generateButtons();
 guessedWord();
 