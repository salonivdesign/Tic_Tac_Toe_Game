let btn=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msgContainer");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new");
let boxClass=document.querySelector(".buttons");
let turnO=true;
let count=0;
let modeBtn=document.querySelector("#mode");
let mode="Dark";
const patterns=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

modeBtn.addEventListener("click",()=>{
    if(mode==="Light"){
        document.body.style.backgroundColor="black";
        btn.forEach((box)=>{
            box.style.backgroundColor="black";
        });
        msgContainer.style.color="Yellow";
         msgContainer.style.backgroundColor="black";
         boxClass.style.backgroundColor="White";
        boxClass.style.boxShadow="0 0 10px lightblue";
        // modeBtn.innerText="L";
        modeBtn.style.backgroundColor="cyan";
        modeBtn.style.color="blue";
        mode="Dark";
    } else{
        document.body.style.backgroundColor="white";
        btn.forEach((box)=>{
            box.style.backgroundColor="yellow";
        });
        msgContainer.style.color="black";
        msgContainer.style.backgroundColor="white";
         boxClass.style.backgroundColor="black";
         boxClass.style.boxShadow="0 0 10px darkblue";
        // modeBtn.innerText="D";
         modeBtn.style.backgroundColor="blue";
        modeBtn.style.color="white";
        mode="Light";
    }
})

showWinner=(p1)=>{
    msgContainer.innerText=`${p1} won the game`;
    msgContainer.style.visibility = "visible";
    disableboxes();
};

disableboxes=()=>{
    for (let box of btn){
    box.disabled=true;
    }
}

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
    if (turnO){
        box.innerText="O";
        box.style.color="blue";
        box.style.textShadow="0 0 5px blue";
        turnO=false;
    } else{
        box.innerText="X";
        box.style.color="red";
        box.style.textShadow="0 0 2px red";
        turnO=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkWinnwer();
    if (count===9 && !isWinner){
        gameDraw();
    }
   });
});
reset.addEventListener("click",()=>{
    for (let box of btn){
        box.innerText="";
        box.disabled=false;
    }
    turnO=true;
    count=0;
    msgContainer.style.visibility = "hidden";
});

newGame.addEventListener("click",()=>{
     for (let box of btn){
     box.innerText="";
        box.disabled=false;
    }
    turnO=true;
    count=0;
    msgContainer.style.visibility = "hidden";
});
const gameDraw = () => {
  msgContainer.innerText = "Game was a Draw";
    msgContainer.style.visibility = "visible";
  disableboxes();
};

checkWinnwer=()=>{
    for (let index of patterns){
        let p1=btn[index[0]].innerText;
        let p2=btn[index[1]].innerText;
        let p3=btn[index[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                showWinner(p1);
                return true;
            }
        }
    }
};


