let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let turn0=true;
let msg=document.querySelector('#msg');
let newBtn=document.querySelector('#newOne');
let msgCont=document.querySelector('.msgContainer');
let count=0;
const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    count=0;
    msgCont.classList.add('hide');
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText='O';
            box.style.color='blue'
            turn0=false;
        } else{
            box.innerText='X';
            box.style.color='green'
            turn0=true;
        }
        count++;
       // box.style.color='black'
        box.disabled=true;
        let isWin=checkWinner();
        if(!isWin && count===9){
            msg.innerText="It's a Draw";
            msgCont.classList.remove('hide');
        }
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(win)=>{
    msg.innerText='Congratulations, Winner is '+win;
    msgCont.classList.remove('hide');
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattren of winPatterns){
        let p1=boxes[pattren[0]].innerText;
        let p2=boxes[pattren[1]].innerText;
        let p3=boxes[pattren[2]].innerText;
        if(p1!=="" && p2!=="" && p3!==""){
            if(p1===p2 && p2===p3){
                showWinner(p1);
                return true;
            }
        }
    }
    return false;
}
newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);