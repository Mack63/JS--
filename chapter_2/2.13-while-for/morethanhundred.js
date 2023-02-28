let num;
while (true){
    num = prompt("Введите число большее 100");
    if(num == null || num > 100){
        break;
    }
    if (num <= 100){
        continue;
    }
}

console.log("Выход");