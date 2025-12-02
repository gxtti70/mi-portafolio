export interface Translations {
	nav: {
		home: string;
		about: string;
		experience: string;
		projects: string;
		contact: string;
	};
	hero: {
		title: string;
		subtitle: string;
		btnProjects: string;
		btnContact: string;
		btnDownloadCV: string;
	};
	about: {
		title: string;
		description1: string;
		description2: string;
		description3: string;
		description4: string;
		skills: string;
	};
	stats: {
		title: string;
		certifications: string;
		technologies: string;
		experience: string;
		dedication: string;
	};
	experience: {
		title: string;
		role: string;
		task1: string;
		task2: string;
		task3: string;
		task4: string;
		task5: string;
		task6: string;
	};
	education: {
		title: string;
		degree1: string;
		institution1: string;
		description1: string;
		degree2: string;
		institution2: string;
		description2: string;
	};
	certifications: {
		title: string;
		cert1: string;
		cert2: string;
		cert3: string;
		cert4: string;
		cert5: string;
		cert6: string;
	};
	achievements: {
		title: string;
		ach1Title: string;
		ach1Desc: string;
		ach2Title: string;
		ach2Desc: string;
		ach3Title: string;
		ach3Desc: string;
		ach4Title: string;
		ach4Desc: string;
	};
	languages: {
		title: string;
		spanish: string;
		spanishLevel: string;
		english: string;
		englishLevel: string;
	};
	contact: {
		title: string;
		subtitle: string;
		email: string;
		whatsapp: string;
		github: string;
		linkedin: string;
		formName: string;
		formEmail: string;
		formMessage: string;
		formSubmit: string;
		formSuccess: string;
		formError: string;
	};
	footer: {
		text: string;
	};
}

