// ===== MARIA MARIAAA LANDING PAGE - JAVASCRIPT =====
// Interatividades, animações e funcionalidades

// ===== MENU TOGGLE (Mobile) =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== BUTTON CLICK HANDLERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Botões "Comprar Agora"
    const buyButtons = document.querySelectorAll('.btn-primary');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleBuyClick(this);
        });
    });

    // Botões "Ver Detalhes"
    const detailButtons = document.querySelectorAll('.btn-secondary');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleDetailClick(this);
        });
    });

    // Botão "Comprar Coleção Completa"
    const collectionButton = document.querySelector('.final-cta .btn-white');
    if (collectionButton) {
        collectionButton.addEventListener('click', function() {
            handleCollectionClick();
        });
    }
});

// Função para lidar com clique em "Comprar Agora"
function handleBuyClick(button) {
    console.log('Botão Comprar Agora clicado');
    
    // Aqui você pode adicionar:
    // - Redirecionar para seu e-commerce
    // - Abrir um modal
    // - Enviar para WhatsApp
    
    // Exemplo: Redirecionar para WhatsApp
    // window.open('https://wa.me/5511999999999?text=Olá! Gostaria de comprar um biquíni Maria Mariaaa', '_blank');
    
    // Exemplo: Mostrar alerta
    //showNotification('Redirecionando para a loja...', 'success');
    
    // Remova a linha abaixo e adicione sua lógica real
    //setTimeout(() => {
    //    alert('Conecte este botão ao seu e-commerce ou WhatsApp');
   // }, 500);
}

// Função para lidar com clique em "Ver Detalhes"
function handleDetailClick(button) {
    const productName = button.closest('.product-card').querySelector('h3').textContent;
    console.log('Ver detalhes de:', productName);
    
    showNotification(`Detalhes de ${productName}`, 'info');
    
    // Aqui você pode adicionar:
    // - Abrir um modal com detalhes do produto
    // - Redirecionar para página de produto
    // - Mostrar mais imagens
}

// Função para lidar com clique em "Comprar Coleção Completa"
function handleCollectionClick() {
    console.log('Botão Comprar Coleção Completa clicado');
    
    showNotification('Redirecionando para a coleção completa...', 'success');
    
    // Aqui você pode adicionar:
    // - Redirecionar para página de produtos
    // - Abrir seu e-commerce
    // - Enviar para WhatsApp
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para a notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-family: 'Montserrat', sans-serif;
    `;
    
    // Definir cor baseada no tipo
    if (type === 'success') {
        notification.style.backgroundColor = '#FA8072';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#E74C3C';
    } else {
        notification.style.backgroundColor = '#3498DB';
    }
    
    document.body.appendChild(notification);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== SCROLL ANIMATIONS =====
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos
    const elements = document.querySelectorAll('.product-card, .benefit-item, .testimonial-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== HEADER SHADOW ON SCROLL =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ===== FORM VALIDATION (se adicionar formulário) =====
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// ===== UTILITY FUNCTIONS =====

// Função para formatar preço em Real
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função para obter parâmetro da URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Função para rastrear eventos (Google Analytics)
function trackEvent(eventName, eventData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
}

// ===== ANALYTICS TRACKING =====
document.addEventListener('DOMContentLoaded', function() {
    // Rastrear cliques em botões CTA
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent,
                button_type: 'primary'
            });
        });
    });

    // Rastrear visualizações de seções
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id || entry.target.className;
                trackEvent('section_view', {
                    section: sectionId
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// ===== INICIALIZAR TUDO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Maria Mariaaa Landing Page carregada com sucesso!');
    
    // Inicializar observador de elementos
    observeElements();
    
    // Adicionar estilos de animação
    addAnimationStyles();
});

// Adicionar estilos de animação dinamicamente
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== EXPORT FUNCTIONS =====
// Permitir uso em outros scripts
window.MariaMariaaa = {
    showNotification,
    trackEvent,
    formatPrice,
    validateEmail,
    validatePhone,
    getUrlParameter
};
document.addEventListener("DOMContentLoaded", function () {
    let lastScroll = 0;
    const header =
        document.querySelector("header") ||
        document.querySelector(".header") ||
        document.querySelector("#header") ||
        document.querySelector(".manus-header");

    if (header) {
        header.style.transition = "transform 0.3s ease";

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll) {
                header.style.transform = "translateY(-100%)"; // some
            } else {
                header.style.transform = "translateY(0)"; // aparece
            }

            lastScroll = currentScroll;
        });
    }
});

// ===== BOTÃO COMPRAR AGORA → WHATSAPP =====
document.addEventListener("DOMContentLoaded", function () {
    const btnComprarAgora =
        document.querySelector(".btn-primary") ||
        document.querySelector("#comprarAgora") ||
        document.querySelector(".comprar-agora");

    if (btnComprarAgora) {
        btnComprarAgora.addEventListener("click", () => {
            window.open(
                "https://wa.me/5511910032429?text=Olá! Quero comprar agora.",
                "_blank"
            );
        });
    }
});

// ===== MOSTRAR PREÇO AMPLIADO AO CLICAR EM "VER DETALHES" =====
document.addEventListener("DOMContentLoaded", function () {
    const btnDetalhes =
        document.querySelector(".btn-secondary") ||
        document.querySelector("#verDetalhes") ||
        document.querySelector(".ver-detalhes");

    const preco =
        document.querySelector(".preco") ||
        document.querySelector("#preco") ||
        document.querySelector(".product-price");

    if (btnDetalhes && preco) {
        btnDetalhes.addEventListener("click", () => {
            preco.classList.toggle("preco-ampliado");
        });
    }
});

// ===== SLIDER DE IMAGENS (SWIPE TOUCH) =====
document.addEventListener("DOMContentLoaded", function () {
    const slider =
        document.querySelector(".image-slider") ||
        document.querySelector("#imgSlider") ||
        document.querySelector(".manus-gallery");

    if (!slider) return;

    let startX = 0;
    let index = 0;
    const images = slider.querySelectorAll("img");

    slider.style.display = "flex";
    slider.style.overflow = "hidden";
    slider.style.transition = "transform 0.3s ease";

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        // Arrastar mais de 50px
        if (diff > 50 && index < images.length - 1) index++;
        if (diff < -50 && index > 0) index--;

        slider.style.transform = `translateX(${-index * 100}%)`;
    });
});

// ===== REMOVER MARGEM DO BOTÃO "COMPRAR COLEÇÃO COMPLETA" =====
document.addEventListener("DOMContentLoaded", function () {
    const botaoColecao = document.querySelector(".comprar-colecao-completa");

    if (botaoColecao) {
        botaoColecao.style.margin = "0";
    }
});
// ===== LINKS DO FOOTER → WHATSAPP =====
document.addEventListener("DOMContentLoaded", function () {
    const atendimentoLinks = document.querySelectorAll(".link-whatsapp");

    atendimentoLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            window.open("https://wa.me/5511910032429?text=Olá! Preciso de atendimento.", "_blank");
        });
    });
});
