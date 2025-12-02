// Scroll animations and parallax effects
export function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-in');
				// Opcional: dejar de observar después de animar
				// observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observar todos los elementos con clase 'fade-in' o 'slide-in'
	document.querySelectorAll('.fade-in, .slide-in-up, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
		observer.observe(el);
	});
}

export function initParallax() {
	const parallaxElements = document.querySelectorAll('[data-parallax]');
	
	const handleScroll = () => {
		const scrolled = window.pageYOffset;
		
		parallaxElements.forEach((element: Element) => {
			const speed = parseFloat((element as HTMLElement).dataset.parallax || '0.5');
			const yPos = -(scrolled * speed);
			(element as HTMLElement).style.transform = `translateY(${yPos}px)`;
		});
	};

	// Throttle para mejor rendimiento
	let ticking = false;
	window.addEventListener('scroll', () => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				handleScroll();
				ticking = false;
			});
			ticking = true;
		}
	}, { passive: true });
}

export function initSmoothTransitions() {
	// Agregar transiciones suaves a elementos interactivos
	const interactiveElements = document.querySelectorAll('a, button, .btn, .tech-logo, .project-card');
	
	interactiveElements.forEach(el => {
		el.addEventListener('mouseenter', function() {
			this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
		});
	});
}

// Inicializar cuando el DOM esté listo
if (typeof window !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => {
			initScrollAnimations();
			initParallax();
			initSmoothTransitions();
		});
	} else {
		initScrollAnimations();
		initParallax();
		initSmoothTransitions();
	}
}

