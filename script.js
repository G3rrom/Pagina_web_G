document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correo").value;
  
    if (nombre === "" || edad === "" || correo === "") {
      mostrarError("Todos los campos son obligatorios.");
      return;
    }
  
    if (isNaN(edad)) {
      mostrarError("La edad debe ser un número.");
      return;
    }
  
    if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
      mostrarError("El formato del correo no es válido.");
      return;
    }
  
    // Aquí puedes enviar los datos del formulario a tu servidor
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Correo:", correo);
  
    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("correo").value = "";
  
    // Mostrar mensaje de éxito
    mostrarMensaje("Datos enviados correctamente.");
  });
  
  function mostrarError(mensaje) {
    document.getElementById("mensajeError").style.color = "red";
    document.getElementById("mensajeError").textContent = mensaje;
  }
  
  function mostrarMensaje(mensaje) {
    document.getElementById("mensajeError").style.color = "green";
    document.getElementById("mensajeError").textContent = mensaje;
  }
  

