let FILL_ARRAY = [];
const ROOT = document.querySelector("#root");
const INPUT = document.createElement("input");
const BUTTON = document.createElement("button");
const CONTAINER = document.createElement("div");
function createDisplayInput() {
    INPUT.setAttribute("type", "number");
    INPUT.setAttribute("placeholder", "Введите число");
    INPUT.setAttribute("id", "input");
    INPUT.style.cssText = "margin: 10px 0 0 10px; padding: 5px 10px; border-radius: 5px; width: 300px;  transition: all 0.3s ease;";
    ROOT.append(INPUT);
    BUTTON.setAttribute("id", "button");
    BUTTON.innerText = "Создать таблицу 15 будет например 15*15";
    BUTTON.style.cssText = "margin: 10px 0 0 10px; padding: 5px 10px; border-radius: 5px; color: white; width: 300px; height: 30px;  transition: all 0.3s ease;";
    ROOT.append(BUTTON);
}
createDisplayInput();
BUTTON.addEventListener("click", createDiv);
function createDiv() {
    if(FILL_ARRAY.length>1){
        FILL_ARRAY.splice(1,FILL_ARRAY.length-1);
        document.body.querySelectorAll("table").forEach(value => value.remove());
        CONTAINER.style.cssText = "margin:0 0 0 0;";
    }
    const valueInput = +INPUT.value;
    for (let i = 0; i < valueInput; i++) {
        FILL_ARRAY[i] = new Array(valueInput);
    }

    for (let i = 0; i < FILL_ARRAY.length; i++) {
        for (let j = 0; j < FILL_ARRAY[i].length; j++) {
            FILL_ARRAY[i][j] = document.createElement('table');
            FILL_ARRAY[i][j].classList.add("cell");
        }
    }
    INPUT.value = "";
    displayTableInArray(FILL_ARRAY);
}

function displayTableInArray(array) {

    CONTAINER.style.cssText = `display: flex; margin:200px 0 0 0; flex-direction: row; justify-content: space-around; align-items: center; align-content: center;` +
        `width: ${FILL_ARRAY.length * 15.67*2}px; height: ${FILL_ARRAY.length * 15.67}px;`;
    CONTAINER.style.flexWrap = "wrap";
    ROOT.append(CONTAINER);// получаем элемент-контейнер, куда будем добавлять div-элементы
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            CONTAINER.appendChild(array[i][j]);
        }
    }
}

document.body.addEventListener('click', (event) => {
    if (!event.target.classList.contains('cell')&&event.target.id!=="button"&&event.target.id!=="input") {
        for (let i = 0; i < FILL_ARRAY.length; i++) {
            for (let j = 0; j < FILL_ARRAY[i].length; j++) {
                if (FILL_ARRAY[i][j].classList[1] !== 'active') {
                    FILL_ARRAY[i][j].classList.toggle('black');
              } else {
                    FILL_ARRAY[i][j].classList.remove('black');
                }
            }
        }
        return;
    } else if(event.target.id==="button"||event.target.id==="input"){
        return;
    }
        event.target.classList.toggle('active');
        event.target.classList.toggle('black');
});
ROOT.addEventListener('mouseover',(e) =>{
    const target =e.target.closest('table');
    if(!target) return;
    target.style.cssText='background-color: magenta;';
});
ROOT.addEventListener('mouseout',(e) =>{
    const target =e.target.closest('table');
    if(!target) return;
    target.style.cssText='';
});