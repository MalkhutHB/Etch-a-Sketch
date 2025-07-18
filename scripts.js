
const body = document.querySelector("body");

for (let i=0; i<16; i++) {
    const row = document.createElement("div");
    for (let i=0; i<16; i++) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        row.appendChild(box);
    }
    row.setAttribute("class", "row");
    body.appendChild(row);
}