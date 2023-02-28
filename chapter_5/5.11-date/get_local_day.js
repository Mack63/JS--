let date = new Date(2012, 0, 3);  // 3 января 2012 года
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }
    return day;
}

console.log( getLocalDay(date) );       // вторник, нужно показать 2