let user = {
    name: "Василий Иванович",
    age: 35
};

let json_user = JSON.stringify(user);
console.log(json_user)

user_parsed = JSON.parse(json_user);
console.log(user_parsed.name)