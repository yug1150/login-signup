function login() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    if (!email || !pass) {
        alert("Please fill all login fields!");
        return;
    }
    alert("Login Successful (Demo)");
}

function signup() {
    let email = document.getElementById("signupEmail").value;
    let pass = document.getElementById("signupPass").value;
    let confirm = document.getElementById("confirmPass").value;

    if (!email || !pass || !confirm) {
        alert("Please fill all signup fields!");
        return;
    }

    if (pass !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    alert("Signup Successful (Demo)");
}
