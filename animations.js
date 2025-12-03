// Scroll animations and parallax effects
(function() {
	'use strict';

	// Agregar clase js-enabled al html para activar animaciones
	document.documentElement.classList.add('js-enabled');

	function initScrollAnimations() {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
				}
			});
		}, observerOptions);

		// Observar elementos individuales
		document.querySelectorAll('.fade-in, .slide-in-up, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
			observer.observe(el);
		});

		// Observar contenedores stagger-children
		document.querySelectorAll('.stagger-children').forEach(el => {
			observer.observe(el);
		});
	}

	function initParallax() {
		const parallaxElements = document.querySelectorAll('[data-parallax]');
		
		const handleScroll = () => {
			const scrolled = window.pageYOffset;
			
			parallaxElements.forEach((element) => {
				const speed = parseFloat(element.dataset.parallax || '0.5');
				const yPos = -(scrolled * speed);
				element.style.transform = `translateY(${yPos}px)`;
			});
		};

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

	function initSmoothTransitions() {
		const interactiveElements = document.querySelectorAll('a, button, .btn, .tech-logo, .project-card');
		
		interactiveElements.forEach(el => {
			el.addEventListener('mouseenter', function() {
				this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
			});
		});
	}

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
})();

