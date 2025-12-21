
// Seletores
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Função para abrir/fechar menu mobile
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fechar menu ao clicar em um link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Efeito de scroll suave já é nativo via CSS (scroll-behavior: smooth),
// mas podemos adicionar uma classe no header ao rolar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black');
    } else {
        nav.classList.remove('bg-black');
    }
});

console.log("HUMANO Studio: Sistema carregado com Vanilla JS.");
