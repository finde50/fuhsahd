document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add class when in view
                observer.unobserve(entry.target); // Optional: stop observing after animation
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Target elements to observe
    document.querySelectorAll('.section h3, .section p').forEach(element => {
        observer.observe(element);
    });
});
