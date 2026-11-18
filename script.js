/* ===== WhatsApp number (country code first, digits only) ===== */
const WHATSAPP_NUMBER = "254727500479";

/* ===== Hamburger (phones) ===== */
function toggleMenu(e) {
    const menu = document.getElementById("menuLinks");
    const btn = document.getElementById("hamburger");
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    if (e) e.stopPropagation();
}

/* ===== "Ask About" buttons ===== */
const PRODUCT_NAMES = {
    bed: "Modern Classy Beds",
    sofa: "Classic Sofas Sets",
    outdoor: "Stylish Outdoor Furniture",
    tvstand: "Well Done Tv Stands",
    wardrobe: "Modern Wardrobes",
    shoerack: "Custom Made Shoe Racks",
    dining: "Executive Dining Tables",
    office: "Stylish Office Furniture"
};

function orderwhatsapp(product) {
    const name = PRODUCT_NAMES[product] || product;
    const msg = "Hello Rafiki Modern Furnitures, I would like to ask about your " + name + ".";
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
}

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menuLinks");
    const btn = document.getElementById("hamburger");

    /* Close the menu when tapping anywhere else */
    document.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
    });

    /* Menu link: scroll to the section and slide it up */
    menu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", (e) => {
            const target = document.querySelector(a.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            menu.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
            target.scrollIntoView({ behavior: "smooth" });
            target.classList.remove("slide-up");
            void target.offsetWidth;          /* restart the animation */
            target.classList.add("slide-up");
        });
    });

    /* Reveal on scroll */
    const items = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) { en.target.classList.add("show"); io.unobserve(en.target); }
            });
        }, { threshold: 0.12 });
        items.forEach((el) => io.observe(el));
    } else {
        items.forEach((el) => el.classList.add("show"));
    }
});
