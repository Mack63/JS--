function unique(arr) {
    let newArr = [];

    for (let item of arr) {
        if (newArr.includes(item)) {
            continue
        }
        newArr.push(item);
    }

    return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O