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
];

