function formatDate(date) {
    let now = new Date();
    let timeDiff = Math.floor((now - date) / 1000)
    if (timeDiff == 0){
        return  "прямо сейчас";
    }else if (timeDiff <= 60){
        return `${timeDiff} сек. назад`
    }else if (timeDiff <= 60 * 5){
        return `${Math.floor(timeDiff / 60)} мин. назад`
    }else{
        let year = now.getFullYear().toString().slice(-2);
        let month = now.getMonth();
        month = month < 10 ? '0' + month : month;
        return now.getDate() + "." + month + "." + year + " "
            + now.getMinutes() + ":" + now.getSeconds()
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );