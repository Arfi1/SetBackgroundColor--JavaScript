let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

let bdy = document.querySelector("body");
console.log(bdy);

const inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue);

const inpColorPicker = document.getElementById("inpColorPicker");
console.log(inpColorPicker);

function useColorPicker() {
    let col = inpColorPicker.value;
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function setBackGroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
}


function changeColorBody(event) {
    if (event.key === 'Enter') {
        setBackGroundColor();
    }
}

function increaseFont(element) {
    let fontSize = element.style.fontSize
    console.log(fontSize)
    element.style.fontSize = 10
    fontSize = element.style.fontSize
    console.log(fontSize)
}

pbCol.addEventListener('click', setBackGroundColor);
document.addEventListener('keydown', changeColorBody);
inpColorPicker.addEventListener('input', useColorPicker);

const increaseButton = document.getElementById('increaseFont');
const decreaseButton = document.getElementById('decreaseFont');
const pTags = document.getElementsByTagName('p')
console.log(pTags)

const pArray = Array.from(pTags)
pArray.forEach(increaseFont)

function changeFontSize(increase = true) {
    for (let p of pTags) {
        let currentSize = window.getComputedStyle(p).fontSize;
        let newSize = parseInt(currentSize) + (increase ? 1 : -1);
        p.style.fontSize = newSize + 'px';
    }
}

increaseButton.addEventListener('click', () => changeFontSize(true));
decreaseButton.addEventListener('click', () => changeFontSize(false));