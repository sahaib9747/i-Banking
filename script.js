function login(){
    // get login-section
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "rihan9747@yahoo.com" && password == "a") {
            let loginSection = document.getElementById("login-section");
            loginSection.style.display = "none";
            let displayLogout = document.getElementById("logout-section")
            displayLogout.style.display = "block";
            localStorage.setItem("isLogged", "true");
    }
    else {
        document.getElementById("error-messages").innerText = "Wrong information!";
    }
}

function logout() {
    document.getElementById("logout-section").style.display="none";
    localStorage.setItem("isLogged", "false");
}

function isLogged() {
    if(localStorage.getItem("isLogged") == "true") {
        document.getElementById("login-section").style.display="none";
        document.getElementById("logout-section").style.display = "block";
    }
}

function deposite(){
    let getDeposite = document.getElementById("deposite-input").value;
    getDeposite = parseFloat(getDeposite)
    document.getElementById("deposite").innerText = '$' + getDeposite;
    document.getElementById("balance").innerText = "$" + getDeposite;
}

function withdraw(){
    let getWithdraw = document.getElementById("withdraw-input").value;
    getWithdraw = parseFloat(getWithdraw);
    console.log(getWithdraw);

    let balance = document.getElementById("balance").innerText.slice(1);
    balance = parseFloat(balance) - getWithdraw;
    document.getElementById("withdraw").innerText = "$" + getWithdraw;
    document.getElementById("balance").innerText = "$" + balance;
}