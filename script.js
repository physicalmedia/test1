
/*=========================================================
8. ANIMATED NUMBER COUNTERS
=========================================================*/

const counterElements = document.querySelectorAll(".stat h2");

counterElements.forEach((counter) => {

    const value = counter.innerText;

    const number = parseInt(value.replace(/\D/g, ""));

    if (isNaN(number)) return;

    gsap.fromTo(

        counter,

        {

            innerText: 0

        },

        {

            innerText: number,

            duration: 2,

            ease: "power2.out",

            snap: {

                innerText: 1

            },

            scrollTrigger: {

                trigger: counter,

                start: "top 90%"

            },

            onUpdate: function () {

                counter.innerText =

                    Math.floor(counter.innerText) +

                    value.replace(/[0-9]/g, "");

            }

        }

    );

});





/*=========================================================
9. PROJECT CARD 3D TILT
=========================================================*/

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 18;

        const rotateX = (0.5 - y / rect.height) * 18;

        gsap.to(card, {

            rotationX: rotateX,

            rotationY: rotateY,

            transformPerspective: 1200,

            transformOrigin: "center",

            duration: .4,

            ease: "power2.out"

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            rotationX: 0,

            rotationY: 0,

            duration: .7,

            ease: "power3.out"

        });

    });

});





/*=========================================================
10. FAQ ACCORDION
=========================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const paragraph = item.querySelector("p");

    paragraph.style.height = "0px";

    paragraph.style.overflow = "hidden";

    paragraph.style.opacity = "0";

    item.addEventListener("click", () => {

        const active = item.classList.contains("active");

        faqItems.forEach((faq) => {

            faq.classList.remove("active");

            const p = faq.querySelector("p");

            gsap.to(p, {

                height: 0,

                opacity: 0,

                duration: .4

            });

        });

        if (!active) {

            item.classList.add("active");

            gsap.to(paragraph, {

                height: "auto",

                opacity: 1,

                duration: .5

            });

        }

    });

});





/*=========================================================
11. SCROLL PROGRESS BAR
=========================================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";

progressBar.style.left = "0";

progressBar.style.top = "0";

progressBar.style.height = "4px";

progressBar.style.width = "0%";

progressBar.style.background = "#ff6a00";

progressBar.style.zIndex = "999999";

progressBar.style.transition = "width .15s linear";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const height =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const width = (scroll / height) * 100;

    progressBar.style.width = width + "%";

});





/*=========================================================
12. PARALLAX HERO
=========================================================*/

gsap.to(".circle1", {

    y: 250,

    scrollTrigger: {

        trigger: ".hero",

        scrub: true

    }

});

gsap.to(".circle2", {

    y: -200,

    scrollTrigger: {

        trigger: ".hero",

        scrub: true

    }

});

gsap.to(".circle3", {

    x: 180,

    scrollTrigger: {

        trigger: ".hero",

        scrub: true

    }

});

gsap.to(".grid", {

    y: 120,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        scrub: true

    }

});





/*=========================================================
13. SECTION TITLE REVEALS
=========================================================*/

gsap.utils.toArray("section h2").forEach((title) => {

    gsap.from(title, {

        scrollTrigger: {

            trigger: title,

            start: "top 85%"

        },

        opacity: 0,

        y: 100,

        duration: 1,

        ease: "power4.out"

    });

});

gsap.utils.toArray(".section-label").forEach((label) => {

    gsap.from(label, {

        scrollTrigger: {

            trigger: label,

            start: "top 90%"

        },

        opacity: 0,

        x: -60,

        duration: .8

    });

});





/*=========================================================
14. FLOATING BACKGROUND ORBS
=========================================================*/

gsap.to(".circle1", {

    x: 50,

    y: -30,

    duration: 12,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});

gsap.to(".circle2", {

    x: -70,

    y: 40,

    duration: 10,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});

gsap.to(".circle3", {

    x: 35,

    y: -35,

    duration: 8,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});





/*=========================================================
15. IMAGE FADE-IN
=========================================================*/

gsap.utils.toArray(".project-image").forEach((image) => {

    gsap.from(image, {

        scrollTrigger: {

            trigger: image,

            start: "top 85%"

        },

        scale: .85,

        opacity: 0,

        duration: 1,

        ease: "power3.out"

    });

});
/*=========================================================
16. NAVIGATION ACTIVE LINK
=========================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-middle a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});





/*=========================================================
17. HERO PARALLAX TEXT
=========================================================*/

