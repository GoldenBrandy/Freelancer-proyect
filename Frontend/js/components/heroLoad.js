// Este codigo carga el navbar compartido en todas las paginas.
document.addEventListener("DOMContentLoaded", function () {
    const heroElement = document.querySelector(".hero-container");

    if (!heroElement) {
        return;
    }

    fetch("../components/hero.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al cargar el hero");
            }
            return response.text();
        })
        .then((data) => {
            heroElement.innerHTML = data;
        })
        .catch((error) => {
            console.error("Error al cargar el hero:", error);
        });
});
