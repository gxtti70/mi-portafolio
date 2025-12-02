import type { Project } from '../../data/projects';

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="project-card">
			<div className="project-image">
				{project.image && (
					<img src={project.image} alt={project.title} />
				)}
			</div>
			<div className="project-content">
				<h3 className="project-title">{project.title}</h3>
				<p className="project-description">{project.description}</p>
				<div className="project-tech">
					{project.technologies.map((tech, index) => (
						<span key={index} className="tech-tag">
							{tech}
						</span>
					))}
				</div>
				<div className="project-links">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							GitHub
						</a>
					)}
					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

