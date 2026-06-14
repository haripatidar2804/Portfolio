// ===============================
// TYPING EFFECT
// ===============================

const words = [
    "MCA Student",
    "Python Developer",
    "AI Enthusiast",
    "Web Developer",
    "DevOps Learner",
    "Agentic AI Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 120
    );
}

typeEffect();


// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");
        }

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const hiddenElements =
document.querySelectorAll(
    ".card, .project-card, .skills-grid span"
);

function revealElements() {

    hiddenElements.forEach(el => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            el.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            el.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


// ===============================
// NAVBAR GLOW ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 0 20px rgba(0,255,255,0.25)";

    } else {

        navbar.style.boxShadow =
            "none";
    }

});


// ===============================
// FLOATING IMAGE EFFECT
// ===============================

const profile =
document.querySelector(".profile-image");

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    profile.style.transform =
        `translate(${x}px, ${y}px)`;
});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "Hariom Patidar Portfolio Loaded Successfully 🚀"
);