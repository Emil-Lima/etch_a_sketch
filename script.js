(function responsiveButton() {
    const btn = document.querySelector(`button`);
        btn.addEventListener(`click`, () => {
            createGrid(prompt(`Type a number to create your own grid`));
        });
})();

(function rainbowButton () {
    const btn = document.getElementById("multi");
    btn.addEventListener("click", () => {
        multiColor();
    })
})();

(function blackButton () {
    const btn = document.getElementById("black");
    btn.addEventListener("click", () => {
        blackColor();
    })
})();

(function eraseGrid () {
    const btn = document.getElementById("erase");
    btn.addEventListener("click", () => {
        erase();    
    })
})();

(function clearGrid () {
    const btn = document.getElementById("clear")
    btn.addEventListener("click", () => {
        clear();
    })
})();

(function grayScale () {
    const btn = document.getElementById("gray")
    btn.addEventListener("click", () => {
        gray();
    })
})();

(function pokemon () {
    const btn = document.getElementById("pokemon")
    btn.addEventListener("click", () => {
        pokemizer();
    })
})();

function createGrid (base = 16) {
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
};

createGrid();
blackColor();

function blackColor () {
    const paragraphs = document.querySelectorAll(`p`);
    paragraphs.forEach((p) => {
        p.setAttribute(`id`, `square`);
        p.addEventListener(`mouseover`, () => {
            p.setAttribute(`style`, `background: black`);
        });
    });
};

function erase () {
    const paragraphs = document.querySelectorAll(`p`);
    paragraphs.forEach((p) => {
        p.setAttribute(`id`, `square`);
        p.addEventListener(`mouseover`, () => {
            p.setAttribute(`style`, `background: white`);
        });
    });
}

function clear () {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((p) => {
        p.setAttribute("style", "background: white");
    });
}

function gray () {
    const paragraphs = document.querySelectorAll(`p`);
    paragraphs.forEach((p) => {
        let decreasePercentage = 90;
        p.setAttribute(`id`, `square`);
        p.addEventListener(`mouseover`, () => {
            p.setAttribute(`style`, `background: hsl(0,0%,${decreasePercentage}%)`);
            decreasePercentage -= 10;
        });
    });
}

function multiColor () {
    const paragraphs = document.querySelectorAll(`p`);
    paragraphs.forEach((p) => {
        p.setAttribute(`id`, `square`);
        let randomColor = Math.floor(Math.random() * 360).toString();
        let randomPercentage = Math.floor(Math.random() * 100).toString();
        p.addEventListener(`mouseover`, () => {
            p.setAttribute(`style`, `background: hsl(${randomColor},${randomPercentage}%,${randomPercentage}%)`);
        });
    });
}

function pokemizer () {
    const paragraphs = document.querySelectorAll(`p`);
    paragraphs.forEach((p) => {
        p.setAttribute(`id`, `square`);
        let choice = Math.floor(Math.random() * 649).toString();
        p.addEventListener(`mouseover`, () => {
            p.setAttribute(`style`, `background-image: url("../pokemon/${choice}.png"); background-size: cover`);
            console.log("pressed");
        });
    });
}