
function checkSpam(str) {
    let spam1 = "viagra";
    let spam2 = "XXX".toLowerCase();
    str = str.toLowerCase();
    if (str.includes(spam1) || str.includes(spam2)) {
        return true;
    }
    return  false;
}

console.log(checkSpam('buy ViAgRA now') == true)
console.log(checkSpam('free xxxxx') == true)
console.log(checkSpam("innocent rabbit") == false)