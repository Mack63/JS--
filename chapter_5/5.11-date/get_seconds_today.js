"use strict";
function getSecondsToday() {
    let dateEnd = new Date();
    let dateStart = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate())
    return Math.floor((dateEnd - dateStart) / 1000);

}

console.log(getSecondsToday())