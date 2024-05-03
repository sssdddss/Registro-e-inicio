function validarCampo() {
    var Nombre = document.getElementById('nombre').value;
    var Apellido = document.getElementById('apellido').value;
    var Facultad = document.getElementById('Facultad').value;
    var Carerra = document.getElementById('Carrera').value;
    var Correo = document.getElementById('email').value;
    var Contraseña = document.getElementById('password').value;
    if ((Nombre.length && Apellido.length && Facultad.length && Carerra.length && Correo.length && Contraseña.length ) === 0) {
        alert('Por favor, completa todos los campo.');
        return false;
    }
        alert('Todo correcto');
    return true;
}


