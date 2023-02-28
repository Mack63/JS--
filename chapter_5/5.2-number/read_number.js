function readNumber() {
    while (true){
        let number = prompt("Введите число", 0);
        if (number === "" || number === null){
            alert(`Число: ${null}`);
            break;
        }else if (!isNaN(number)){
            alert(`Число: ${number}`);
            break;
        }else{
            continue;
        }
    }
}

readNumber();