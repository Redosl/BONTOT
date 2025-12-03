// Reveal elements using Intersection Observer (Modern & High Performance)
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    threshold: 0.2, // elemen terlihat 20% langsung muncul
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // stop observing after reveal
        }
    });
}, observerOptions);

// observe each element
revealElements.forEach(el => observer.observe(el));
