'use srtict';


const num = function(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);

};

function one(num) {
    function two() {
        const a = prompt("Угадайте число от 1 до 100");     
      

        console.log(a);
        console.log(num);

        if (!isNaN(parseFloat(a)) && isFinite(a)) {            
                
        if(a >= 1 && a < num) {
            alert(" Загаданное число больше");
            two();
        } else if (a > num && a <= 100) {
            alert("Загаданное число меньше");
            two();
        } else if ( a == num) {
            alert("Поздравляю, Вы угадали!!!");
        }                       
        
        } else {

             if (a !== null) {
                 alert("Введите число");
                 two();
             } else {
                alert("Игра окончена");
             }
        }          
        
    }

    two();
}  

one(num(1, 100));