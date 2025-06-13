        // Scroll to top functionality
        window.onscroll = function() {
            const scrollButton = document.querySelector(".scroll-to-top");
            const navbar = document.querySelector(".navbar");
            if (document.documentElement.scrollTop > 300) {
                scrollButton.style.display = "block";
                navbar.classList.add("scrolled");
            } else {
                scrollButton.style.display = "none";
                navbar.classList.remove("scrolled");
            }
        };

        document.querySelector(".scroll-to-top").addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Smooth scrolling for navbar links
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Active link highlighting
        window.addEventListener('scroll', () => {
            let current = '';
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - 70;
                if (scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        });
    