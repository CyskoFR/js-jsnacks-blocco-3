// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

const N = Number(prompt("Inserisci un numero"));

for (let i = 0; i < N; i++) {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        const N = Math.floor(Math.random() * 100) + 1;;
        arr.push(N);
    }
    console.log(arr);
}