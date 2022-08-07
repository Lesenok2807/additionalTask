'use srtict';




function one(num) {
    function two(x) {
        const a = +prompt("Ведите число от 1 до 100");
        x--;

        console.log(a);
        

        if (a !== num) {
            if (a > num) {
                console.log("число меньше", a);
            } else if (a < num) {
            console.log("число больше", a);
            } else if (a === 0) {
                alert();
            }
            two();           
        } else {
            alert("ты выиграл");
        }          
    }

    two();
}  

one(77);