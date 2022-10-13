const alfaNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.querySelector('#hexadecimal').addEventListener('click', convertToRGB);

function convertToRGB(){
    var input = (document.querySelector('.container-hexadecimal input').value).toUpperCase();

    if(input.length === 7){
        var newArray = (input.split('')).slice(1);
        const selector = (index) => alfaNumbers.findIndex(element => element == newArray[index]);
        var number = `RGB(${selector(0) * 16 + selector(1)}, ${selector(2) * 16 + selector(3)}, ${selector(4) * 16 + selector(5)})`;
        var percentage = `RGB(${Math.floor(((((selector(0) * 16 + selector(1)) / 255).toFixed(2)) * 100))}%, ${Math.floor(((((selector(2) * 16 + selector(3)) / 255).toFixed(2)) * 100))}%, ${Math.floor(((((selector(4) * 16 + selector(5)) / 255).toFixed(2)) * 100))}%)`;

        document.querySelector('.number-box').innerHTML = number;
        document.querySelector('.percentage-box').innerHTML = percentage;
    } else {
        document.querySelector('#result').innerHTML = 'Informe um <em>color code</em> do tipo hexadecimal válido!';
    }
}

