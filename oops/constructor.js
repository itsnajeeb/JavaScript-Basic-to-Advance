
function CreateEmployee(name, salary, role,) {
    let IncrementalSalary = 0;
    this.name = name;
    this.salary = salary;
    this.role = role;

    let card = document.createElement('div')
    let EmployeName = document.createElement('h3')
    let EmployeSalary = document.createElement('p')
    let EmployeRole = document.createElement('p')
    let EmployeDetails = document.querySelector('.EmployeDetails')
    card.className = ' bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-[250px]';
    EmployeName.textContent = this.name;
    EmployeSalary.textContent = `${this.salary} `
    EmployeRole.textContent = this.role;
    card.appendChild(EmployeName)
    card.appendChild(EmployeSalary)
    card.appendChild(EmployeRole)
    EmployeDetails.appendChild(card)

    if (role === "Designer") {
        //Increment 20% salary
        IncrementalSalary = (10 / 100) * this.salary
        EmployeSalary.textContent = `${this.salary} + ${IncrementalSalary} = ${this.salary + IncrementalSalary}`;
    }
    if (role === "Full Stack Developer") {
        //Increment 20% salary
        IncrementalSalary = (20 / 100) * this.salary
        EmployeSalary.textContent = `${this.salary} + ${IncrementalSalary} = ${this.salary + IncrementalSalary}`;
    }
}


let Employe1 = new CreateEmployee("Najeeb", 2000, "Developer",)
let Employe2 = new CreateEmployee("Kamil", 1000, "Designer")
let Employe3 = new CreateEmployee("Tauhid", 20000, "Instructor")
let Employe4 = new CreateEmployee("shadab", 20000, "Designer")
let Employe5 = new CreateEmployee("Hussain", 20000, "SDE-2")
let Employe6 = new CreateEmployee("Farhan", 20000, "Designer")
let Employe7 = new CreateEmployee("Jawed", 20000, "SDE-1")
let Employe8 = new CreateEmployee("Tahseen", 20000, "Developer")
let Employe9 = new CreateEmployee("Zeeshan", 50000, "Full Stack Developer")





