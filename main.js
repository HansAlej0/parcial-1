function mostrarAlerta() {
    // Obtener los valores ingresados en los campos del formulario
    var nombre = document.getElementById("input1").value;
    var telefono = document.getElementById("input2").value;
    var correo = document.getElementById("input3").value;

    // Crear el mensaje personalizado
    var mensaje = `Apreciado ${nombre} hemos recibido su mensaje. Nos comunicaremos al telefono ${telefono} o direccion de email ${correo} en los proximos dias`;

    // Mostrar la alerta con el mensaje personalizado
    alert(mensaje);
}
