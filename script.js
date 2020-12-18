(function createFirstGrid() {
    for (let i = 1; i <= (16*16) ; i++) {
        document.getElementById(`baseDiv`).setAttribute(`style`, `display: grid; background: white; grid-template-columns: repeat(16, calc(680px/16)); grid-template-rows: repeat(16, calc(680px/16))`);
        let modified = document.createElement(`p`);
        modified.textContent = ` `;
        document.getElementById(`baseDiv`).appendChild(modified);
    }
    const paragraphs = document.querySelectorAll(`p`);
    paragraphs.forEach((p) => {
        p.setAttribute(`id`, `square`);
        let randomColor = Math.floor(Math.random() * 360).toString();
        let randomPercentage = Math.floor(Math.random() * 100).toString();
        p.addEventListener(`mouseover`, () => {
            p.setAttribute(`style`, `background: hsl(${randomColor},${randomPercentage}%,${randomPercentage}%)`);
        });
    });
})();

function userGrid(num) {
    let base = num;
    
    const toDelete = document.querySelectorAll(`p`);
    toDelete.forEach((p) => {
        p.remove();
        });

    for (let i = 1; i <= (base*base) ; i++) {
        document.getElementById(`baseDiv`).setAttribute(`style`, `display: grid; background: white; grid-template-columns: repeat(${base}, calc(680px/${base})); grid-template-rows: repeat(${base}, calc(680px/${base}))`);
        let modified = document.createElement(`p`);
        modified.textContent = ` `;
        document.getElementById(`baseDiv`).appendChild(modified);
    }
    const paragraphs = document.querySelectorAll(`p`);
    paragraphs.forEach((p) => {
        p.setAttribute(`id`, `square`);
        let decreasePercentage = 90;
        p.addEventListener(`mouseover`, () => {
            p.setAttribute(`style`, `background: hsl(0,0%,${decreasePercentage}%)`);
            decreasePercentage -= 10;
        });
    });
}

(function responsiveButton() {
    const btn = document.querySelector(`button`);

    btn.addEventListener(`click`, () => {
        userGrid(prompt(`Type a number to create your own grid`));
    });
})();
