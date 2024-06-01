document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let isScrolling = false;

    const activateLink = (link) => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    };

    window.onscroll = () => {
        if (isScrolling) return;  

        let scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href').includes(sectionId)) {
                        activateLink(link);
                    }
                });
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();   

            let targetSection = document.querySelector(link.getAttribute('href'));
            isScrolling = true;
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            setTimeout(() => {
                activateLink(link);
                isScrolling = false;  
            }, 50); 
        });
    });

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});
