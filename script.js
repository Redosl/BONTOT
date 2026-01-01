document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Hamburger Menu Toggle (untuk mobile/HP)
    // ==========================
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }

    // ==========================
    // Active Nav Link
    // ==========================
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(a => {
        if (a.getAttribute("href") === currentPage) {
            a.classList.add("active");
        }
    });

    // ==========================
    // Scroll Reveal
    // ==========================
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        reveals.forEach(el => observer.observe(el));
    } else {
        reveals.forEach(el => el.classList.add("active"));
    }

    // ==========================
    // Header Shrink on Scroll
    // ==========================
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "0.6rem 2rem";
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            header.style.padding = "1rem 2rem";
            header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)";
        }
    });

    // ==========================
    // Button Ripple Effect
    // ==========================
    document.querySelectorAll(".cta-button, .detail-button").forEach(btn => {
        btn.addEventListener("mousemove", e => {
            const rect = btn.getBoundingClientRect();
            btn.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
            btn.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        });
    });

    // ==========================
    // Back to Top Button
    // ==========================
    const backTop = document.createElement("button");
    backTop.textContent = "↑";
    backTop.id = "backTop";
    document.body.appendChild(backTop);
    backTop.style.cssText = `
        position: fixed; right: 20px; bottom: 20px;
        background: linear-gradient(135deg, #ff695e, #ff4500);
        color: white; border: none; border-radius: 50%;
        width: 45px; height: 45px; font-size: 1.5rem; cursor: pointer;
        box-shadow: 0 6px 15px rgba(255,105,94,0.4);
        opacity: 0; pointer-events: none; transition: all 0.3s ease; z-index: 999;
    `;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backTop.style.opacity = "1";
            backTop.style.pointerEvents = "auto";
        } else {
            backTop.style.opacity = "0";
            backTop.style.pointerEvents = "none";
        }
    });

    backTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
