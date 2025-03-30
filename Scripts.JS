document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const elements = document.querySelectorAll(".info-text, .info-image");
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            if (position < screenHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    // Ejecutar cuando se haga scroll
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Para ejecutar al cargar si ya está visible
});

document.getElementById("scrollButton").addEventListener("click", function() {
    document.querySelector(".info").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const elements = document.querySelectorAll(".info-text, .info-image, .personal-info, .nova-images");
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    // Ejecutar cuando se haga scroll
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Para ejecutar al cargar si ya está visible
});

document.getElementById("scrollButton2").addEventListener("click", function() {
    document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("a[href='#about']").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el salto automático

    const target = document.querySelector("#about");
    window.scrollTo({
        top: target.offsetTop - 0, // Ajusta el desplazamiento (puedes cambiar el 50)
        behavior: "smooth"
    });
});