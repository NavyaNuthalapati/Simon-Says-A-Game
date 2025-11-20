let gameSeq=[];
let userSeq=[];
let btns=["yellow","green","red","purple"];

let started =false;
let level=0;
let highScore=level;

let h2=document.querySelector('h2');
let h5=document.querySelector('h5');



document.addEventListener('keypress',function(){
    if(started==false){
        started=true;
        console.log('game Started');
    }
    levelUp();


});

function gameFlash(btn){
     btn.classList.add('flash');
     setTimeout(function(){
        btn.classList.remove('flash');
     },200);

}

function userFlash(btn){
     btn.classList.add('userflash');
     setTimeout(function(){
        btn.classList.remove('userflash');
     },200);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //choose random btn
    let radIdx=Math.floor(Math.random()*3);
    let randColor=btns[radIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(radIdx);
    // console.log(randColor);
    gameSeq.push(randColor);
    gameFlash(randBtn);
    console.log(gameSeq);

    

};


let allBtn=document.querySelectorAll('.btn');
for(btn of allBtn){
    btn.addEventListener('click',btnPress)
   }

function checkAns(idx){
//    console.log(`curr level ${level}`) ;

if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(
        levelUp(),1000);
    }
    if(level>highScore){
        highScore=level;
        h5.innerText=`Highest Score: ${highScore}`;
    }
 } else{
    h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br>
    Press any key to start`;
    document.querySelector('body').style.backgroundColor='red';
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor='white';
    },150);
    reset();
}

}

function btnPress(){
  let btn=this;
  userFlash(btn);

   userColor=btn.getAttribute('id');
   console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

function reset(){
    gameSeq=[];
    started=false;
    userSeq=[];
    level=0;
}


