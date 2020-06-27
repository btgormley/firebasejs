let mobileNavButton = document.querySelector('.nav-collapse-icon');
let navLinks = document.querySelector('.nav-section-links');
let navItem = document.querySelectorAll('.nav-section-item');
let fas = document.querySelector('.fas');

mobileNavButton.addEventListener('click', () => {
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
        navLinks.classList.add("links-active");
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].classList.add('active');
        }
    }
});