// Selecciona el botón de cambio de tema y el ícono
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Agrega un evento de clic al botón
themeToggle.addEventListener("click", () => {
    // Obtiene el tema actual
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    
    // Cambia el tema entre "dark" y "light"
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    
    // Cambia el ícono según el tema
    themeIcon.className = newTheme === "dark" ? "bi bi-moon" : "bi bi-sun";
    
    // Guarda la preferencia del tema en localStorage
    localStorage.setItem("theme", newTheme);
});

// Cargar el tema guardado al iniciar
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-bs-theme", savedTheme);
themeIcon.className = savedTheme === "dark" ? "bi bi-moon" : "bi bi-sun";