//initial data
const characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%&';
var randomPassword = '';

//events
generatePassword();
document.querySelector('.container button').addEventListener('click', generatePassword);

//functions
function generatePassword(){
    let charArray = characters.split("");
    for(let k = 0; k < 8; k++){
        randomPassword += charArray[Math.floor(Math.random() * charArray.length)]
    }
    document.querySelector('#password').innerHTML = randomPassword;
    randomPassword = '';
}