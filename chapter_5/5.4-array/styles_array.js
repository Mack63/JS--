let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл")
let replacAt = (styles.length / 2)%2 == 0 ? styles.length / 2 : Math.floor(styles.length / 2);
styles[replacAt] = "Классика";

console.log( styles.shift());

styles.unshift('Рэп', 'Регги');

console.log(styles);