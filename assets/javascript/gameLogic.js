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

//Game Functions
const randomizer = () => {
    currWord = WORDS[Math.floor(Math.random()*WORDS.length)].split('')
};

const setblanks = () => {
    let hold = [];
    currWord.map(i => {
        if(i === ' ')hold.push(' ');
        else hold.push('*');
    })
    blanks = hold.join("");
};
randomizer();
setblanks();
console.log(blanks,'\n',currWord.join(''));

