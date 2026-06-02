document.addEventListener('DOMContentLoaded', () => {
    initVideoFacade();
    initFAQ();
    registrarPageView();

});

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


function generateEventID() {
    return 'eid-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
}

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

async function enviarParaCapi({ eventName, eventId, eventData }) {
    const response = await fetch('/.netlify/functions/meta-capi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event_name: eventName,
            event_id: eventId,
            event_source_url: window.location.href,
            event_data: eventData,
            fbp: getCookie('_fbp'),
            fbc: getCookie('_fbc')
        })
    });

    return response.json();
}

async function enviarEventoMeta({
    eventName,
    eventType = 'track',
    eventData = {},
    redirectUrl = null,
    redirectTarget = '_self'
}) {
    const eventId = generateEventID();

    // Open target blank immediately if requested to prevent popup blocker
    if (redirectUrl && redirectTarget === '_blank') {
        window.open(redirectUrl, '_blank', 'noopener,noreferrer');
    }

    try {
        if (typeof fbq === 'function') {
            fbq(eventType, eventName, eventData, {
                eventID: eventId
            });
        } else {
            console.warn('fbq não encontrado. O evento do navegador não foi enviado.');
        }

        const capiResponse = await enviarParaCapi({
            eventName: eventName,
            eventId: eventId,
            eventData: eventData
        });

        console.log('Resposta CAPI:', capiResponse);
    } catch (error) {
        console.error('Erro ao enviar evento Meta/CAPI:', error);
    } finally {
        if (redirectUrl && redirectTarget !== '_blank') {
            window.location.href = redirectUrl;
        }
    }
}

function registrarPageView() {
    const eventData = {
        content_name: 'PageView - Curso Semente',
        content_category: 'Funil Curso Semente',
        funnel_name: 'Curso Semente para Pós Graduação',
        project: 'Cure Instituto'
    };

    enviarEventoMeta({
        eventName: 'PageView',
        eventType: 'track',
        eventData: eventData
    });
}

function registrarViewContentVideo() {
    const eventData = {
        content_name: 'Clique no vídeo da LP - Curso Semente',
        content_category: 'Vídeo de Venda',
        content_type: 'video',
        funnel_step: 'LP',
        funnel_name: 'Curso Semente para Pós Graduação',
        product_name: 'Curso Semente',
        destination_product: 'Pós Graduação',
        value: 0,
        currency: 'BRL'
    };

    enviarEventoMeta({
        eventName: 'ViewContent',
        eventType: 'track',
        eventData: eventData
    });
}

function registrarContatoWhatsApp(targetBlank = false) {
    const eventData = {
        content_name: 'Contato WhatsApp - LP Curso Semente',
        content_category: 'WhatsApp Comercial',
        content_type: 'contact',
        funnel_step: 'LP',
        funnel_name: 'Curso Semente para Pós Graduação',
        product_name: 'Curso Semente',
        destination_product: 'Pós Graduação',
        contact_channel: 'WhatsApp'
    };

    enviarEventoMeta({
        eventName: 'Contact',
        eventType: 'track',
        eventData: eventData,
        redirectUrl: 'https://wa.me/558186775477?text=Olá!+Gostaria+de+saber+mais+mais+sobre+a+imersão+!',
        redirectTarget: targetBlank ? '_blank' : '_self'
    });
}

function iniciarCheckout() {
    const eventData = {
        content_name: 'Clique para checkout - Curso Semente',
        content_category: 'Intenção de checkout',
        funnel_step: 'LP para Checkout',
        product_name: 'Curso Semente',
        value: 47.00,
        currency: 'BRL'
    };

    enviarEventoMeta({
        eventName: 'CheckoutClick',
        eventType: 'trackCustom',
        eventData: eventData,
        redirectUrl: 'https://pay.kiwify.com.br/iKJkpgU'
    });
}

// Expose functions globally to be accessible from HTML onclick attributes
window.generateEventID = generateEventID;
window.getCookie = getCookie;
window.enviarParaCapi = enviarParaCapi;
window.enviarEventoMeta = enviarEventoMeta;
window.registrarPageView = registrarPageView;
window.registrarViewContentVideo = registrarViewContentVideo;
window.registrarContatoWhatsApp = registrarContatoWhatsApp;
window.iniciarCheckout = iniciarCheckout;