const elements = document.querySelectorAll('.fade');

function checkFade() {
    const trigger = window.innerHeight * 0.9;
    elements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < trigger) el.classList.add('show');
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
