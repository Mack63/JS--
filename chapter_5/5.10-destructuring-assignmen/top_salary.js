let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max = 0;
    let topSalaryData = null;
    let rest = Object.entries(salaries)
    for (const [name, salary] of rest) {
        if (max < salary) {
            max = salary;
            topSalaryData = name;
        }
    }
    return topSalaryData;
}

console.log(topSalary(salaries))