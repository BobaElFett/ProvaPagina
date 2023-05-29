function incrementarContador() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.visitas) {
            localStorage.visitas = Number(localStorage.visitas) + 1;
        } else {
            localStorage.visitas = 1;
        }
        document.getElementById("contador").innerHTML = "Número de Visitas: " + localStorage.visitas;
    } else {
        console.log("El navegador no soporta almacenamiento local.");
    }
}

window.addEventListener("DOMContentLoaded", function() {
    incrementarContador();
    var cookieBanner = document.getElementById("cookie-banner");
    var acceptButton = document.getElementById("accept-button");
    var denyButton = document.getElementById("deny-button");

    acceptButton.addEventListener("click", function() {
        cookieBanner.style.display = "none";
        setCookie("cookieAccepted", true, 30);
    });

    denyButton.addEventListener("click", function() {
        var newWindow = window.open('', '_self');
newWindow.close();

    });

    checkCookie();
});

function checkCookie() {
    var cookieAccepted = getCookie("cookieAccepted");
    if (cookieAccepted) {
        var cookieBanner = document.getElementById("cookie-banner");
        cookieBanner.style.display = "none";
    }
}

function getCookie(name) {
    var cookieName = encodeURIComponent(name) + "=";
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return decodeURIComponent(cookie.substring(cookieName.length));
        }
    }
    return null;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function mostrarContacto() {
    var contactScreen = document.getElementById("contact-screen");
    contactScreen.style.display = "block";
}

function closeButton() {
    var contactScreen = document.getElementById("contact-screen");
    contactScreen.style.display = "none";
};
