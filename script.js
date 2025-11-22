const revealElements = document.querySelectorAll('.reveal');

function reveal() {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();
