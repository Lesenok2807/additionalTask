'use srtict';

const num = +prompt("Угадай число от 1 до 100");

const isNumber = function() {
    return isNaN(parseFloat() && isFinite(num));
}

function one() {
    
    do {
        num = +prompt("Угадай число от 1 до 100");
    } while (!isNamber(num));
}    
one();