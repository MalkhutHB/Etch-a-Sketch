
const container = document.querySelector(".container");
const body = document.querySelector("body");

makeGrid(16);
let draw = false;

function makeGrid(size) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    for (let i=0; i<size; i++) {
        const row = document.createElement("div");
        for (let i=0; i<size/*size*/; i++) {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
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

document.addEventListener("mousedown", (event) => {
    draw = true;
    event.target.classList.add("drawn");
});
document.addEventListener("mouseup", () => draw = false);

document.addEventListener("mouseover", (event) => {
    if (draw) {
        event.target.classList.add("drawn");
    }
})
// draw = true on mousedown
// event listener for hovering, when (draw) change color of target