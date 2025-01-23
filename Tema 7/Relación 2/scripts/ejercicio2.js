let boton1 = document.getElementById('boton');
boton1.addEventListener('click', handleFiles);

function handleFiles() {
    fileList = this.files;
    loadFile(fileList[0]);    
  
}

function loadFile(fichero) {
    return new Promise((resolve, reject) => {
        resolve("Todo OK");
        reject("Error en la carga del fichero Javascript");
    })
}

