class CreatePencil {
    constructor(name, color, company, qty) {
        this.name = name;
        this.color = color;
        this.company = company;
        this.qty = qty;
    }

    write(text) {
        let h1 = document.createElement('h1');
        h1.textContent = text
        h1.style.color = this.color
        document.body.appendChild(h1)
    }
    erase() {
        document.querySelectorAll('h1').forEach((elem)=>{
            if(elem.style.color === this.color){
                elem.remove()
            }
        })
    }

}

let p1 = new CreatePencil("Natraz", "white", "Natraj", 10)
let p2 = new CreatePencil("Badhsha", "red", "Badsha", 5)
