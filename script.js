document.addEventListener('DOMContentLoaded', function() {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const image = document.getElementById('image');

    text1.addEventListener('animationend', function(event) {
        if (event.animationName === 'typing') {
            text2.classList.remove('hidden');
        }
    });

    text2.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'opacity') {
            image.classList.remove('hidden');
        }
    });

    text1.classList.add('transitioning-text');
});