import { LanguageBadge } from "../../../Components/LanguageBadge";

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
				LanguageBadge.React,
				LanguageBadge.PHP,
				LanguageBadge.TypeScript,
				LanguageBadge.MySQL,
				LanguageBadge.JavaScript,
				LanguageBadge.CSS,
				LanguageBadge.SASS,
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
				LanguageBadge.JavaScript,
				LanguageBadge.WordPress,
				LanguageBadge.Jquery,
				LanguageBadge.SASS,
				LanguageBadge.PHP,
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
				LanguageBadge.Java,
				LanguageBadge.Jquery,
				LanguageBadge.HTML,
				LanguageBadge.CSS,
				LanguageBadge.JavaScript,
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
				LanguageBadge.PHP,
				LanguageBadge.Laravel,
				LanguageBadge.Python,
				LanguageBadge.Jquery,
				LanguageBadge.HTML,
				LanguageBadge.CSS,
				LanguageBadge.JavaScript,
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
				LanguageBadge.PHP,
				LanguageBadge.JavaScript,
				LanguageBadge.Jquery,
				LanguageBadge.SASS,
				LanguageBadge.MySQL,
			],
		},
	];
}
