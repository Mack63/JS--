let number = prompt("Введите число больше 2 ух");
for (let num = 2; num <= number; num++){

    for (let i = 2; i <= num; i++){
        if (num == i){
            console.log(`Число ${num} простое !!!`)
            break;
        }
        if (num%i == 0){
            //console.log(`Число ${num} не простое !!!`)
            break;
        }
    }
}