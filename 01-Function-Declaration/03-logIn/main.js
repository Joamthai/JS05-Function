function login(user, pass) {
    let user = prompt("Enter Username");
    let pass = prompt("Enter Password");

    if(user === "admin" && pass === "P@ssw0rd") {
        alert("Login success");
    } else {
        alert("Login unsuccess");
    }
};

login();
