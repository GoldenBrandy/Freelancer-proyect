// Este codigo carga el navbar compartido en todas las paginas.
document.addEventListener("DOMContentLoaded", function () {
    const navbarElement = document.querySelector(".navbar-container");

    if (!navbarElement) {
        return;
    }

    fetch("../components/navbar.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al cargar el navbar");
            }
            return response.text();
        })
        .then((data) => {
            navbarElement.innerHTML = data;
        })
        .catch((error) => {
            console.error("Error al cargar el navbar:", error);
        });
});
