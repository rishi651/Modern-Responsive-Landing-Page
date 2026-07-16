// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===============================
// STICKY NAVBAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.05)";
    }

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    let scroll = document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});

// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll("section");

function reveal() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// FAQ
// ===============================

const questions = document.querySelectorAll(".question");

questions.forEach(question => {

    const answer = question.querySelector("p");

    answer.style.display = "none";

    question.addEventListener("click", () => {

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            document.querySelectorAll(".question p").forEach(p => {

                p.style.display = "none";

            });

            answer.style.display = "block";

        }

    });

});

// ===============================
// COUNTER
// ===============================

const counters = document.querySelectorAll(".stat h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.offsetTop - 500;

    if (window.scrollY >= top && !started) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseInt(text);

            const suffix = text.replace(/[0-9]/g, "");

            let count = 0;

            const speed = target / 80;

            const update = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText =
                        Math.ceil(count) + suffix;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + suffix;

                }

            };

            update();

        });

    }

});

// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// HERO BUTTON EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});