// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [1,2,3,4,5,6,7,8,9,10];
const green = document.getElementById("green");
const red = document.getElementById("red");

for (let i = 0; i < numbers.length; i++) {
    const element = document.createElement("p");
    element.innerHTML = numbers[i];
    if (numbers[i] % 2 === 0) {
        green.append(element);
    } else {
        red.append(element);
    }
}