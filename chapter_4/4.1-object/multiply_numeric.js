let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(object) {
    for (key in object) {
        if (typeof object[key] === 'number'){
            object[key] *= 2;
        }
    }
}

for (key in menu) {
    console.log(menu[key]);
}