gsap.to(".hero h1", {

    yPercent: 30,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});

gsap.to(".hero-description", {

    yPercent: 50,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});

gsap.to(".hero-buttons", {

    yPercent: 70,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});





/*=========================================================
18. FEATURE CARD HOVER GLOW
=========================================================*/

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,106,0,.18),
        rgba(255,255,255,.03) 45%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.03)";

    });

});





/*=========================================================
19. BUTTON RIPPLE EFFECT
=========================================================*/

const rippleButtons = document.querySelectorAll(

    ".primary-button, .secondary-button"

);

rippleButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        const ripple = document.createElement("span");

        const rect = button.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.position = "absolute";

        ripple.style.borderRadius = "50%";

        ripple.style.left =

            event.clientX - rect.left - size / 2 + "px";

        ripple.style.top =

            event.clientY - rect.top - size / 2 + "px";

        ripple.style.background = "rgba(255,255,255,.35)";

        ripple.style.pointerEvents = "none";

        ripple.style.transform = "scale(0)";

        ripple.style.transition = ".6s";

        button.style.position = "relative";

        button.style.overflow = "hidden";

        button.appendChild(ripple);

        requestAnimationFrame(() => {

            ripple.style.transform = "scale(4)";

            ripple.style.opacity = "0";

        });

        setTimeout(() => {

            ripple.remove();

        }, 650);

    });

});





/*=========================================================
20. RANDOM FLOATING ANIMATION
=========================================================*/

const floatingElements = document.querySelectorAll(

    ".feature-card, .project-card, .tech-card"

);

floatingElements.forEach((element) => {

    gsap.to(element, {

        y: gsap.utils.random(-10, 10),

        duration: gsap.utils.random(3, 6),

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

});





/*=========================================================
21. PROJECT IMAGE ZOOM
=========================================================*/

projectCards.forEach((card) => {

    const image = card.querySelector(".project-image");

    card.addEventListener("mouseenter", () => {

        gsap.to(image, {

            scale: 1.08,

            duration: .5

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(image, {

            scale: 1,

            duration: .5

        });

    });

});





/*=========================================================
22. TECHNOLOGY CARDS
=========================================================*/

const techCards = document.querySelectorAll(".tech-card");

techCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {

            scale: 1.08,

            rotation: gsap.utils.random(-2, 2),

            duration: .35

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            scale: 1,

            rotation: 0,

            duration: .35

        });

    });

});





/*=========================================================
23. PAGE LOAD FADE
=========================================================*/

window.addEventListener("load", () => {

    gsap.from("body", {

        opacity: 0,

        duration: .8,

        ease: "power2.out"

    });

});





/*=========================================================
24. SCROLL TO TOP BUTTON
=========================================================*/

const scrollButton = document.createElement("button");

scrollButton.innerHTML = "↑";

scrollButton.classList.add("scroll-top");

document.body.appendChild(scrollButton);

Object.assign(scrollButton.style, {

    position: "fixed",

    bottom: "30px",

    right: "30px",

    width: "55px",

    height: "55px",

    borderRadius: "50%",

    border: "none",

    background: "#ff6a00",

    color: "#fff",

    fontSize: "1.4rem",

    cursor: "pointer",

    opacity: "0",

    transform: "translateY(30px)",

    transition: ".35s",

    zIndex: "99999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 700) {

        scrollButton.style.opacity = "1";

        scrollButton.style.transform = "translateY(0)";

    } else {

        scrollButton.style.opacity = "0";

        scrollButton.style.transform = "translateY(30px)";

    }

});

scrollButton.addEventListener("click", () => {

    lenis.scrollTo(0, {

        duration: 1.5

    });

});





/*=========================================================
25. CONSOLE MESSAGE
=========================================================*/

console.log(

`

███████╗███████╗███╗   ██╗██╗      █████╗ ███╗   ██╗██████╗

██╔════╝██╔════╝████╗  ██║██║     ██╔══██╗████╗  ██║██╔══██╗

█████╗  █████╗  ██╔██╗ ██║██║     ███████║██╔██╗ ██║██║  ██║

██╔══╝  ██╔══╝  ██║╚██╗██║██║     ██╔══██║██║╚██╗██║██║  ██║

██║     ███████╗██║ ╚████║███████╗██║  ██║██║ ╚████║██████╔╝

╚═╝     ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝

`

);

console.log("Fenland Web Design");

console.log("Designed & Developed with HTML, CSS, JavaScript and GSAP.");

console.log("© 2026");
