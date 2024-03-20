let winPage = document.querySelector(".msg")
let newGame = document.querySelector(".msg button");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; //player O 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";   
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for(patterns of winPatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;                

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val===pos3val){
                console.log("winner" , pos1val);
                for(let box of boxes){
                    box.disabled = true
                }
                // winPage();
                winPage.classList.remove("hide");
            }
        }
    }
}

const resetGame = () => {
    enableBoxes();  
} 

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

resetBtn.addEventListener("click" ,()=>{
    resetGame();
})

newGame.addEventListener("click" , ()=>{
    console.log("clicked");
    resetGame();
    winPage.classList.add("hide");
})
