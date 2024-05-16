document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        });
    });
});
