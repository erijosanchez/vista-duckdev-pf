// ========================================
// DuckDev Studio - Main JavaScript
// ========================================

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ========================================
// Navbar Background on Scroll
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// Templates Data & Rendering
// ========================================
const templates = [
    {
        id: 1,
        name: 'E-Commerce Fashion',
        category: 'ecommerce',
        price: 4500,
        badge: 'POPULAR',
        badgeColor: 'cyan',
        description: 'Tienda online completa con carrito, pasarela de pagos, filtros y panel de administración.',
        technologies: ['Laravel', 'Tailwind', 'MySQL'],
        demoUrl: '#',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>`,
        gradientFrom: 'cyan-500/20',
        gradientTo: 'blue-500/20',
        btnColor: 'cyan'
    },
    {
        id: 2,
        name: 'Restaurant Modern',
        category: 'restaurant',
        price: 3500,
        badge: null,
        description: 'Menú digital, reservas online, pedidos por WhatsApp y galería de fotos interactiva.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        demoUrl: '#',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>`,
        gradientFrom: 'orange-500/20',
        gradientTo: 'red-500/20',
        btnColor: 'orange'
    },
    {
        id: 3,
        name: 'Clinic Pro',
        category: 'medical',
        price: 5500,
        badge: 'NUEVO',
        badgeColor: 'emerald',
        description: 'Portal para clínicas con sistema de citas, historial médico y teleconsultas.',
        technologies: ['Laravel', 'Vue.js', 'API REST'],
        demoUrl: '#',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>`,
        gradientFrom: 'emerald-500/20',
        gradientTo: 'teal-500/20',
        btnColor: 'emerald'
    },
    {
        id: 4,
        name: 'SaaS Dashboard',
        category: 'saas',
        price: 6500,
        badge: null,
        description: 'Panel administrativo completo con gráficos, métricas, gestión de usuarios y reportes.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        demoUrl: '#',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`,
        gradientFrom: 'purple-500/20',
        gradientTo: 'pink-500/20',
        btnColor: 'purple'
    },
    {
        id: 5,
        name: 'Landing Agency',
        category: 'landing',
        price: 2500,
        badge: null,
        description: 'Landing page optimizada para conversión con formularios, testimonios y animaciones.',
        technologies: ['Next.js', 'Tailwind', 'Framer'],
        demoUrl: '#',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>`,
        gradientFrom: 'blue-500/20',
        gradientTo: 'indigo-500/20',
        btnColor: 'blue'
    },
    {
        id: 6,
        name: 'Real Estate Pro',
        category: 'realestate',
        price: 4000,
        badge: null,
        description: 'Portal inmobiliario con búsqueda avanzada, tours virtuales y gestión de propiedades.',
        technologies: ['Laravel', 'Livewire', 'Maps API'],
        demoUrl: '#',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>`,
        gradientFrom: 'yellow-500/20',
        gradientTo: 'orange-500/20',
        btnColor: 'yellow'
    }
];

// Render templates
function renderTemplates() {
    const templatesGrid = document.getElementById('templates-grid');
    if (!templatesGrid) return;

    templatesGrid.innerHTML = templates.map((template, index) => `
        <div class="template-card card-hover" data-aos="fade-up" data-aos-delay="${(index % 3) * 100 + 100}">
            <div class="template-preview bg-gradient-to-br from-${template.gradientFrom} to-${template.gradientTo}">
                <svg class="w-32 h-32 text-${template.btnColor}-400/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${template.icon}
                </svg>
                ${template.badge ? `
                    <div class="template-badge bg-${template.badgeColor}-500">${template.badge}</div>
                ` : ''}
            </div>
            <div class="template-content">
                <div class="template-header">
                    <h3 class="template-title">${template.name}</h3>
                    <span class="template-price">S/. ${template.price.toLocaleString()}</span>
                </div>
                <p class="template-description">${template.description}</p>
                <div class="template-tags">
                    ${template.technologies.map(tech => `
                        <span class="template-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="template-actions">
                    <a href="${template.demoUrl}" class="btn-primary flex-1" style="background: linear-gradient(135deg, var(--tw-gradient-stops));">
                        Ver Demo
                    </a>
                    <button class="px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Load templates on page load
renderTemplates();

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Get submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Change button state
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        // Simulate sending (replace with actual backend integration)
        setTimeout(() => {
            // Show success message
            alert('¡Gracias por contactarnos! Te responderemos pronto.');

            // Reset form
            contactForm.reset();

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Redirect to WhatsApp with message
            const whatsappMsg = `Hola DuckDev Studio, mi nombre es ${data.name}. ${data.message}`;
            const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(whatsappMsg)}`;
            window.open(whatsappUrl, '_blank');
        }, 1500);
    });
}

// ========================================
// Parallax Effect for Background Elements
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-blob');

    parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.05;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// Counter Animation for Stats
// ========================================
const animateCounter = (element, target, suffix = '') => {
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
};

// Intersection Observer for triggering animations
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');

            const text = entry.target.textContent;

            if (text.includes('+')) {
                const number = parseInt(text.replace('+', ''));
                animateCounter(entry.target, number, '+');
            } else if (text.includes('%')) {
                const number = parseInt(text.replace('%', ''));
                animateCounter(entry.target, number, '%');
            } else if (text.includes('días')) {
                const number = parseInt(text.replace(' días', ''));
                animateCounter(entry.target, number, ' días');
            }
        }
    });
}, observerOptions);

// Observe all stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// Add Active State to Navigation Links
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-cyan-400');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-cyan-400');
        }
    });
});

// ========================================
// Lazy Loading Images (if you add images later)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Console Message (Easter Egg)
// ========================================
console.log('%c🦆 DuckDev Studio', 'font-size: 24px; font-weight: bold; color: #06B6D4;');
console.log('%c¿Buscando desarrolladores? Contáctanos en contacto@duckdevstudio.com', 'font-size: 14px; color: #94a3b8;');

// ========================================
// Performance Monitoring (Optional)
// ========================================
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Página cargada en ${pageLoadTime}ms`);
    }
});