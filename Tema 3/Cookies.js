function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function guardarCookies() {
  setCookie("nombre", document.getElementById("nombre").value, 1);
  setCookie("apellidos", document.getElementById("apellidos").value, 1);
  setCookie("dni", document.getElementById("dni").value, 1);
  setCookie("telefono", document.getElementById("telefono").value, 1);
  setCookie("email", document.getElementById("email").value, 1);

}

function borrarCookies() {
  document.cookie = "nombre=; expires=" + (new Date() - 1000) + "; path=/;";
  document.cookie = "apellidos=; expires=" + (new Date() - 1000) + "; path=/;";
  document.cookie = "dni=; expires=" + (new Date() - 1000) + "; path=/;";
  document.cookie = "telefono=; expires=" + (new Date() - 1000) + "; path=/;";
  document.cookie = "email=; expires=" + (new Date() - 1000) + "; path=/;";

}

function comprobarCookies() {
  console.log(getCookie("nombre"));
  console.log(getCookie("apellidos"));
  console.log(getCookie("dni"));
  console.log(getCookie("telefono"));
  console.log(getCookie("email"));

}

function escribirCookies() {
  document.getElementsByTagName("P")[0].innerHTML = getCookie("nombre") + ", " + getCookie("apellidos") + ", " + getCookie("dni") + ", " + getCookie("telefono") + ", " + getCookie("email");
}

