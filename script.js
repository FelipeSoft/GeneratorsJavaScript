const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

var characters = [
    '^!$%&|[](){}:;.,*+-#@<>~',
    '0123456789',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
    'abcdefghijklmnopqrstuvwxyz'
];

let range = c('input[type=range]');
let keys = [];

range.addEventListener('change', ()=>{
    let show = c('.rangeArea span');
    show.innerHTML = range.value;
});

c('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    var password = '';
    var all = '';
    if(keys.length === 0){
        c('#warning').style.opacity = 1;
    } else {
        c('#warning').style.opacity = 0;
        for(let k of keys){
            all += (characters[k]);
        }
        
        for(let l = 0; l < range.value; l++){
            password += all[Math.floor(Math.random() * all.length)]
        }
        console.log(password);
        c('.passwordArea').innerHTML = password;
    }
});

cs('input[type=checkbox]').forEach((element, index)=>{
    element.setAttribute('data-checked', index);
    element.addEventListener('click', (e)=>{
        let key;
        if(element.checked === true){
            key = e.target.getAttribute('data-checked');
            keys.push(key);
        } else {
            keys.splice(-1, 4)
        }    });
});



