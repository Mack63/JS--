function sumInput() {
    let numbers = [];
    while (true){
        let item = prompt("Введите число", 0);
        if (!isNaN(item) && item !== null && item != ""){
            numbers.push(+item);
            continue;
        }else {
            let sum = 0;
            for (let number of numbers){
                sum += number;
            }
            alert(sum);
            break;
        }
    }
}

sumInput();