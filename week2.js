// const count = document.querySelector("#count");
// const zerobtn = document.querySelector("#zero"); 
// const subbtn = document.querySelector("#sub");
// const addbtn = document.querySelector("#add");

// addbtn.addEventListener("click", () => {
//     count.innerText = parseInt(count.innerText) + 1;
// });
// subbtn.addEventListener("click", () => {
//     count.innerText = parseInt(count.innerText) - 1;
// });
// zerobtn.addEventListener("click", () => {
//     count.innerText = 0;
// });

const count = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const zero = document.getElementById("zero");

zero.onclick = () => {
    count.textContent = 0;
}
add.onclick = () => {
    count.textContent = parseInt(count.textContent) + 1;
}
sub.onclick = () => {
    count.textContent = parseInt(count.textContent) - 1;
}
//<< --------- 1st app completed --------- >>

const colorbtn = document.getElementById("color");
const display = document.getElementById("display");
const container2 = document.getElementById("container2");
display.textContent = "White";
let colors = ["white", "black", "red", "blue", "green", "yellow"];

colorbtn.onclick = () => {
    Math.floor(Math.random() * colors.length);
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    container2.style.backgroundColor = randomColor;
    display.textContent = randomColor;
}

//<< --------- 2nd app completed --------- >>

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const clear = document.getElementById("clear");
const result = document.getElementById("res");
const pcimg = document.getElementById("pcimg");
const userimg = document.getElementById("userimg");
const pscore = document.getElementById("pscore");
const uscore = document.getElementById("uscore");

pscore.textContent = 0;
uscore.textContent = 0;
result.textContent = "Start the Game";

let choices = ["rock", "paper", "scissor"];

clear.onclick = () => {
    result.textContent = "Start the Game";
    pscore.textContent = 0;
    uscore.textContent = 0;
}

rock.onclick = () => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    pcimg.src = "img/"+randomChoice + ".png";
    userimg.src = "img/rock.png";    
    if (randomChoice === "rock") {
        result.textContent = "Draw";
        uscore.textContent = parseInt(uscore.textContent) + 0;
        pscore.textContent = parseInt(pscore.textContent) + 0;
    } else if (randomChoice === "paper") {
        result.textContent = "You lose";
        uscore.textContent = parseInt(uscore.textContent) + 0;
        pscore.textContent = parseInt(pscore.textContent) + 1;
    } else {
        result.textContent = "You win";
        uscore.textContent = parseInt(uscore.textContent) + 1;
        pscore.textContent = parseInt(pscore.textContent) + 0;
    }
}

paper.onclick = () => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    pcimg.src = "img/"+randomChoice + ".png";
    userimg.src = "img/paper.png";    
    if (randomChoice === "rock") {
        result.textContent = "You win";
        uscore.textContent = parseInt(uscore.textContent) + 1;
        pscore.textContent = parseInt(pscore.textContent) + 0;
    } else if (randomChoice === "paper") {
        result.textContent = "Draw";
        uscore.textContent = parseInt(uscore.textContent) + 0;
        pscore.textContent = parseInt(pscore.textContent) + 0;
    } else {
        result.textContent = "You lose";
        uscore.textContent = parseInt(uscore.textContent) + 0;
        pscore.textContent = parseInt(pscore.textContent) + 1;
    }
}

scissors.onclick = () => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    pcimg.src = "img/"+randomChoice + ".png";
    userimg.src = "img/scissor.png";    
    if (randomChoice === "rock") {
        result.textContent = "You lose";
        uscore.textContent = parseInt(uscore.textContent) + 0;
        pscore.textContent = parseInt(pscore.textContent) + 1;
    } else if (randomChoice === "paper") {
        result.textContent = "You win";
        uscore.textContent = parseInt(uscore.textContent) + 1;
        pscore.textContent = parseInt(pscore.textContent) + 0;
    } else {
        result.textContent = "Draw";
        uscore.textContent = parseInt(uscore.textContent) + 0;
        pscore.textContent = parseInt(pscore.textContent) + 0;
    }
}
//<< --------- 3rd app completed --------- >>

const guess = document.getElementById('guess');
const wins = document.getElementById('wins');
const innerbtn = document.getElementById('Innerbtn');
const inner = document.getElementById('Inner');

wins.innerText = 0;

innerbtn.onclick = () => {
    if(guess.value == 0){
        alert("Enter the Number First!!");
        wins.innerText = 0;
        inner.innerText = "";
    }
    else{
    value = Math.floor(Math.random() * 9);
    inner.innerText = value;
    if (guess.value == value){
        wins.innerText = parseInt(wins.innerText) + 1;
    }
    }
}
// << ---------- 4th app completed ---------------- >>

const diceFaces = ['img/dice1.png', 'img/dice2.png', 'img/dice3.png', 'img/dice4.png', 'img/dice5.png', 'img/dice6.png'];
function rollDice() {
  const dice = document.getElementById("dice");
  dice.classList.add("rolling");
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * 6);
    dice.src = diceFaces[randomIndex];
    dice.classList.remove("rolling");
  }, 500);
}
// << --------- 5th app completed ----------------- >>


function update(){
    const timer = document.getElementById("timer");
    const date = new Date();
    let hours = date.getHours();
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    let minutes = date.getMinutes().toString().padStart(2,0);
    let seconds = date.getSeconds().toString().padStart(2,0);
    if(hours > 12){
        timer.innerText = `${hours-12}:${minutes}:${seconds} PM`;
    }
    else if(hours < 12){
        timer.innerText = `${hours}:${minutes}:${seconds} AM`;
    }
}

setInterval(update, 1000);

// << ---------6th app completed ------------- >>

const screen = document.getElementById("screen");
const buttons = document.getElementsByClassName("cal");

function calc(input){
    if(input == "C"){
        screen.innerText = 0;
    }
    else if(input == "="){
        screen.innerText = eval(screen.innerText);
    }
}
buttons[13].addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        screen.innerText = "";      
    }, 500);
});
buttons[13].addEventListener('mouseup', () => {
    clearTimeout(pressTimer); 
});

screen.textContent = "";
buttons[0].onclick = () => {
    screen.textContent += parseInt(1);
}
buttons[1].onclick = () => {
    screen.textContent += parseInt(2);
}
buttons[2].onclick = () => {
    screen.textContent += parseInt(3);
}
buttons[3].onclick = () => {
    screen.innerText += "/";
}
buttons[4].onclick = () => {
    screen.textContent += parseInt(4);
}
buttons[5].onclick = () => {
    screen.textContent += parseInt(5);
}
buttons[6].onclick = () => {
    screen.textContent += parseInt(6);
}
buttons[7].onclick = () => {
    screen.innerText += "*";
}
buttons[8].onclick = () => {
    screen.textContent += parseInt(7);
}
buttons[9].onclick = () => {
    screen.textContent += parseInt(8);
}
buttons[10].onclick = () => {
    screen.textContent += parseInt(9);
}
buttons[11].onclick = () => {
    screen.innerText += "-";
}
buttons[12].onclick = () => {
    screen.textContent += parseInt(0);
}
buttons[13].onclick = () => {
    screen.innerText = screen.innerText.slice(0,-1);
}
buttons[14].onclick = () => {
    calc("=");
}
buttons[15].onclick = () => {
    screen.innerText += "+";
}

// << -------- 7th app completed ----------- >>