/*=========================================================
22. RESPONSIVE DESIGN
=========================================================*/

@media screen and (max-width: 1400px) {

    .hero h1 {

        font-size: clamp(4rem, 9vw, 8rem);

    }

    .project-grid {

        grid-template-columns: repeat(2, 1fr);

    }

    .stats-grid {

        grid-template-columns: repeat(2, 1fr);

    }

}







@media screen and (max-width: 1100px) {

    .navbar {

        flex-direction: column;

        gap: 2rem;

    }

    .about-grid {

        grid-template-columns: 1fr;

    }

    .about-right {

        grid-template-columns: repeat(2,1fr);

    }

    .timeline-item {

        grid-template-columns: 1fr;

    }

    .service {

        grid-template-columns: 1fr;

    }

    .testimonial-grid {

        grid-template-columns: 1fr;

    }

    .tech-grid {

        grid-template-columns: repeat(2,1fr);

    }

    .footer-top {

        grid-template-columns: 1fr;

    }

}







@media screen and (max-width: 768px) {

    html {

        font-size: 15px;

    }

    header {

        padding: 1rem 0;

    }

    .navbar {

        gap: 1.5rem;

    }

    .nav-middle ul {

        flex-wrap: wrap;

        justify-content: center;

        gap: 1rem;

    }

    .hero {

        padding-top: 180px;

        min-height: auto;

        padding-bottom: 120px;

    }

    .hero h1 {

        font-size: clamp(3rem,15vw,5rem);

    }

    .hero-description {

        font-size: 1rem;

    }

    .hero-buttons {

        flex-direction: column;

    }

    .hero-buttons a {

        width: 100%;

        justify-content: center;

    }

    .hero-stats {

        gap: 2rem;

    }

    .stats-grid {

        grid-template-columns: 1fr;

    }

    .project-grid {

        grid-template-columns: 1fr;

    }

    .tech-grid {

        grid-template-columns: 1fr;

    }

    .about-right {

        grid-template-columns: 1fr;

    }

    .contact-wrapper {

        padding: 4rem 2rem;

    }

}







@media screen and (max-width: 500px) {

    h2 {

        line-height: 1.1;

    }

    .service {

        padding: 2rem;

    }

    .timeline-item {

        padding: 2rem;

    }

    .stat-card {

        padding: 2rem;

    }

    .feature-card {

        padding: 2rem;

    }

    .project-content {

        padding: 2rem;

    }

}







/*=========================================================
23. GLOBAL HOVER ANIMATIONS
=========================================================*/

a {

    transition: var(--transition);

}

button {

    transition: var(--transition);

}

img {

    transition: var(--transition);

}

.project-card:hover img {

    transform: scale(1.08);

}

.feature-card:hover h3 {

    color: var(--accent);

}

.service:hover .service-number {

    color: var(--accent);

    transform: translateX(12px);

}

.timeline-item:hover span {

    transform: scale(1.15);

}

.tech-card:hover {

    letter-spacing: 2px;

}







/*=========================================================
24. SCROLL REVEAL CLASSES
=========================================================*/

.reveal {

    opacity: 0;

    transform: translateY(80px);

}

.reveal-left {

    opacity: 0;

    transform: translateX(-80px);

}

.reveal-right {

    opacity: 0;

    transform: translateX(80px);

}

.reveal-scale {

    opacity: 0;

    transform: scale(.85);

}

.visible {

    opacity: 1;

    transform: none;

}







/*=========================================================
25. FLOATING ANIMATIONS
=========================================================*/

@keyframes float {

    0% {

        transform: translateY(0px);

    }

    50% {

        transform: translateY(-20px);

    }

    100% {

        transform: translateY(0px);

    }

}

@keyframes pulse {

    0% {

        transform: scale(1);

    }

    50% {

        transform: scale(1.05);

    }

    100% {

        transform: scale(1);

    }

}

@keyframes rotateSlow {

    from {

        transform: rotate(0deg);

    }

    to {

        transform: rotate(360deg);

    }

}

@keyframes fadeUp {

    from {

        opacity: 0;

        transform: translateY(80px);

    }

    to {

        opacity: 1;

        transform: translateY(0);

    }

}

@keyframes fadeDown {

    from {

        opacity: 0;

        transform: translateY(-80px);

    }

    to {

        opacity: 1;

        transform: translateY(0);

    }

}

@keyframes fadeLeft {

    from {

        opacity: 0;

        transform: translateX(-80px);

    }

    to {

        opacity: 1;

        transform: translateX(0);

    }

}

@keyframes fadeRight {

    from {

        opacity: 0;

        transform: translateX(80px);

    }

    to {

        opacity: 1;

        transform: translateX(0);

    }

}







/*=========================================================
26. GLASS UTILITIES
=========================================================*/

.glass {

    background: rgba(255,255,255,.05);

    backdrop-filter: blur(30px);

    border: 1px solid rgba(255,255,255,.08);

}

.blur {

    backdrop-filter: blur(80px);

}

.shadow {

    box-shadow: var(--shadow-large);

}

.round {

    border-radius: var(--radius);

}







/*=========================================================
27. ANIMATION HELPERS
=========================================================*/

.float {

    animation: float 6s ease-in-out infinite;

}

.pulse {

    animation: pulse 2.5s infinite;

}

.rotate {

    animation: rotateSlow 25s linear infinite;

}

.fade-up {

    animation: fadeUp 1s forwards;

}

.fade-down {

    animation: fadeDown 1s forwards;

}

.fade-left {

    animation: fadeLeft 1s forwards;

}

.fade-right {

    animation: fadeRight 1s forwards;

}







/*=========================================================
28. PERFORMANCE
=========================================================*/

.project-card,

.feature-card,

.tech-card,

.service,

.timeline-item,

.stat-card,

.primary-button,

.secondary-button {

    will-change: transform;

}

img {

    image-rendering: auto;

}

* {

    -webkit-font-smoothing: antialiased;

    -moz-osx-font-smoothing: grayscale;

}







/*=========================================================
29. END OF FILE
=========================================================*/

/*

Fenland Web Design

Production Stylesheet

Built for:

✔ HTML5
✔ CSS3
✔ GSAP
✔ Lenis
✔ ScrollTrigger

End of style.css

*/
