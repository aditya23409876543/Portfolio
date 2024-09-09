// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change button icon based on theme
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
});

// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// script.js

const logo = document.querySelector('.logo');
const container = document.querySelector('.logo-container');
// Adjust rotation based on cursor movement
container.addEventListener('mousemove', (e) => {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Calculate mouse position relative to the container
    const mouseX = e.clientX - container.offsetLeft;
    const mouseY = e.clientY - container.offsetTop;

    // Calculate the rotation angles (map mouse position to degrees)
    const rotateX = ((mouseY / containerHeight) - 0.65) * 30; // Vertical tilt
    const rotateY = ((mouseX / containerWidth) - 0.65) * -30; // Horizontal tilt

    // Apply rotation
    logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset rotation when the mouse leaves
container.addEventListener('mouseleave', () => {
    logo.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
