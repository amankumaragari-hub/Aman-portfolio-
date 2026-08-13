// ===== DARK / LIGHT MODE =====

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});


// ===== MOBILE MENU =====

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ===== CLOSE MENU AFTER CLICK =====

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ===== CONSOLE MESSAGE =====

console.log("Welcome to Aman's Portfolio!");