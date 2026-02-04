document.addEventListener("keyup", processKeyEvent);

const colors = [
    'red', 'pink', 'black', 'orange', 'green', 'lightblue', 'yellow',
    'fuchsia', 'lime', 'cyan', 'gold', 'deepskyblue',
    'indigo', 'crimson', 'darkslategrey', 'midnightblue', 'rebeccapurple', 'thistle', 'honeydew', 'lavender', 'peachpuff', 'mintcream'
];

const words = ["cat","dog","sun","sky","sea","tree","leaf","rock","fire","wind","rain","snow","cloud","storm","river","lake","ocean","beach","sand","stone","grass","plant","flower","seed","root","branch","fruit","apple","mango","banana","orange","grape","berry","melon","peach","cherry","lemon","lime","date","fig","olive","bread","rice","wheat","corn","sugar","salt","spice","sweet","sour","bitter","taste","smell","sound","light","dark","night","day","morning","evening","dream","sleep","awake","think","learn","study","write","read","count","solve","build","create","design","debug","logic","array","stack","queue","graph","tree","node","edge","hash","map","set","vector","string","number","random","simple","fast","clean"];

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// sound section
const correctSound = new Audio('./sounds/correct.mp3');
const wrongSound = new Audio('./sounds/wrong.mp3');


const display = document.getElementById("display_key");

let currentLetter = "";

changeWord();

function changeWord(){
    let x = Math.floor(Math.random() * 26);
    currentLetter =  letters[x];
    display.innerText = currentLetter;
}


function processKeyEvent(e) {
    if(e.key == currentLetter){
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        
        // right tick sound
        correctSound.currentTime = 0;
        correctSound.play();

        changeWord()
    } else {
        document.body.style.backgroundColor = colors[0];

        // wrong beep sound
        wrongSound.currentTime = 0;
        wrongSound.play();
    }
}

