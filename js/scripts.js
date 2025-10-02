document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        // Simulación de envío de formulario
        // En un proyecto real, aquí se conectaría con un servicio de email (como EmailJS o Formspree)
        formMessage.textContent = '¡Gracias por tu mensaje! Te contactaré pronto.';
        formMessage.style.color = '#4CAF50';

        // Limpia el formulario después de 2 segundos
        setTimeout(() => {
            contactForm.reset();
            formMessage.textContent = '';
        }, 3000);
    });
});

