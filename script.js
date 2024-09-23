// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        alert('All fields are required.');
        e.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Dynamic footer year
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.copyright-year').textContent = new Date().getFullYear();
});

// Lazy loading images
document.querySelectorAll('img').forEach((img) => {
    img.setAttribute('loading', 'lazy');
});
