// 1. ANIMAÇÃO DE SCROLL (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 2. EFEITO DE ESCRITA (Typewriter)
const textElement = document.querySelector('.typewriter');
const phrases = ["Engenheiro Informático", "Full-Stack Dev", "Estudante ISCTE"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Apagar mais rápido
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Escrever normal
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Espera antes de apagar
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Espera antes de começar o próximo
    }

    setTimeout(typeEffect, typeSpeed);
}

// Iniciar o efeito de escrita quando a página carrega
document.addEventListener('DOMContentLoaded', typeEffect);