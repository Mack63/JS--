let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)


function filterRange(arr, a, b) {
    let newArr = [];
    arr.map((item) => {
        if (item >= a && item <= b){
            newArr.push(item);
        }
    } )
    return newArr;
}