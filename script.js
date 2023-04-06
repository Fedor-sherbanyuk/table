let FILL_ARRAY = [];
const ROOT = document.querySelector("#root");
const INPUT = document.createElement("input");
const BUTTON = document.createElement("button");
const TABLE_COLLECTION = document.createDocumentFragment();
function createDisplayInput() {
    INPUT.setAttribute("type", "number");
    INPUT.setAttribute("placeholder", "Введите число");
    INPUT.setAttribute("id", "input");
    INPUT.style.cssText = "margin: 10px 0 0 10px; padding: 20px 20px 60px 20px; border-radius: 5px; width: 500px;  transition: all 0.3s ease;";
    ROOT.append(INPUT);
    BUTTON.setAttribute("id", "button");
    BUTTON.innerText = "Создать таблицу 15 будет например 15*15";
    BUTTON.style.cssText = "margin: 10px 0 20px 10px; padding: 20px 20px 60px 20px; border-radius: 5px; color: white; width: 500px; height: 30px;  transition: all 0.3s ease;";
    ROOT.append(BUTTON);
}

createDisplayInput();
BUTTON.addEventListener("click", createDiv);
function createDiv() {
    if(FILL_ARRAY.length>1){
        FILL_ARRAY.splice(1,FILL_ARRAY.length-1);
        document.body.querySelectorAll("table").forEach(value => value.remove());
    }
    const valueInput = +INPUT.value;
    for (let i = 0; i < valueInput; i++) {
        FILL_ARRAY[i] = new Array(valueInput);
    }

    for (let i = 0; i < FILL_ARRAY.length; i++) {
        for (let j = 0; j < FILL_ARRAY[i].length; j++) {
            FILL_ARRAY[i][j] = document.createElement('table');
            FILL_ARRAY[i][j].classList.add("cell");
            TABLE_COLLECTION.append(FILL_ARRAY[i][j]);
        }
    }
    INPUT.value = "";
    displayTableInArray(TABLE_COLLECTION);
}

function displayTableInArray(array) {

    ROOT.style.cssText = `display: flex; margin:200px 0 0 0; flex-direction: row; justify-content: space-around; align-items: center; align-content: center;` +
        `width: ${FILL_ARRAY.length * 15.67*2}px; height: ${FILL_ARRAY.length * 15.67}px;`;
    ROOT.style.flexWrap = "wrap";
    ROOT.append(array);// получаем элемент-контейнер, куда будем добавлять div-элементы
}

document.body.addEventListener('click', (event) => {
    if (!event.target.classList.contains('cell')&&event.target.id!=="button"&&event.target.id!=="input") {
        ROOT.querySelectorAll('table').forEach(value => {
            if(value.classList.contains('active')){
                value.classList.toggle('black');
            } else {
                value.classList.toggle('black');
            }

        });
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