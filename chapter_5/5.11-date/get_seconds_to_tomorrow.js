function getSecondsToTomorrow() {
    let dateStart = new Date();
    let dateNextDay = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate() + 1)
    //return dateNextDay
    return Math.floor((dateNextDay - dateStart) / 1000);
}

console.log(getSecondsToTomorrow())