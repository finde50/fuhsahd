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
});
