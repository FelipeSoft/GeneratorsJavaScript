//initial data
var alfaNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var hexaCode = '';

const c = (el) => document.querySelector(el);

//events
c('.container button').addEventListener('click', generateColor)

//functions
function generateColor(){
    for(let k = 0; k < 6; k++){
        hexaCode += alfaNumbers[Math.floor(Math.random() * 16)];
    }
    c('.color-code').innerHTML = `#${hexaCode}`;
    c('.container-color').style.backgroundColor = `#${hexaCode}`;
    hexaCode = '';
}
