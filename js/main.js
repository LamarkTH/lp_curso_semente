document.addEventListener('DOMContentLoaded', () => {
    initVideoFacade();
    initFAQ();
    //scrollToVideo();
});

/**
 * Automatically scrolls to the video section on load if no specific hash is present.
*/
function scrollToVideo() {
    if (!window.location.hash) {
        const videoSection = document.getElementById('video');
        if (videoSection) {
            // instant jump behavior to look like they loaded directly on it
            videoSection.scrollIntoView({ behavior: 'auto' });
        }
    }
}

/**
 * Inits the Video Facade pattern.
 * Replaces the facade element with the actual Moodle iframe when clicked.
 */
function initVideoFacade() {
    const videoFacade = document.getElementById('videoFacade');
    if (!videoFacade) return;

    videoFacade.addEventListener('click', function () {
        // Create the iframe element
        const iframe = document.createElement('iframe');

        // Placeholder for Moodle video URL
        // TODO: Replace this URL with the actual Moodle video embed URL when available
        const videoUrl = 'https://player.vimeo.com/video/1195007082?h=6a02eb5b5f&autoplay=1';

        iframe.setAttribute('src', videoUrl);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
        iframe.setAttribute('allowfullscreen', 'true');

        // Clear the facade content and append the iframe
        this.innerHTML = '';
        this.classList.add('video-wrapper');
        this.appendChild(iframe);
    });
}

/**
 * Inits the FAQ Accordion functionality.
 */
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-item__question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;

            // Toggle current item
            const isOpen = faqItem.classList.contains('is-open');

            // Optional: Close all other items before opening the clicked one
            /*
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('is-open');
                item.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
            });
            */

            if (!isOpen) {
                faqItem.classList.add('is-open');
                question.setAttribute('aria-expanded', 'true');
            } else {
                faqItem.classList.remove('is-open');
                question.setAttribute('aria-expanded', 'false');
            }
        });
    });
}
