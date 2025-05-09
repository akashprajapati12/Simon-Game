let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started"); 
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelUp(){
    
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`; 

//  random button choose
    let randomIndx = Math.floor(Math.random() * 3);
    let randomClr = btns[randomIndx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){

   if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000) ;
        }
   }
   else{
    h2.innerHTML = `Game over!<br> Your score is <b> <i>${level} </i></b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
   }
}

function btnPress(){ 
    let btn = this; 
    userFlash(btn);

    userclr = btn.getAttribute("id");
    userSeq.push(userclr);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}