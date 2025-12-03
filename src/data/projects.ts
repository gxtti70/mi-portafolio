export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	github: string | null;
	demo: string | null;
	image: string | null;
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Calculadora de Resultados FPC',
		description: 'Aplicación web para calcular y simular resultados del Fútbol Profesional Colombiano (FPC). Permite simular torneos o usar resultados reales, visualizar goleadores y máximos asistentes, además de gráficas de rendimiento de cada equipo. Incluye control de versiones con GitHub y se ejecuta en un servidor npm.',
		technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub', 'npm'],
		github: 'https://github.com',
		demo: null,
		image: null,
	},
	{
		id: 2,
		title: 'Gestor de Tareas PWA con Modo Offline',
		description: 'Aplicación de tareas con soporte offline-first, sincronización cuando vuelve la conexión, notificaciones y atajos. Ideal para móviles.',
		technologies: ['TypeScript', 'Astro', 'Service Worker', 'IndexedDB'],
		github: null,
		demo: null,
		image: null,
	},
	{
		id: 3,
		title: 'Dashboard de Criptomonedas y Finanzas',
		description: 'Panel con precios en tiempo real, gráficos históricos y alertas personalizadas consumiendo APIs públicas.',
		technologies: ['TypeScript', 'Astro', 'Chart.js', 'REST API'],
		github: null,
		demo: null,
		image: null,
	},
	{
		id: 4,
		title: 'Kanban tipo Trello con Drag & Drop',
		description: 'Gestión de proyectos con columnas y tarjetas arrastrables, etiquetas y persistencia local/remota.',
		technologies: ['Angular', 'TypeScript', 'Drag and Drop API', 'Firebase'],
		github: null,
		demo: null,
		image: null,
	},
	{
		id: 5,
		title: 'E-commerce Headless con Stripe',
		description: 'Catálogo, carrito persistente, checkout con Stripe y órdenes. Arquitectura headless con frontend en Astro.',
		technologies: ['Astro', 'TypeScript', 'Stripe', 'Serverless'],
		github: null,
		demo: null,
		image: null,
	},
	{
		id: 6,
		title: 'Chat en Tiempo Real',
		description: 'Sala de chat con autenticación y mensajes en tiempo real. Modo claro/oscuro y soporte móvil.',
		technologies: ['Java', 'Spring Boot', 'WebSocket', 'Astro'],
		github: null,
		demo: null,
		image: null,
	},
	{
		id: 7,
		title: 'Acortador de URLs Serverless',
		description: 'Crear y gestionar enlaces cortos con métricas de clics usando funciones serverless.',
		technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'TypeScript'],
		github: null,
		demo: null,
		image: null,
	},
	{
		id: 8,
		title: 'Blog Multilenguaje con CMS en Markdown',
		description: 'Blog estático con colección de contenidos, i18n y generación automática de sitemap/feeds.',
		technologies: ['Astro', 'TypeScript', 'Content Collections', 'i18n'],
		github: null,
		demo: null,
		image: null,
	},
	{
		id: 9,
		title: 'App del Clima con Mapas',
		description: 'Consulta de clima por ubicación, pronóstico extendido y mapa interactivo para buscar ciudades.',
		technologies: ['TypeScript', 'Astro', 'Leaflet', 'OpenWeather API'],
		github: null,
		demo: null,
		image: null,
	},
	{
		id: 10,
		title: 'Generador de CV a PDF',
		description: 'Editor de CV con plantillas y exportación a PDF. Soporte para múltiples idiomas y temas.',
		technologies: ['TypeScript', 'Astro', 'HTML-to-PDF', 'CSS'],
		github: null,
		demo: null,
		image: null,
	},
];

