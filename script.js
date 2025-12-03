document.addEventListener("DOMContentLoaded", () => {
    // ===== ACTIVE NAV LINK =====
    const page = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav ul li a").forEach(a => {
        if(a.getAttribute("href") === page) a.classList.add("active");
    });

    // ===== HEADER SHRINK ON SCROLL =====
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("shrink", window.scrollY > 50);
        // ===== BACK TO TOP =====
        const backTop = document.getElementById("backTop");
        if(window.scrollY > 300){
            backTop.style.opacity = "1"; backTop.style.pointerEvents = "auto";
        } else { backTop.style.opacity = "0"; backTop.style.pointerEvents = "none"; }
    });

    // ===== BACK TO TOP BUTTON =====
    const backTopBtn = document.createElement("button");
    backTopBtn.id = "backTop"; backTopBtn.textContent = "↑";
    Object.assign(backTopBtn.style, {
        position:"fixed", right:"20px", bottom:"20px", width:"45px", height:"45px",
        borderRadius:"50%", border:"none",
        background:"linear-gradient(135deg,#ff695e,#ff4500)", color:"#fff",
        cursor:"pointer", fontSize:"1.5rem", boxShadow:"0 6px 15px rgba(255,105,94,0.4)",
        opacity:"0", pointerEvents:"none", transition:"all 0.3s ease", zIndex:"999"
    });
    backTopBtn.addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));
    document.body.appendChild(backTopBtn);

    // ===== CTA BUTTON RIPPLE =====
    document.querySelectorAll(".cta-button, .detail-button").forEach(btn=>{
        btn.addEventListener("mousemove", e=>{
            const rect = btn.getBoundingClientRect();
            btn.style.setProperty("--mouse-x", `${e.clientX-rect.left}px`);
            btn.style.setProperty("--mouse-y", `${e.clientY-rect.top}px`);
        });
    });

    // ===== SCROLL REVEAL =====
    const revealEls = document.querySelectorAll(".hero, .product-card");
    if('IntersectionObserver' in window){
        const obs = new IntersectionObserver((entries, observer)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealEls.forEach(el=> { el.classList.add("reveal"); obs.observe(el); });
    } else { revealEls.forEach(el=>el.classList.add("active")); }

    // ===== STAGGER PRODUCT CARD =====
    document.querySelectorAll(".product-card").forEach((card,i)=>{
        card.style.transitionDelay = `${i*0.15}s`;
    });
});
