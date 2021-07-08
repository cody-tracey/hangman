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

//Game Functions
const randomizer = () => {
    currWord = WORDS[Math.floor(Math.random()*WORDS.length)].split('')
};

