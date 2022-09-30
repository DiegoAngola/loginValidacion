document.querySelector("#login_btn").setAttribute("onclick", "validacion()");
let user = document.querySelector("#username");
let pass = document.querySelector("#password");
let pass2 = document.querySelector("#password2");
let mens = document.querySelector("#mensaje");

console.log(user, " - ", pass, " - ", mens);


// const nombre = "Eugenia"
// const password = "1234"
// const password2 = "12345"

let usuarios_registrados = [];
usuarios_registrados[0] = { nombre: "Camila", password: "1234", password2: "12345" }
usuarios_registrados[1] = { nombre: "Hector", password: "1234", password2: "12345" }


function validacion() {
    mens.className = "rojo";
    if (user.value.trim() === "") {
        mens.value = "Falta nombre de usuario";
        return;
    }

    user.value = user.value.trim();

    if (pass.value.trim() === "") {
        mens.value = "Falta Password";
        return;
    }

    if (pass2.value.trim() === "") {
        mens.value = "Falta Password 2";
        return;
    }



    // if (nombre !== user.value || password !== pass.value || password2 !==pass2.value) {
    //     mens.value = "USUARIO INEXISTENTE";
    //     user.focus();
    //     user.value = "";
    //     pass.value = "";
    //     pass2.value = "";
    //     return;

    // }


    let encontroUser;

    for (let i = 0; i < usuarios_registrados.length; i++) {
        if (usuarios_registrados[i].nombre !== user.value || usuarios_registrados[i].password !== pass.value || usuarios_registrados[i].password2 !== pass2.value) {
            encontroUser = false;

        } else {
            encontroUser = true;
            break;
        }

    }

    if (encontroUser === false) {
        mens.value = "USUARIO INEXISTENTE";
        user.focus();
        user.value = "";
        pass.value = "";
        pass2.value = "";
        return;
    }

    mens.className = "verde";
    mens.value = "BIENVENIDO/A " + user.value.toUpperCase() + "...";


}