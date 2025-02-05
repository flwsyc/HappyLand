window.addEventListener('load', function() {
    let progress = 0;
    let progressBar = document.querySelector('.progress');

    let interval = setInterval(function() {
        progress += Math.random() * 3 + 1; 
        if (progress > 10) progress = 100; 

        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 500); 
        }
    }, 100);
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".m1");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});

// scrolling animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".m2, .m3");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));
});

// overlay
document.getElementById('trigger').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('overlay').classList.add('show');
});

