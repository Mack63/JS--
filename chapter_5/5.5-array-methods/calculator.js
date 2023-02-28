let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

//let result = powerCalc.calculate("2 ** 3");
let result = powerCalc.calculate("24 / 6");
console.log( result ); // 8

function Calculator() {
    this.method = {};
    this.addMethod = function (name, func){
        this.method[name] = func;
    };

    this.calculate = function (action){
        let act = action.split(" ");
        let func = this.method[act[1]];
        return !func || isNaN(act[0]) || isNaN(act[2]) ? "Ошибка выражения" : func(act[0], act[2]);
    };
}