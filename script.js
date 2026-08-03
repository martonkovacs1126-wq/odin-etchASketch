const squares = document.querySelector(".squares");
let defSize = 16;
let color = "black";
let isEraserMode = false;
const gridBtn = document.querySelector(".changeGrid");

gridBtn.addEventListener("click", function() {
    let newSize = 0;
    newSize = prompt("Write in a new size for the game! (Between 1 and 100):");
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Between 1 and 100!");
        return;
    }
    document.querySelectorAll('.box').forEach((removeMe) => {
        removeMe.remove();
    });
    createPlayGroudDIFF(newSize);
})


function createPlayGroudDIFF(size) {
    const totalSize = 480;
    const boxSize = totalSize / size;
    for (let i = 0; i < (size * size); i++) {
        let box = document.createElement("div");
        box.className = "box";
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        squares.appendChild(box);
    }
    
    document.getElementById("sCont").style.width = totalSize + "px";

    
}

function createPlayGroud() {
    for (let i = 0; i < (defSize * defSize); i++) {
        let createBox = document.createElement("div");
        createBox.className = "box";
        squares.appendChild(createBox);
    }
    document.getElementById("sCont").style.width = (30 * defSize) + "px";
    
}
createPlayGroud();

const box = document.querySelector(".div");

addEventListener("mouseover", (hoverEffect) => {
if(hoverEffect.target.classList.contains("box")) hoverEffect.target.style.backgroundColor = color;
});

const eraserBtn = document.querySelector(".eraserMode");

eraserBtn.addEventListener("click", function() {
    isEraserMode = !isEraserMode;

    if(!isEraserMode) {
        eraserBtn.innerHTML = `Eraser mode OFF`;
        color = "black";
    }
    else {
        eraserBtn.innerHTML = `Eraser mode ON`;
        color = "white";
    }
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", function() {
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(function(box) {
        box.style.backgroundColor = "white";
    });
});
