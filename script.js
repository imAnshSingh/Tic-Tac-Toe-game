
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true; // true means 'O's turn, false means 'X's turn

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () =>{
    let turnO = true
    enableBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O"
            turnO = false
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled= true

        checkWinner()
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const showinner = (Winner) =>{
        msg.innerText = `Congratulations, winner is ${Winner}`
        msgContainer.classList.remove("hide")
        disableBoxes()
}
const checkWinner = () => {
    for(let patterns of winPatterns){
        let pos1val = boxes[patterns[0]].innerText
        let pos2val = boxes[patterns[1]].innerText
        let pos3val = boxes[patterns[2]].innerText

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val  === pos3val){
                showinner(pos1val)
            }
        }
    }
}
newGameBtn.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)

// Add additional logic for handling game state, turn switching, win checking, and reset functionality
