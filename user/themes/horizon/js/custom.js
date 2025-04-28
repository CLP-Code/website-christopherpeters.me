// console.log(custom.js loaded);

// Bento Gallery
window.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-bento-item a img");

    items.forEach((img) => {
        window.addEventListener("load", () => {
            const { naturalWidth: w, naturalHeight: h } = img;
            const ratio  = w / h;
            const parent = img.parentElement;
            const item = parent.parentElement;

            if (ratio > 1.2) {
                item.classList.add("landscape");
            } else if (ratio < 0.8) {
                item.classList.add("portrait");
            } else {
                item.classList.add("square");
            }
        });
    });
  });


// Testimonials
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.testimonial-wrapper');
    const items = document.querySelectorAll('.testimonial-item');
    let maxHeight = 0;

    items.forEach(item => {
    // Temporär sichtbar machen, um Höhe zu messen
    item.style.position = 'static';
    item.style.opacity = '1';
    item.style.pointerEvents = 'auto';

    maxHeight = Math.max(maxHeight, item.offsetHeight);

    // Wieder zurücksetzen
    item.style.position = '';
    item.style.opacity = '';
    item.style.pointerEvents = '';
    });

    wrapper.style.height = maxHeight + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let current = 0;
    let animating = false;

    function showTestimonial(next, direction) {
        if (animating || next === current) return;
        animating = true;
        const outClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
        const inClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';

        items[current].classList.remove('active');
        items[current].classList.add(outClass);

        items[next].classList.add(inClass);

        setTimeout(() => {
            items[current].classList.remove(outClass);
            items[next].classList.remove(inClass);
            items[next].classList.add('active');
            current = next;
            animating = false;
        }, 500);
    }

    prevBtn.addEventListener('click', function() {
        const next = (current - 1 + items.length) % items.length;
        showTestimonial(next, 'prev');
    });

    nextBtn.addEventListener('click', function() {
        const next = (current + 1) % items.length;
        showTestimonial(next, 'next');
    });
});

