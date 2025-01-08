// let campos = document.getElementsByTagName('input');

// for (let i = 0 ; i < campos.length ; i++) {
//     campos[i].addEventListener("keydown", colorFondo);
//     campos[i].addEventListener("keyup", colorBlanco);
//     campos[i].addEventListener("focus", colorVerde);
//     campos[i].addEventListener("invalid", () => {
//         console.log("Coso inválido");
//     })

// }


// function colorFondo() {
//     this.style.backgroundColor = "red";
// }

// function colorBlanco() {
//     this.style.backgroundColor = "white";
// }

// function colorVerde() {
//     this.style.backgroundColor = "green";
// }


// const formulario = document.getElementById('formulario');
// const mensajeError = document.getElementById('mensaje');



// if (formulario.checkValidity()) {
//     mensajeError.textContent= "Formulario correcto";
// }

// if (!nombre.checkValidity()) {
//     mensajeError.textContent= nombre.validationMessage;
// }

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario
    const formulario = document.getElementById("miFormulario");
    const mensajeDiv = document.getElementById("mensaje");

    // Al enviar el formulario
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();  // Evita el envío por defecto del formulario

      // Validar el formulario
      if (formulario.checkValidity()) {
        // Si el formulario es válido
        mensajeDiv.textContent = "Formulario enviado correctamente.";
        mensajeDiv.style.color = "green";
       
        // Aquí puedes procesar los datos del formulario (por ejemplo, enviar a un servidor)
        // formulario.submit(); // Si deseas enviar el formulario después de la validación
      } else {
        // Si el formulario no es válido
        mensajeDiv.textContent = "Por favor, completa el formulario correctamente.";
        mensajeDiv.style.color = "red";
       
        // Resaltar los campos inválidos
        const camposInvalidos = formulario.querySelectorAll(":invalid");
        camposInvalidos.forEach(function(campo) {
          campo.style.borderColor = "red";
        });
      }
    });
  });
