class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "USER";
        this.color = "white";
    }

    write() {
        let h3 = document.createElement('h3')
        h3.style.color = this.color
        h3.textContent = `Hi My Name is ${this.name} and i am a ${this.role} `
        h3.setAttribute("data-username", this.username);
        document.body.appendChild(h3)
    }
    erase() {
        if (this.role === "USER") {
            document.querySelectorAll(`h3[data-username="${this.username}"]`)
                .forEach(elm => elm.remove());
        } else {
            // admin can delete all
            document.querySelectorAll("h3").forEach(elm => elm.remove());
        }
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email)
        this.role = "ADMIN";
        this.color = "red";
    }

}

const u1 = new User("Najeeb", "Darbhanga", "najeeb@rahman", "najeeb@gmail.com")
const u2 = new User("Kamil", "Madhubani", "kamil@rahman", "kamil@gmail.com")
const a1 = new Admin("Rahman", "DBG", "rahman@rahman", "rahman@gmail.com")