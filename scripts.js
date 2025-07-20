
const container = document.querySelector(".container");
const body = document.querySelector("body");

makeGrid(16);
let draw = false;
let rainbow = false;

function makeGrid(size) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    for (let i=0; i<size; i++) {
        const row = document.createElement("div");
        for (let i=0; i<size/*size*/; i++) {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            box.dataset.opacity = 0;
            row.appendChild(box);
        }
        row.setAttribute("class", "row");
        grid.appendChild(row);
    }
    container.appendChild(grid);

    // const boxes = document.querySelectorAll(".box");
    // for (const box of boxes) {
    //     box.addEventListener("click", )
    // }
}

const resizeButton = document.querySelector(".resizeButton");
resizeButton.addEventListener("click", () => {
    let size = prompt("Enter size:", "");
    const grid = document.querySelector(".grid");
    if (size) grid.remove();
    if (size) makeGrid(size);
})

const rainbowButton = document.querySelector(".rainbowButton");
rainbowButton.addEventListener("click", () => rainbow = !rainbow);

document.addEventListener("mousedown", (event) => {
    draw = true;
    const box = event.target;
    if (!box.classList.contains("box")) return; // TRYNA FIX THE THINGY
    box.style.backgroundColor = `rgb(0, 0, 0)`; 
    if (rainbow) {
        let opacity = Number(box.dataset.opacity) + .10;
        box.dataset.opacity = opacity;
        box.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256}, ${Math.min(opacity, 1)})`;
    }
});
document.addEventListener("mouseup", () => draw = false);

document.addEventListener("mouseover", (event) => {
    if (draw) {
        const box = event.target;
        if (!box.classList.contains("box")) return;
        box.style.backgroundColor = `rgb(0, 0, 0)`;
        if (rainbow) {
            let opacity = Number(box.dataset.opacity) + .10;
            box.dataset.opacity = opacity;
            box.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256}, ${Math.min(opacity, 1)})`;
        }
    }
})


// draw = true on mousedown
// event listener for hovering, when (draw) change color of target