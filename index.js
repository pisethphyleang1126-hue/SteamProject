const audio = document.getElementById('bg-music');
const toggle = document.getElementById('soundToggle');
let isPlaying = false;

toggle.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        toggle.innerHTML = '<i class="ti ti-volume"></i>';
    } else {
        audio.pause();
        toggle.innerHTML = '<i class="ti ti-volume-3"></i>';
    }
    isPlaying = !isPlaying;
});
const heading1 = document.querySelector('.home h1:nth-of-type(1)');
const heading2 = document.querySelector('.home h1:nth-of-type(2)');
const greeting = document.querySelector('.greeting');
const quote = document.querySelector('.home-quote p');

function playHomeAnimation() {
    // remove classes to reset
    [heading1, heading2, greeting, quote].forEach(el => {
        el.classList.remove('play-right', 'play-right-delay', 'play-rise', 'play-left');
        void el.offsetWidth; // force reflow so the browser "forgets" the animation
    });

    // re-add classes to replay
    heading1.classList.add('play-right');
    heading2.classList.add('play-right-delay');
    greeting.classList.add('play-rise');
    quote.classList.add('play-left');
}

// play on initial load
window.addEventListener('DOMContentLoaded', playHomeAnimation);

// play when clicking "Home" in nav
document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener('click', playHomeAnimation);
});

// play when scrolling back into view
const homeSection = document.querySelector('#home');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            playHomeAnimation();
        }
    });
}, { threshold: 0.6 }); // fires when 60% of the section is visible

observer.observe(homeSection);