//Global Variables
const WORDS = [
    'stephen strange',
    'bruce banner',
    'peter parker',
    'reed richards',
    'sue storm',
];
let tries = 10;
//Current word to be guessed
let currWord;
//The blanks where the letters will be;
let blanks;
//Already guessed chars
let used = [];

//Game Functions

//Picks a random word from the list and assigns it to the currWord variable.
const randomizer = () => {
    currWord = WORDS[Math.floor(Math.random() * WORDS.length)].split('')
};

//Creates a series of blanks that is the same length as the currWord variable
const setblanks = () => {
    let hold = [];
    currWord.map(i => {
        if (i === ' ') hold.push(' ');
        else hold.push('*');
    })
    blanks = hold.join("");
};

//Checks to see if the guessed letter is one of the mystery letters, and updates it if it is. If it is not one of the mystery letters it subtracts a try.
const checker = guessed => {
    if (!used.includes(guessed)) {
        if (currWord.includes(guessed)) {
            let hold = blanks.split('');
            currWord.map((item, index) => {
                if (item === guessed && guessed !== ' ') hold[index] = guessed;
            })
            blanks = hold.join('');
            console.log(blanks)
        } else {
            tries--;
            console.log(tries)
        };
        used.push(guessed);
    }
    console.log(guessed)

};

//Checks to see if the game is over...
const endGame = () => {
    if (tries <= 0) {
        alert("You have lost :( play again?")
    }
    if (!blanks.includes('*')) {
        alert("You have won :) play again?")
    }
};

randomizer();
setblanks();
console.log(blanks, '\n', currWord.join(''));

document.onkeyup = event => {
    let guessed = event.key.toLowerCase();
    checker(guessed);
    endGame();
};

