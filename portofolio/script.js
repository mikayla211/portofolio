// ==============================
// SCROLL ANIMATION
// ==============================

const elements = document.querySelectorAll(
    ".section, .project-card, .skill-box, .large-skill-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ==============================
// NAVIGATION
// ==============================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});