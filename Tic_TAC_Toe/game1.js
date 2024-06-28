let boxes=document.querySelectorAll(".btns");
let resetBtn = document.querySelector("#reset");
let newbtn= document.querySelector("#nwbtn");
let mssgcontainer= document.querySelector(".msg-container");
let mssg=document.querySelector("#mssg");

let turnX=true;
let count = 0;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    mssgcontainer.classList.add("hide");
  };

boxes.forEach((btns) => {
    btns.addEventListener("click",()=>{
        console.log("Btn was Clicked");
        if (turnX){
            btns.innerText="X";
            turnX=false;
        }else{
            btns.innerText="O";
            turnX=true;
        }
        btns.disabled = true;
    count++;

    let isWinner = checkwinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    });
    
});

const gameDraw = () => {
    mssg.innerText = `Game was a Draw.`;
    mssgcontainer.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let btns of boxes) {
      btns.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let btns of boxes) {
      btns.disabled = false;
      btns.innerText = "";
    }
  };
  


const showWinner=(winner)=>{
    mssg.innerText=`Winner is ${winner}`;
    mssgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner=()=>{
    for (let pattern of winpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
    
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val ===pos3Val ){
                showWinner(pos1Val); 
                return true;
                
            }
        }
    
    
    }
};


newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);