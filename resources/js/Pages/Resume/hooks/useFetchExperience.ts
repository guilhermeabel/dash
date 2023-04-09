import { TechSkill } from "../types/TechSkill";

export const useFetchExperience = () => {
	return [
		{
			title: "Junior Developer",
			date: "FEB/22 - present",
			location: "Tiny ERP",
			description: "At Tiny, our team maintains and improves an enterprise resource planning service. We are more than twenty developers working together to the goal of making our product better.",
			highlights: [
				"Team-oriented code development",
				"PHP code review, refactoring and debugging",
				"React pages and components, as well as JQuery",
				"Tools like GitHub, ClickUp, Kibana and Figma",
				"UI components development and improvement",
				"Integrating RESTful APIs, internal APIs",
				"Daily, Scrum, Agile, Sprints",
				"Unit testing, TDD, CI/CD",
			],
			languages: [
				TechSkill.React,
				TechSkill.PHP,
				TechSkill.TypeScript,
				TechSkill.MySQL,
				TechSkill.JavaScript,
				TechSkill.CSS,
				TechSkill.SASS,
			],
		},

		{
			title: "Software Developer",
			date: "FEB/21 - JAN/22",
			location: "Conexão G Tecnologia",
			description: "I started working in this agency as a developer, delivering solutions and participating in meetings with our clients. We then moved to working together as partners in some of our projects.",
			highlights: [
				"Web pages design, creation and publication",
				"Loading optimization, SEO analysis and improvement",
				"Landing pages, E-commerces",
				"Wordpress, Laravel and Sass",
				"More than 10 completed projects",
			],
			languages: [
				TechSkill.JavaScript,
				TechSkill.WordPress,
				TechSkill.Jquery,
				TechSkill.SASS,
				TechSkill.PHP,
			],
		},

		{
			title: "University Intern",
			date: "APR/19 - DEC/19",
			location: "Federal University of Santa Maria",
			description: "Rhythmic Pattern Sheet Music Translator for Percussion Instruments: The goal of this project was to elaborate functionalities for a Java program used for the translation of musical sheets into a simpler, more readable version, which did not compromise the musical content - no musical aspect was lost during the simplification. This was especially useful when teaching music for people with visual impairment, and so we worked together with volunteers to improve the quality of the software, making UI changes and taking accessibility to a new level.",
			highlights: [
				"Java, JavaFX, Maven, Git",
				"Requirements analysis, project management",
				"Acessibility, UI/UX, usability",
			],
			languages: [
				TechSkill.Java,
				TechSkill.Jquery,
				TechSkill.HTML,
				TechSkill.CSS,
				TechSkill.JavaScript,
			],
		},

		{
			title: "University Intern",
			date: "APR/19 - DEC/19",
			location: "Federal University of Santa Maria",
			description: "Applied Combinatorial Optimization: In this project the goal was to create a system for using mathematical equations in the Calculus classes for the advisor professor. The system was web-based so it used Laravel and Python with libraries like numpy for the calculations and matplotlib and pandas for data plotting.",
			highlights: [
				"PHP, Laravel, Python, Jquery, HTML, CSS, JavaScript",
				"Web page project, design and development",
				"Requirements analysis, project management",
				"Mathematical equations, calculus",
			],
			languages: [
				TechSkill.PHP,
				TechSkill.Laravel,
				TechSkill.Python,
				TechSkill.Jquery,
				TechSkill.HTML,
				TechSkill.CSS,
				TechSkill.JavaScript,
			],
		},

		{
			title: "Trainee",
			date: "MAI/18 - JAN/19",
			location: "IComp IT Solutions",
			description: "For this project, I used a combination of project management techniques, including requirements analysis and the waterfall model. The website itself was built using Laravel, MySQL, and Sass, resulting in a simple yet effective solution that allowed the business owner to easily change the site's content as needed.",
			highlights: [
				"Web page project, design and development",
				"Requirements analysis, project management",
				"PHP, Laravel, Sass, MySQL",
				"Waterfall model, Agile",
			],
			languages: [
				TechSkill.PHP,
				TechSkill.JavaScript,
				TechSkill.Jquery,
				TechSkill.SASS,
				TechSkill.MySQL,
			],
		},
	];
}
