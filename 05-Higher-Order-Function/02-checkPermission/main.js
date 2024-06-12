
function checkPermission(role, admin, notAdmin) {
    role === "admin"? admin():notAdmin();
}

checkPermission(
    role = prompt('Who?'),
    function () {
        alert('ACCESS GRANTED');
    },
    function () {
        alert('ACCESS DENIED');
    }
);
