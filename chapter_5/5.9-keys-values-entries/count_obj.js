let user = {
    name: 'John',
    age: 30,
};

function count(user) {
       return  Object.entries(user).reduce(count => ++count, 0)
}
console.log( count(user) ); // 2