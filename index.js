document.getElementById('b1').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    });

    const target = document.querySelector('.animated-text');
    observer.observe(target);
});