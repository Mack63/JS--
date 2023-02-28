let  login  = prompt("Какой Ваш логин ?");

let message;

message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ?
    'Здравствуйте' : login == '' ? 'Нет логина' : '';

alert(message)