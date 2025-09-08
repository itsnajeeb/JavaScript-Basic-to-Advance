function Employee(name, salary, role) {
    this.name = name;
    this.salary = salary;
    this.role = role


    //all objects build duplicate method memory size increase
    // this.IncreaseSalary = function (percent) {
    //     this.salary += (percent / 100) * this.salary
    // }
}


//Memory Efficient -> all objects share the same method instead of duplicating.
Employee.prototype.IncreaseSalary = function (percent) {
    this.salary += (percent / 100) * this.salary
}

const emp1 = new Employee("Najeeb", 1000, "Developer")
const emp2 = new Employee("Shadab", 2000, "Designer")

emp1.IncreaseSalary(10)
emp2.IncreaseSalary(10)
console.log(emp1.IncreaseSalary == emp2.IncreaseSalary);//true because shared same method instead of duplicating

