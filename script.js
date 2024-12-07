let boxes = document.querySelectorAll('.box');
let contenar = document.querySelector('.Game');
let newGame = document.querySelector('#newGame-btn');
let resetBtn = document.querySelector('#reset-btn');
let msg = document.querySelector('#msg')
let msgcontainer = document.querySelector(".msgcontainer")

let turnO = true;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetButon = () => {
    turnO = true
    anable();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
   

        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        chackWinner();
    })
})

const disable = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
}

const anable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
let showWinner = (Winner) => {
    msg.innerText = `Congratulation winner is ${Winner} `
    msgcontainer.classList.remove("hide")

}

const chackWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                disable();


            }
        }
    }
}

newGame.addEventListener('click', resetButon);
resetBtn.addEventListener('click',resetButon);
