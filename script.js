// ======================================
// INTERACTIVE JS
// ======================================

// Wait until DOM loaded
document.addEventListener("DOMContentLoaded", () => {

    /* ===== Active nav link ===== */
    const currentPage = window.location.pathname.split("/").pop(); 
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    /* ===== Scroll Reveal Animations ===== */
    const revealElements = document.querySelectorAll(".hero, .products, .product-detail, .about, .testimonial-item");

    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        el.classList.add("reveal");
        revealObserver.observe(el);
    });

    /* ===== Header shrink on scroll ===== */
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            header.style.padding = "0.6rem 2rem";
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            header.style.padding = "1rem 2rem";
            header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)";
        }
    });

    /* ===== Button hover micro-interactions ===== */
    const buttons = document.querySelectorAll(".cta-button, .detail-button, .back-button");
    buttons.forEach(btn => {
        btn.addEventListener("mousemove", (e)=>{
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty("--mouse-x", `${x}px`);
            btn.style.setProperty("--mouse-y", `${y}px`);
        });
    });

    /* ===== Back-to-top button ===== */
    const backTopBtn = document.createElement("button");
    backTopBtn.textContent = "↑";
    backTopBtn.id = "backTop";
    document.body.appendChild(backTopBtn);

    backTopBtn.style.cssText = `
        position: fixed;
        right: 20px;
        bottom: 20px;
        background: linear-gradient(135deg, #ff695e, #ff4500);
        color: white;
        border: none;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 6px 15px rgba(255,105,94,0.4);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 999;
    `;

    window.addEventListener("scroll", () => {
        if(window.scrollY > 300){
            backTopBtn.style.opacity = "1";
            backTopBtn.style.pointerEvents = "auto";
        } else {
            backTopBtn.style.opacity = "0";
            backTopBtn.style.pointerEvents = "none";
        }
    });

    backTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});

/* ======================================
   ULTRA PREMIUM INTERACTIVE ANIMATIONS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Button ripple effect */
    const buttons = document.querySelectorAll(".cta-button, .detail-button, .back-button");
    buttons.forEach(btn => {
        btn.addEventListener("mousemove", (e)=>{
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty("--mouse-x", `${x}px`);
            btn.style.setProperty("--mouse-y", `${y}px`);
        });
    });

    /* Reveal & stagger animation for product grid */
    const productItems = document.querySelectorAll(".product-card");
    productItems.forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.15}s`;
    });

    /* Smooth hero shimmer & background handled by CSS keyframes */
});
