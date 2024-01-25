class User {
    constructor(Name, Login, Password, Email, Address, Phone, SkinType) {
        this.name = Name;
        this.login = Login;
        this.email = Email;
        this.password = Password;
        this.address = Address;
        this.phone = Phone;
        this.skin = SkinType;
        this.history = "";
    }

    getName() { return this.name; }
    getLogin() { return this.login; }
    getEmail() { return this.email; }
    getPassword() { return this.password; }
    getAddress() { return this.address; }
    getPhone() { return this.phone; }
    getSkin() { return this.skintype; }
    getHistory() { return this.history; }

    static getUsers() {
        return JSON.parse(localStorage.getItem("Users")) || [];
    }

    static saveUsers(users) {
        localStorage.setItem("Users", JSON.stringify(users));
    }
}