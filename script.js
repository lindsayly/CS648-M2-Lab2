window.addEventListener("load", (event) => {
    var id = window.document.getElementById("id");
    var name = window.document.getElementById("name");
    var ext = window.document.getElementById("ext");
    var email = window.document.getElementById("email");
    var department = window.document.getElementById("department");
    var form = window.document.getElementById("empForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        window.console.log("ID: " + parseInt(id.value, 10));
        window.console.log("Name: " + name.value);
        window.console.log("Extension: " + parseInt(ext.value, 10));
        window.console.log("Email: " + email.value);
        window.console.log("Department: " + department.value);
    });
});
