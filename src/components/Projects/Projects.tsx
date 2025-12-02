import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
	return (
		<section className="projects">
			<div className="projects-container">
				<h2 className="section-title">Mis Proyectos</h2>
				<div className="projects-grid">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}

