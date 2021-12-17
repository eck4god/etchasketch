const container = document.querySelector("#container");
container.className = "grid";

for (let i = 0; i < 16; i++) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.className = "gridsquare";
        //cell.innerText = ((i * 16) + j) + 1;
        column.appendChild(cell);
        cell.addEventListener('mouseover', function (e) {
            cell.style.background = 'black';
        } )
    }
    container.appendChild(column);
}

