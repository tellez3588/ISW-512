var aNombre = [],
    aApellido = [],
    aTelefono = [];

var elementoBotonGuardar = document.querySelector('#btnGuardar');

elementoBotonGuardar.addEventListener('click', registrarUsuario);

function registrarUsuario(){
    var sNombre = document.querySelector('#nombre').value,
        sApellido = document.querySelector('#apellido').value,
        sTelefono = document.querySelector('#telefono').value;

    aNombre.push(sNombre);
    aApellido.push(sApellido);
    aTelefono.push(sTelefono);

    localStorage.setItem('nombre_user', JSON.stringify(aNombre));
    localStorage.setItem('apellido_user', JSON.stringify(aApellido));
    localStorage.setItem('telefono_user', JSON.stringify(aTelefono));

}