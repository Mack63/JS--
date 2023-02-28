console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );

function random(min,max) {
    return Math.random() * (max - min) + min;
}