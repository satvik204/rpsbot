//Declaring vars

let pscore = Number(localStorage.getItem("p1score"));
let computer = Number(localStorage.getItem("p2score"));
let timer = 0;

const p1text  = document.getElementById("p1score");
const p2text  = document.getElementById("p2score");
const tim  = document.querySelector(".time");
if(pscore == null){
    localStorage.setItem("p1score",0)
    localStorage.setItem("p2score",0)
}
//setting text as localStorage
p1text.innerText = localStorage.getItem("p1score");
p2text.innerText = localStorage.getItem("p2score");
// Getting bot choice
var b = 3
var cChoice = Math.floor(b*(Math.random()))
console.log(cChoice);

// getting player choice
function sendChoice(choice) {
    //Check Winner
    declareWinner(cChoice === 0 ? "Rock" : cChoice === 1 ? "Paper" : "Scissor",choice)
    
    //Create opponent choice button and stop the function
    const cButton = document.createElement("button");
    cButton.classList.add(cChoice === 0 ? "Rock" : cChoice === 1 ? "Paper" : "Scissor");
    document.getElementById("player2Choice").appendChild(cButton);
    const pButton = document.createElement("button");
    pButton.classList.add(choice);
    document.querySelector(".choices").innerHTML = "";
    document.querySelector(".choices").appendChild(pButton);


}

//Declaring Winner

function declareWinner(cChoice,choice) {
    if (cChoice === choice) {
        document.getElementById("result").innerHTML = "Its a draw!";
    }else if(choice === "Rock"){
        if (cChoice === "Paper") {
        document.getElementById("result").innerHTML = "You Lose!";
            computer +=1;
            localStorage.setItem("p1score",pscore);
            
            localStorage.setItem("p2score",computer);
            p1text.innerHTML = pscore;
            p2text.innerHTML = computer;
        }else{
            document.getElementById("result").innerHTML = "You Win!";
            pscore +=1;
            localStorage.setItem("p2score",computer);
            
            localStorage.setItem("p1score",pscore);
            p1text.innerHTML = pscore;
            p2text.innerHTML = computer;
        }
    }else if(choice === "Paper"){
        if (cChoice === "Scissor") {
        document.getElementById("result").innerHTML = "You Lose!";
            computer +=1;
            localStorage.setItem("p1score",pscore);
            
            localStorage.setItem("p2score",computer);
            p1text.innerHTML = pscore;
            p2text.innerHTML = computer;
        }else{
            document.getElementById("result").innerHTML = "You Win!";
            pscore +=1;
            localStorage.setItem("p2score",computer);
            
            localStorage.setItem("p1score",pscore);
            p1text.innerHTML = pscore;
            p2text.innerHTML = computer;
        }
    }else {
        if (cChoice === "Rock") {
        document.getElementById("result").innerHTML = "You Lose!";
            computer +=1;
            localStorage.setItem("p1score",pscore);
            
            localStorage.setItem("p2score",computer);
            p1text.innerHTML = pscore;
            p2text.innerHTML = computer;
        }else{
            document.getElementById("result").innerHTML = "You Win!";
            pscore +=1;
            localStorage.setItem("p2score",computer);
            
            localStorage.setItem("p1score",pscore);
            p1text.innerHTML = pscore;
            p2text.innerHTML = computer;
        }
    }

    newGame();
}

//Create NewGame 
function newGame() {
    timer = 5;
    setInterval(()=> {
          tim.innerHTML = timer;
          timer -=1;

          if (timer === 0) {
            location.reload();
          }
    },1000)
}


//reset game
function restart() {
    localStorage.setItem("p1score",0)
    localStorage.setItem("p2score",0)
    location.reload();   
}
