const t = setInterval(move, 20);
let pos = 0;
const box = document.getElementById('box');

//clearInterval(t);

function move() {
   pos++;
   if(pos == 150) {
    clearInterval(t);
   }
   box.style.left = pos + 'px';
   box.style.top = pos + 'px';
}

setInterval (printTime, 1000);

function printTime() {
    const d = new Date();
    const h = d.getHours();
}
    


/*
= - присвоение
== - не строгое сравнение (сравнение значений без учита типов данных)
=== - строгое стравнение (с учетом типов данных)

Сложение числа и сроки - конкатинация
Рузельтатом будет "слипшаяся строка"
*/

