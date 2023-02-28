console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5

function randomInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}