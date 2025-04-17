//header visibility
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".contact-header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.add("hidden");
        } else {
            // Scrolling up
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});

//expanding menu
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const button = document.querySelector(".menu-button");
    const menuItems = document.querySelectorAll(".menu-item");

    button.addEventListener("click", () => {
        const expanded = menu.classList.toggle("expanded");

        // Change button symbol
        button.textContent = expanded ? "-" : "+";

        // Toggle visibility of menu items
        menuItems.forEach(item => {
            item.style.display = expanded ? "block" : "none";
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fashionButton = document.getElementById('fashion-button');
    const currentPage = window.location.pathname;

    if (currentPage.includes('fashion')) {
        fashionButton.classList.add('active');
    }
});



//scroll bar
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const scrollLinks = document.querySelectorAll(".scroll-link");

    const updateActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        scrollLinks.forEach((link) => link.classList.remove("active"));
        scrollLinks[index].classList.add("active");
    };

    scrollLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Initialize on page load
});