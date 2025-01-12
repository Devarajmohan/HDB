document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Apply show class with delay
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Stop observing after it's shown
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    elements.forEach((element, index) => {
        // Add a delay based on the index of the element
        element.style.transitionDelay = `${index * 0.5}s`;
        observer.observe(element);
    });
});
