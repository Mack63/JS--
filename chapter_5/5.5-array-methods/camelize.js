function camelize(str) {
    let arrayStr = str.split("-");
    for (let i = 1; i < arrayStr.length; i++) {
        arrayStr[i] = arrayStr[i].at(0).toUpperCase() + arrayStr[i].slice(1);
    }
    console.log(arrayStr.join(""));
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';