document.addEventListener('DOMContentLoaded', function() {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                // Add fade-in class to the section
                entry.target.classList.add('fade-in');
                // Stop observing the element after it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Adjust this to control when the animation triggers
    });

    // Target all sections to be observed
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Optional: Handle theme changes dynamically
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme() {
        if (themeMediaQuery.matches) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }

    // Initial theme check
    applyTheme();

    // Listen for changes in the color scheme
    themeMediaQuery.addEventListener('change', applyTheme);
});