export const translations: Record<string, Translations> = {
	es: {
		nav: {
			home: 'Inicio',
			about: 'Sobre mí',
			experience: 'Experiencia',
			projects: 'Proyectos',
			contact: 'Contacto',
		},
		hero: {
			title: 'Bienvenido a mi Portafolio',
			subtitle: 'Desarrollador Full Stack Junior especializado en crear soluciones tecnológicas innovadoras',
			btnProjects: 'Ver Proyectos',
			btnContact: 'Contactar',
			btnDownloadCV: 'Descargar CV',
		},
		about: {
			title: 'Sobre Mí',
			description1: 'Soy un <strong>Desarrollador Full Stack Junior</strong> apasionado por crear soluciones tecnológicas innovadoras y de alta calidad. Trabajé en <strong>TCS</strong> (TATA Consultancy Services), donde desarrollé y mantuve aplicaciones empresariales utilizando un stack tecnológico moderno y robusto.',
			description2: 'En el <strong>backend</strong>, trabajé con un monolito en <strong>Java con Spring Boot</strong>, implementando arquitecturas escalables y realizando migraciones de controladores a funciones serverless. En el <strong>frontend</strong>, desarrollé interfaces de usuario con <strong>Angular y TypeScript</strong>, creando experiencias interactivas y responsivas. La base de datos <strong>PostgreSQL</strong> fue fundamental para gestionar y optimizar el almacenamiento de datos.',
			description3: 'Mi experiencia con <strong>AWS</strong> incluye el trabajo con servicios como <strong>Cognito</strong> para autenticación y autorización, <strong>S3</strong> para almacenamiento de objetos, y <strong>Lambda</strong> para funciones serverless, lo que me permitió diseñar arquitecturas cloud escalables y eficientes.',
			description4: 'Además de mis responsabilidades técnicas, asumí un <strong>rol de liderazgo</strong> en la gestión de cambios, recibiendo e implementando modificaciones de manera eficiente y coordinada. También lideré la <strong>sincronización con el equipo de QA</strong> para asegurar que las pruebas se realizaran de forma oportuna y efectiva, garantizando la calidad del software entregado. Además, realicé la <strong>documentación técnica</strong> del proyecto, elaborando tanto el <strong>manual de usuario</strong> como el <strong>manual técnico</strong>, facilitando el mantenimiento y la comprensión del sistema para todos los stakeholders. Trabajé bajo la metodología <strong>SCRUM</strong>, participando activamente en sprints, daily standups, retrospectivas y planificaciones, lo que me permitió desarrollar habilidades de trabajo en equipo y gestión ágil de proyectos. Me caracterizo por mi constante aprendizaje y adaptación a nuevas tecnologías, especialmente en el campo de la Inteligencia Artificial.',
			skills: 'Habilidades',
		},
		stats: {
			title: 'Estadísticas',
			certifications: 'Certificaciones',
			technologies: 'Tecnologías',
			experience: 'Años de Experiencia',
			dedication: '% Dedicación',
		},
		experience: {
			title: 'Experiencia',
			role: 'Desarrollador Full Stack Junior',
			task1: 'Desarrollo y mantenimiento de aplicaciones empresariales con Java Spring Boot y Angular',
			task2: 'Implementación de servicios AWS (Cognito, S3, Lambda) y migración de controladores a funciones serverless',
			task3: 'Gestión de base de datos PostgreSQL y optimización de consultas',
			task4: 'Liderazgo en la gestión de cambios y sincronización con equipos de QA',
			task5: 'Elaboración de documentación técnica (manual de usuario y manual técnico)',
			task6: 'Trabajo bajo metodología SCRUM en sprints ágiles',
		},
		education: {
			title: 'Educación',
			degree1: 'Técnico Auxiliar en Sistemas',
			institution1: 'Politécnico de Antioquia',
			description1: 'Formación técnica en sistemas informáticos, soporte técnico y fundamentos de programación.',
			degree2: 'Desarrollo de Software y Análisis de Datos',
			institution2: 'CENSA',
			description2: 'Programa especializado en desarrollo de software moderno y análisis de datos para la toma de decisiones empresariales.',
		},
		certifications: {
			title: 'Certificaciones',
			cert1: 'Agile Software Development: Scrum for Developers',
			cert2: 'Desarrolla tus habilidades de productividad con IA generativa',
			cert3: 'Domina la IA con Gemini',
			cert4: 'Fundamentos profesionales del desarrollo de software',
			cert5: 'Desarrollo web: control de calidad automatizado',
			cert6: 'Node.js esencial',
		},
		achievements: {
			title: 'Logros',
			ach1Title: 'Liderazgo Técnico',
			ach1Desc: 'Lideré la gestión de cambios y sincronización con equipos de QA en proyectos empresariales.',
			ach2Title: 'Documentación Técnica',
			ach2Desc: 'Elaboré manuales de usuario y técnicos completos para facilitar el mantenimiento del sistema.',
			ach3Title: 'Metodología Ágil',
			ach3Desc: 'Trabajé exitosamente bajo metodología SCRUM, participando activamente en sprints y retrospectivas.',
			ach4Title: 'Migración a Serverless',
			ach4Desc: 'Migré exitosamente controladores a funciones serverless utilizando AWS Lambda.',
		},
		languages: {
			title: 'Idiomas',
			spanish: 'Español',
			spanishLevel: 'Nativo',
			english: 'Inglés',
			englishLevel: 'A1',
		},
		contact: {
			title: 'Contacto',
			subtitle: '¿Tienes un proyecto en mente?',
			email: 'Email',
			whatsapp: 'WhatsApp',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			formName: 'Nombre',
			formEmail: 'Email',
			formMessage: 'Mensaje',
			formSubmit: 'Enviar Mensaje',
			formSuccess: '¡Gracias! Se abrirá tu cliente de correo para enviar el mensaje.',
			formError: 'Por favor, completa todos los campos.',
		},
		footer: {
			text: '© 2025 Santiago Muñoz Sánchez. Todos los derechos reservados.',
		},
	},
	en: {
		nav: {
			home: 'Home',
			about: 'About Me',
			experience: 'Experience',
			projects: 'Projects',
			contact: 'Contact',
		},
		hero: {
			title: 'Welcome to my Portfolio',
			subtitle: 'Junior Full Stack Developer specialized in creating innovative technological solutions',
			btnProjects: 'View Projects',
			btnContact: 'Contact',
			btnDownloadCV: 'Download CV',
		},
		about: {
			title: 'About Me',
			description1: 'I am a <strong>Junior Full Stack Developer</strong> passionate about creating innovative and high-quality technological solutions. I worked at <strong>TCS</strong> (TATA Consultancy Services), where I developed and maintained enterprise applications using a modern and robust technology stack.',
			description2: 'In the <strong>backend</strong>, I worked with a monolith in <strong>Java with Spring Boot</strong>, implementing scalable architectures and migrating controllers to serverless functions. In the <strong>frontend</strong>, I developed user interfaces with <strong>Angular and TypeScript</strong>, creating interactive and responsive experiences. The <strong>PostgreSQL</strong> database was fundamental for managing and optimizing data storage.',
			description3: 'My experience with <strong>AWS</strong> includes working with services such as <strong>Cognito</strong> for authentication and authorization, <strong>S3</strong> for object storage, and <strong>Lambda</strong> for serverless functions, which allowed me to design scalable and efficient cloud architectures.',
			description4: 'In addition to my technical responsibilities, I assumed a <strong>leadership role</strong> in change management, receiving and implementing modifications efficiently and coordinated. I also led <strong>synchronization with the QA team</strong> to ensure tests were performed timely and effectively, guaranteeing the quality of the delivered software. Additionally, I created the <strong>technical documentation</strong> of the project, developing both the <strong>user manual</strong> and the <strong>technical manual</strong>, facilitating maintenance and understanding of the system for all stakeholders. I worked under the <strong>SCRUM</strong> methodology, actively participating in sprints, daily standups, retrospectives, and planning, which allowed me to develop teamwork skills and agile project management. I am characterized by my constant learning and adaptation to new technologies, especially in the field of Artificial Intelligence.',
			skills: 'Skills',
		},
		stats: {
			title: 'Statistics',
			certifications: 'Certifications',
			technologies: 'Technologies',
			experience: 'Years of Experience',
			dedication: '% Dedication',
		},
		experience: {
			title: 'Experience',
			role: 'Junior Full Stack Developer',
			task1: 'Development and maintenance of enterprise applications with Java Spring Boot and Angular',
			task2: 'Implementation of AWS services (Cognito, S3, Lambda) and migration of controllers to serverless functions',
			task3: 'PostgreSQL database management and query optimization',
			task4: 'Leadership in change management and synchronization with QA teams',
			task5: 'Creation of technical documentation (user manual and technical manual)',
			task6: 'Work under SCRUM methodology in agile sprints',
		},
		education: {
			title: 'Education',
			degree1: 'Systems Assistant Technician',
			institution1: 'Politécnico de Antioquia',
			description1: 'Technical training in computer systems, technical support, and programming fundamentals.',
			degree2: 'Software Development and Data Analysis',
			institution2: 'CENSA',
			description2: 'Specialized program in modern software development and data analysis for business decision-making.',
		},
		certifications: {
			title: 'Certifications',
			cert1: 'Agile Software Development: Scrum for Developers',
			cert2: 'Develop your productivity skills with generative AI',
			cert3: 'Master AI with Gemini',
			cert4: 'Professional fundamentals of software development',
			cert5: 'Web development: automated quality control',
			cert6: 'Node.js essential',
		},
		achievements: {
			title: 'Achievements',
			ach1Title: 'Technical Leadership',
			ach1Desc: 'I led change management and synchronization with QA teams in enterprise projects.',
			ach2Title: 'Technical Documentation',
			ach2Desc: 'I created complete user and technical manuals to facilitate system maintenance.',
			ach3Title: 'Agile Methodology',
			ach3Desc: 'I worked successfully under SCRUM methodology, actively participating in sprints and retrospectives.',
			ach4Title: 'Migration to Serverless',
			ach4Desc: 'I successfully migrated controllers to serverless functions using AWS Lambda.',
		},
		languages: {
			title: 'Languages',
			spanish: 'Spanish',
			spanishLevel: 'Native',
			english: 'English',
			englishLevel: 'A1',
		},
		contact: {
			title: 'Contact',
			subtitle: 'Do you have a project in mind?',
			email: 'Email',
			whatsapp: 'WhatsApp',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			formName: 'Name',
			formEmail: 'Email',
			formMessage: 'Message',
			formSubmit: 'Send Message',
			formSuccess: 'Thank you! Your email client will open to send the message.',
			formError: 'Please fill in all fields.',
		},
		footer: {
			text: '© 2025 Santiago Muñoz Sánchez. All rights reserved.',
		},
	},
	pt: {
		nav: {
			home: 'Início',
			about: 'Sobre Mim',
			experience: 'Experiência',
			projects: 'Projetos',
			contact: 'Contato',
		},
		hero: {
			title: 'Bem-vindo ao meu Portfólio',
			subtitle: 'Desenvolvedor Full Stack Júnior especializado em criar soluções tecnológicas inovadoras',
			btnProjects: 'Ver Projetos',
			btnContact: 'Contatar',
			btnDownloadCV: 'Baixar CV',
		},
		about: {
			title: 'Sobre Mim',
			description1: 'Sou um <strong>Desenvolvedor Full Stack Júnior</strong> apaixonado por criar soluções tecnológicas inovadoras e de alta qualidade. Trabalhei na <strong>TCS</strong> (TATA Consultancy Services), onde desenvolvi e mantive aplicações empresariais usando uma stack tecnológica moderna e robusta.',
			description2: 'No <strong>backend</strong>, trabalhei com um monolito em <strong>Java com Spring Boot</strong>, implementando arquiteturas escaláveis e realizando migrações de controladores para funções serverless. No <strong>frontend</strong>, desenvolvi interfaces de usuário com <strong>Angular e TypeScript</strong>, criando experiências interativas e responsivas. O banco de dados <strong>PostgreSQL</strong> foi fundamental para gerenciar e otimizar o armazenamento de dados.',
			description3: 'Minha experiência com <strong>AWS</strong> inclui trabalhar com serviços como <strong>Cognito</strong> para autenticação e autorização, <strong>S3</strong> para armazenamento de objetos, e <strong>Lambda</strong> para funções serverless, o que me permitiu projetar arquiteturas cloud escaláveis e eficientes.',
			description4: 'Além das minhas responsabilidades técnicas, assumi um <strong>papel de liderança</strong> na gestão de mudanças, recebendo e implementando modificações de forma eficiente e coordenada. Também liderei a <strong>sincronização com a equipe de QA</strong> para garantir que os testes fossem realizados de forma oportuna e eficaz, garantindo a qualidade do software entregue. Além disso, realizei a <strong>documentação técnica</strong> do projeto, elaborando tanto o <strong>manual do usuário</strong> quanto o <strong>manual técnico</strong>, facilitando a manutenção e a compreensão do sistema para todos os stakeholders. Trabalhei sob a metodologia <strong>SCRUM</strong>, participando ativamente em sprints, daily standups, retrospectivas e planejamentos, o que me permitiu desenvolver habilidades de trabalho em equipe e gestão ágil de projetos. Caracterizo-me pela minha constante aprendizagem e adaptação a novas tecnologias, especialmente no campo da Inteligência Artificial.',
			skills: 'Habilidades',
		},
		stats: {
			title: 'Estatísticas',
			certifications: 'Certificações',
			technologies: 'Tecnologias',
			experience: 'Anos de Experiência',
			dedication: '% Dedicação',
		},
		experience: {
			title: 'Experiência',
			role: 'Desenvolvedor Full Stack Júnior',
			task1: 'Desenvolvimento e manutenção de aplicações empresariais com Java Spring Boot e Angular',
			task2: 'Implementação de serviços AWS (Cognito, S3, Lambda) e migração de controladores para funções serverless',
			task3: 'Gestão de banco de dados PostgreSQL e otimização de consultas',
			task4: 'Liderança na gestão de mudanças e sincronização com equipes de QA',
			task5: 'Elaboração de documentação técnica (manual do usuário e manual técnico)',
			task6: 'Trabalho sob metodologia SCRUM em sprints ágeis',
		},
		education: {
			title: 'Educação',
			degree1: 'Técnico Auxiliar em Sistemas',
			institution1: 'Politécnico de Antioquia',
			description1: 'Formação técnica em sistemas de informática, suporte técnico e fundamentos de programação.',
			degree2: 'Desenvolvimento de Software e Análise de Dados',
			institution2: 'CENSA',
			description2: 'Programa especializado em desenvolvimento de software moderno e análise de dados para tomada de decisões empresariais.',
		},
		certifications: {
			title: 'Certificações',
			cert1: 'Desenvolvimento de Software Ágil: Scrum para Desenvolvedores',
			cert2: 'Desenvolva suas habilidades de produtividade com IA generativa',
			cert3: 'Domine a IA com Gemini',
			cert4: 'Fundamentos profissionais do desenvolvimento de software',
			cert5: 'Desenvolvimento web: controle de qualidade automatizado',
			cert6: 'Node.js essencial',
		},
		achievements: {
			title: 'Conquistas',
			ach1Title: 'Liderança Técnica',
			ach1Desc: 'Liderei a gestão de mudanças e sincronização com equipes de QA em projetos empresariais.',
			ach2Title: 'Documentação Técnica',
			ach2Desc: 'Elaborei manuais de usuário e técnicos completos para facilitar a manutenção do sistema.',
			ach3Title: 'Metodologia Ágil',
			ach3Desc: 'Trabalhei com sucesso sob metodologia SCRUM, participando ativamente em sprints e retrospectivas.',
			ach4Title: 'Migração para Serverless',
			ach4Desc: 'Migrei com sucesso controladores para funções serverless usando AWS Lambda.',
		},
		languages: {
			title: 'Idiomas',
			spanish: 'Espanhol',
			spanishLevel: 'Nativo',
			english: 'Inglês',
			englishLevel: 'A1',
		},
		contact: {
			title: 'Contato',
			subtitle: 'Tem um projeto em mente?',
			email: 'Email',
			whatsapp: 'WhatsApp',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			formName: 'Nome',
			formEmail: 'Email',
			formMessage: 'Mensagem',
			formSubmit: 'Enviar Mensagem',
			formSuccess: 'Obrigado! Seu cliente de email será aberto para enviar a mensagem.',
			formError: 'Por favor, preencha todos os campos.',
		},
		footer: {
			text: '© 2025 Santiago Muñoz Sánchez. Todos os direitos reservados.',
		},
	},
	de: {
		nav: {
			home: 'Startseite',
			about: 'Über Mich',
			experience: 'Erfahrung',
			projects: 'Projekte',
			contact: 'Kontakt',
		},
		hero: {
			title: 'Willkommen in meinem Portfolio',
			subtitle: 'Junior Full Stack Entwickler, spezialisiert auf innovative technologische Lösungen',
			btnProjects: 'Projekte Ansehen',
			btnContact: 'Kontaktieren',
			btnDownloadCV: 'CV Herunterladen',
		},
		about: {
			title: 'Über Mich',
			description1: 'Ich bin ein <strong>Junior Full Stack Entwickler</strong>, der leidenschaftlich innovative und hochwertige technologische Lösungen entwickelt. Ich arbeitete bei <strong>TCS</strong> (TATA Consultancy Services), wo ich Unternehmensanwendungen mit einem modernen und robusten Technologie-Stack entwickelte und wartete.',
			description2: 'Im <strong>Backend</strong> arbeitete ich mit einem Monolithen in <strong>Java mit Spring Boot</strong>, implementierte skalierbare Architekturen und migrierte Controller zu serverlosen Funktionen. Im <strong>Frontend</strong> entwickelte ich Benutzeroberflächen mit <strong>Angular und TypeScript</strong> und schuf interaktive und responsive Erfahrungen. Die <strong>PostgreSQL</strong>-Datenbank war grundlegend für die Verwaltung und Optimierung der Datenspeicherung.',
			description3: 'Meine Erfahrung mit <strong>AWS</strong> umfasst die Arbeit mit Diensten wie <strong>Cognito</strong> für Authentifizierung und Autorisierung, <strong>S3</strong> für Objektspeicherung und <strong>Lambda</strong> für serverlose Funktionen, was mir ermöglichte, skalierbare und effiziente Cloud-Architekturen zu entwerfen.',
			description4: 'Zusätzlich zu meinen technischen Verantwortlichkeiten übernahm ich eine <strong>Führungsrolle</strong> im Änderungsmanagement, empfing und implementierte Änderungen effizient und koordiniert. Ich leitete auch die <strong>Synchronisation mit dem QA-Team</strong>, um sicherzustellen, dass Tests rechtzeitig und effektiv durchgeführt wurden und die Qualität der gelieferten Software gewährleistet wurde. Darüber hinaus erstellte ich die <strong>technische Dokumentation</strong> des Projekts und entwickelte sowohl das <strong>Benutzerhandbuch</strong> als auch das <strong>technische Handbuch</strong>, was die Wartung und das Verständnis des Systems für alle Stakeholder erleichterte. Ich arbeitete unter der <strong>SCRUM</strong>-Methodik und nahm aktiv an Sprints, Daily Standups, Retrospektiven und Planungen teil, was mir ermöglichte, Teamwork-Fähigkeiten und agiles Projektmanagement zu entwickeln. Ich zeichne mich durch kontinuierliches Lernen und Anpassung an neue Technologien aus, insbesondere im Bereich der Künstlichen Intelligenz.',
			skills: 'Fähigkeiten',
		},
		stats: {
			title: 'Statistiken',
			certifications: 'Zertifizierungen',
			technologies: 'Technologien',
			experience: 'Jahre Erfahrung',
			dedication: '% Engagement',
		},
		experience: {
			title: 'Erfahrung',
			role: 'Junior Full Stack Entwickler',
			task1: 'Entwicklung und Wartung von Unternehmensanwendungen mit Java Spring Boot und Angular',
			task2: 'Implementierung von AWS-Diensten (Cognito, S3, Lambda) und Migration von Controllern zu serverlosen Funktionen',
			task3: 'PostgreSQL-Datenbankverwaltung und Abfrageoptimierung',
			task4: 'Führung im Änderungsmanagement und Synchronisation mit QA-Teams',
			task5: 'Erstellung technischer Dokumentation (Benutzerhandbuch und technisches Handbuch)',
			task6: 'Arbeit unter SCRUM-Methodik in agilen Sprints',
		},
		education: {
			title: 'Bildung',
			degree1: 'Systemassistent Techniker',
			institution1: 'Politécnico de Antioquia',
			description1: 'Technische Ausbildung in Computersystemen, technischem Support und Programmiergrundlagen.',
			degree2: 'Softwareentwicklung und Datenanalyse',
			institution2: 'CENSA',
			description2: 'Spezialisiertes Programm für moderne Softwareentwicklung und Datenanalyse für geschäftliche Entscheidungsfindung.',
		},
		certifications: {
			title: 'Zertifizierungen',
			cert1: 'Agile Softwareentwicklung: Scrum für Entwickler',
			cert2: 'Entwickeln Sie Ihre Produktivitätsfähigkeiten mit generativer KI',
			cert3: 'Meistern Sie KI mit Gemini',
			cert4: 'Professionelle Grundlagen der Softwareentwicklung',
			cert5: 'Webentwicklung: automatisierte Qualitätskontrolle',
			cert6: 'Node.js essentiell',
		},
		achievements: {
			title: 'Erfolge',
			ach1Title: 'Technische Führung',
			ach1Desc: 'Ich leitete Änderungsmanagement und Synchronisation mit QA-Teams in Unternehmensprojekten.',
			ach2Title: 'Technische Dokumentation',
			ach2Desc: 'Ich erstellte vollständige Benutzer- und technische Handbücher zur Erleichterung der Systemwartung.',
			ach3Title: 'Agile Methodik',
			ach3Desc: 'Ich arbeitete erfolgreich unter SCRUM-Methodik und nahm aktiv an Sprints und Retrospektiven teil.',
			ach4Title: 'Migration zu Serverless',
			ach4Desc: 'Ich migrierte erfolgreich Controller zu serverlosen Funktionen mit AWS Lambda.',
		},
		languages: {
			title: 'Sprachen',
			spanish: 'Spanisch',
			spanishLevel: 'Muttersprache',
			english: 'Englisch',
			englishLevel: 'A1',
		},
		contact: {
			title: 'Kontakt',
			subtitle: 'Haben Sie ein Projekt im Kopf?',
			email: 'E-Mail',
			whatsapp: 'WhatsApp',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			formName: 'Name',
			formEmail: 'E-Mail',
			formMessage: 'Nachricht',
			formSubmit: 'Nachricht Senden',
			formSuccess: 'Vielen Dank! Ihr E-Mail-Client wird geöffnet, um die Nachricht zu senden.',
			formError: 'Bitte füllen Sie alle Felder aus.',
		},
		footer: {
			text: '© 2025 Santiago Muñoz Sánchez. Alle Rechte vorbehalten.',
		},
	},
	fr: {
		nav: {
			home: 'Accueil',
			about: 'À Propos',
			experience: 'Expérience',
			projects: 'Projets',
			contact: 'Contact',
		},
		hero: {
			title: 'Bienvenue dans mon Portfolio',
			subtitle: 'Développeur Full Stack Junior spécialisé dans la création de solutions technologiques innovantes',
			btnProjects: 'Voir les Projets',
			btnContact: 'Contacter',
			btnDownloadCV: 'Télécharger le CV',
		},
		about: {
			title: 'À Propos de Moi',
			description1: 'Je suis un <strong>Développeur Full Stack Junior</strong> passionné par la création de solutions technologiques innovantes et de haute qualité. J\'ai travaillé chez <strong>TCS</strong> (TATA Consultancy Services), où j\'ai développé et maintenu des applications d\'entreprise en utilisant une stack technologique moderne et robuste.',
			description2: 'Dans le <strong>backend</strong>, j\'ai travaillé avec un monolithe en <strong>Java avec Spring Boot</strong>, implémentant des architectures scalables et réalisant des migrations de contrôleurs vers des fonctions serverless. Dans le <strong>frontend</strong>, j\'ai développé des interfaces utilisateur avec <strong>Angular et TypeScript</strong>, créant des expériences interactives et responsives. La base de données <strong>PostgreSQL</strong> a été fondamentale pour gérer et optimiser le stockage des données.',
			description3: 'Mon expérience avec <strong>AWS</strong> comprend le travail avec des services tels que <strong>Cognito</strong> pour l\'authentification et l\'autorisation, <strong>S3</strong> pour le stockage d\'objets, et <strong>Lambda</strong> pour les fonctions serverless, ce qui m\'a permis de concevoir des architectures cloud scalables et efficaces.',
			description4: 'En plus de mes responsabilités techniques, j\'ai assumé un <strong>rôle de leadership</strong> dans la gestion des changements, recevant et implémentant des modifications de manière efficace et coordonnée. J\'ai également dirigé la <strong>synchronisation avec l\'équipe QA</strong> pour garantir que les tests soient effectués de manière opportune et efficace, garantissant la qualité du logiciel livré. De plus, j\'ai réalisé la <strong>documentation technique</strong> du projet, élaborant à la fois le <strong>manuel utilisateur</strong> et le <strong>manuel technique</strong>, facilitant la maintenance et la compréhension du système pour toutes les parties prenantes. J\'ai travaillé sous la méthodologie <strong>SCRUM</strong>, participant activement aux sprints, daily standups, rétrospectives et planifications, ce qui m\'a permis de développer des compétences en travail d\'équipe et en gestion de projet agile. Je me caractérise par mon apprentissage constant et mon adaptation aux nouvelles technologies, en particulier dans le domaine de l\'Intelligence Artificielle.',
			skills: 'Compétences',
		},
		stats: {
			title: 'Statistiques',
			certifications: 'Certifications',
			technologies: 'Technologies',
			experience: 'Années d\'Expérience',
			dedication: '% Dédication',
		},
		experience: {
			title: 'Expérience',
			role: 'Développeur Full Stack Junior',
			task1: 'Développement et maintenance d\'applications d\'entreprise avec Java Spring Boot et Angular',
			task2: 'Implémentation de services AWS (Cognito, S3, Lambda) et migration de contrôleurs vers des fonctions serverless',
			task3: 'Gestion de base de données PostgreSQL et optimisation des requêtes',
			task4: 'Leadership dans la gestion des changements et synchronisation avec les équipes QA',
			task5: 'Création de documentation technique (manuel utilisateur et manuel technique)',
			task6: 'Travail sous méthodologie SCRUM dans des sprints agiles',
		},
		education: {
			title: 'Éducation',
			degree1: 'Technicien Assistant en Systèmes',
			institution1: 'Politécnico de Antioquia',
			description1: 'Formation technique en systèmes informatiques, support technique et fondamentaux de programmation.',
			degree2: 'Développement de Logiciels et Analyse de Données',
			institution2: 'CENSA',
			description2: 'Programme spécialisé en développement de logiciels modernes et analyse de données pour la prise de décisions d\'entreprise.',
		},
		certifications: {
			title: 'Certifications',
			cert1: 'Développement Logiciel Agile: Scrum pour Développeurs',
			cert2: 'Développez vos compétences de productivité avec l\'IA générative',
			cert3: 'Maîtrisez l\'IA avec Gemini',
			cert4: 'Fondamentaux professionnels du développement logiciel',
			cert5: 'Développement web: contrôle de qualité automatisé',
			cert6: 'Node.js essentiel',
		},
		achievements: {
			title: 'Réalisations',
			ach1Title: 'Leadership Technique',
			ach1Desc: 'J\'ai dirigé la gestion des changements et la synchronisation avec les équipes QA dans des projets d\'entreprise.',
			ach2Title: 'Documentation Technique',
			ach2Desc: 'J\'ai élaboré des manuels utilisateur et techniques complets pour faciliter la maintenance du système.',
			ach3Title: 'Méthodologie Agile',
			ach3Desc: 'J\'ai travaillé avec succès sous méthodologie SCRUM, participant activement aux sprints et rétrospectives.',
			ach4Title: 'Migration vers Serverless',
			ach4Desc: 'J\'ai migré avec succès des contrôleurs vers des fonctions serverless en utilisant AWS Lambda.',
		},
		languages: {
			title: 'Langues',
			spanish: 'Espagnol',
			spanishLevel: 'Natif',
			english: 'Anglais',
			englishLevel: 'A1',
		},
		contact: {
			title: 'Contact',
			subtitle: 'Avez-vous un projet en tête?',
			email: 'Email',
			whatsapp: 'WhatsApp',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			formName: 'Nom',
			formEmail: 'Email',
			formMessage: 'Message',
			formSubmit: 'Envoyer le Message',
			formSuccess: 'Merci! Votre client de messagerie s\'ouvrira pour envoyer le message.',
			formError: 'Veuillez remplir tous les champs.',
		},
		footer: {
			text: '© 2025 Santiago Muñoz Sánchez. Tous droits réservés.',
		},
	},
	it: {
		nav: {
			home: 'Home',
			about: 'Chi Sono',
			experience: 'Esperienza',
			projects: 'Progetti',
			contact: 'Contatto',
		},
		hero: {
			title: 'Benvenuto nel mio Portfolio',
			subtitle: 'Sviluppatore Full Stack Junior specializzato nella creazione di soluzioni tecnologiche innovative',
			btnProjects: 'Vedi Progetti',
			btnContact: 'Contatta',
			btnDownloadCV: 'Scarica CV',
		},
		about: {
			title: 'Chi Sono',
			description1: 'Sono uno <strong>Sviluppatore Full Stack Junior</strong> appassionato di creare soluzioni tecnologiche innovative e di alta qualità. Ho lavorato presso <strong>TCS</strong> (TATA Consultancy Services), dove ho sviluppato e mantenuto applicazioni aziendali utilizzando uno stack tecnologico moderno e robusto.',
			description2: 'Nel <strong>backend</strong>, ho lavorato con un monolito in <strong>Java con Spring Boot</strong>, implementando architetture scalabili e realizzando migrazioni di controller a funzioni serverless. Nel <strong>frontend</strong>, ho sviluppato interfacce utente con <strong>Angular e TypeScript</strong>, creando esperienze interattive e responsive. Il database <strong>PostgreSQL</strong> è stato fondamentale per gestire e ottimizzare lo storage dei dati.',
			description3: 'La mia esperienza con <strong>AWS</strong> include il lavoro con servizi come <strong>Cognito</strong> per autenticazione e autorizzazione, <strong>S3</strong> per lo storage di oggetti, e <strong>Lambda</strong> per funzioni serverless, il che mi ha permesso di progettare architetture cloud scalabili ed efficienti.',
			description4: 'Oltre alle mie responsabilità tecniche, ho assunto un <strong>ruolo di leadership</strong> nella gestione dei cambiamenti, ricevendo e implementando modifiche in modo efficiente e coordinato. Ho anche guidato la <strong>sincronizzazione con il team QA</strong> per assicurare che i test fossero eseguiti in modo tempestivo ed efficace, garantendo la qualità del software consegnato. Inoltre, ho realizzato la <strong>documentazione tecnica</strong> del progetto, elaborando sia il <strong>manuale utente</strong> che il <strong>manuale tecnico</strong>, facilitando la manutenzione e la comprensione del sistema per tutti gli stakeholder. Ho lavorato sotto la metodologia <strong>SCRUM</strong>, partecipando attivamente a sprint, daily standup, retrospettive e pianificazioni, il che mi ha permesso di sviluppare abilità di lavoro di squadra e gestione agile dei progetti. Mi caratterizzo per il mio costante apprendimento e adattamento a nuove tecnologie, specialmente nel campo dell\'Intelligenza Artificiale.',
			skills: 'Competenze',
		},
		stats: {
			title: 'Statistiche',
			certifications: 'Certificazioni',
			technologies: 'Tecnologie',
			experience: 'Anni di Esperienza',
			dedication: '% Dedizione',
		},
		experience: {
			title: 'Esperienza',
			role: 'Sviluppatore Full Stack Junior',
			task1: 'Sviluppo e manutenzione di applicazioni aziendali con Java Spring Boot e Angular',
			task2: 'Implementazione di servizi AWS (Cognito, S3, Lambda) e migrazione di controller a funzioni serverless',
			task3: 'Gestione del database PostgreSQL e ottimizzazione delle query',
			task4: 'Leadership nella gestione dei cambiamenti e sincronizzazione con i team QA',
			task5: 'Elaborazione di documentazione tecnica (manuale utente e manuale tecnico)',
			task6: 'Lavoro sotto metodologia SCRUM in sprint agili',
		},
		education: {
			title: 'Educazione',
			degree1: 'Tecnico Ausiliario in Sistemi',
			institution1: 'Politécnico de Antioquia',
			description1: 'Formazione tecnica in sistemi informatici, supporto tecnico e fondamenta della programmazione.',
			degree2: 'Sviluppo Software e Analisi Dati',
			institution2: 'CENSA',
			description2: 'Programma specializzato in sviluppo software moderno e analisi dati per il processo decisionale aziendale.',
		},
		certifications: {
			title: 'Certificazioni',
			cert1: 'Sviluppo Software Agile: Scrum per Sviluppatori',
			cert2: 'Sviluppa le tue abilità di produttività con IA generativa',
			cert3: 'Domina l\'IA con Gemini',
			cert4: 'Fondamenta professionali dello sviluppo software',
			cert5: 'Sviluppo web: controllo qualità automatizzato',
			cert6: 'Node.js essenziale',
		},
		achievements: {
			title: 'Risultati',
			ach1Title: 'Leadership Tecnica',
			ach1Desc: 'Ho guidato la gestione dei cambiamenti e la sincronizzazione con i team QA in progetti aziendali.',
			ach2Title: 'Documentazione Tecnica',
			ach2Desc: 'Ho elaborato manuali utente e tecnici completi per facilitare la manutenzione del sistema.',
			ach3Title: 'Metodologia Agile',
			ach3Desc: 'Ho lavorato con successo sotto metodologia SCRUM, partecipando attivamente a sprint e retrospettive.',
			ach4Title: 'Migrazione a Serverless',
			ach4Desc: 'Ho migrato con successo controller a funzioni serverless utilizzando AWS Lambda.',
		},
		languages: {
			title: 'Lingue',
			spanish: 'Spagnolo',
			spanishLevel: 'Nativo',
			english: 'Inglese',
			englishLevel: 'A1',
		},
		contact: {
			title: 'Contatto',
			subtitle: 'Hai un progetto in mente?',
			email: 'Email',
			whatsapp: 'WhatsApp',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			formName: 'Nome',
			formEmail: 'Email',
			formMessage: 'Messaggio',
			formSubmit: 'Invia Messaggio',
			formSuccess: 'Grazie! Il tuo client email si aprirà per inviare il messaggio.',
			formError: 'Si prega di compilare tutti i campi.',
		},
		footer: {
			text: '© 2025 Santiago Muñoz Sánchez. Tutti i diritti riservati.',
		},
	},
};

