function unique(arr) {
    let setValues = new Set();
    for (let value of arr) {
        setValues.add(value);
    }
    return Array.from(setValues);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O

