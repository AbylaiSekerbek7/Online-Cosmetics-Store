var app = new App();

document.querySelector("#onLoginBtn").onclick = () => {
    document.querySelector("#loginPage").style.display = "block";
    document.querySelector("#RegistrationPage").style.display = "none";
}

document.querySelector("#onRegisBtn").onclick = () => {
    document.querySelector("#RegistrationPage").style.display = "block";
    document.querySelector("#loginPage").style.display = "none";
}

// Login 
document.querySelector("#loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let userlogin = document.querySelector("#uLogin").value;
    let password = document.querySelector("#uPassword").value;

    if (app.checkUserLogin(userlogin, password) == true) {
        document.querySelector("#loginPage").style.display = "none";
        document.querySelector("#RegistrationPage").style.display = "none";
        document.querySelector("#onLoginBtn").style.display = "none";
        document.querySelector("#onRegisBtn").style.display = "none";
        document.querySelector("#mainPage").style.display = "block";
    }
    else {
        alert("Please Enter correct Login or Password");
    }
});

// Registration
document.querySelector("#registrForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let regName = document.querySelector("#regName").value;
    let regLogin = document.querySelector("#regLogin").value;
    let regPassword = document.querySelector("#regPassword").value;
    let regEmail = document.querySelector("#regEmail").value;
    let regAddress = document.querySelector("#regAddress").value;
    let regPhone = document.querySelector("#regPhone").value;
    let regSkinType = document.querySelector("#regSkinType").value;

    if (app.checkUserRegistration(regName, regLogin, regPassword, regEmail, regAddress, regPhone, regSkinType) == true) {
        alert("Successfully saved you!");
    }
    else {
        alert("The login is already taken, use another login");
    }

});

function viewCatalog() {
    let option = document.getElementById("viewOptions");
    let selectedOption = option.options[option.selectedIndex].value;

    let category = document.getElementById("viewCategory");
    let selectedCategory = category.options[category.selectedIndex].value;

    if (selectedCategory) {
        app.getCatalog(selectedCategory, selectedOption);
    }
    else {
        alert("Please select Category");
    }
}

function viewOrder() {
    if (document.body.style.backgroundColor != "gray") {
        document.body.style.backgroundColor = "gray";
        document.querySelector("#order-container").classList.remove("notmodal-order");
        document.querySelector("#order-container").classList.add("modal-order");
    }
    else if (document.body.style.backgroundColor == "gray") {
        document.body.style.backgroundColor = "white";
        document.querySelector("#order-container").classList.remove("modal-order");
        document.querySelector("#order-container").classList.add("notmodal-order");
    }

    app.displayOrders();
}