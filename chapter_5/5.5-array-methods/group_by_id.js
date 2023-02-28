let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById)
function groupById(arr) {
    let obj = {};
    return  arr.reduce(function(target, value) {
        target[value.id] = value;
        return target;
    }, {})
    // return Object.assign(obj, arr.map(function (value) {
    //     obj[value.id] = value;
    //     //obj;
    // }))
}


/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/