import { LanguageBadge } from "../../../Components/LanguageBadge";

export const useFetchEducation = () => {
	return [
		{
			title: "Self-taught",
			date: "JAN 2021 - PRESENT",
			location: "Online Courses and Books",
			description: "As a curious learner, I took the initiative to explore various topics by enrolling in online courses and reading books. To apply my newfound knowledge, I embarked on personal projects and challenged myself to comprehend how things work.",
			highlights: [
				"Management and Leadership",
				"Communication and Teamwork",
				"Architecture and Design Patterns",
				"Test Driven Development",
				"Data Structures and Algorithms",
				"Cloud Computing",
				"Clean Code",
			],
			languages: [
				LanguageBadge.CSharp,
				LanguageBadge.Java,
				LanguageBadge.DotNet,
				LanguageBadge.Blazor,
				LanguageBadge.TypeScript,
				LanguageBadge.React,
				LanguageBadge.NodeJS,
				LanguageBadge.DynamoDB,
				LanguageBadge.AWS,
				LanguageBadge.GitHub,
				LanguageBadge.MicrosoftAzure,
				LanguageBadge.PowerShell,
			],
		},

		{
			title: "Analysis and Systems Development",
			date: "JAN 2023 - PRESENT",
			location: "University of Caxias do Sul",
			description: "After a year of self-learning, I am now embarking on another course that will help me focus on project management, software design patterns, and development.",
			highlights: [
				"Architecture and Design Patterns",
				"Development Process",
				"Quality Assurance",
				"Project Management",
				"AI Fundamentals",
			],
			languages: [
				LanguageBadge.Java,
				LanguageBadge.Python,
			],
		},

		{
			title: "Computer Networks",
			date: "JAN 2019 - DEC 2020 (incomplete)",
			location: "Federal University of Santa Maria",
			description: "I attended one of the best public universities in Brazil for a year, but when the pandemic hit, I had to return to my hometown. I continued my studies for another year, but ultimately decided to switch my field of study. The admission to the university is highly competitive and requires passing a selection process.",
			highlights: [
				"Networks fundamentals",
				"Network Administration and Automation",
				"Security and Cryptography",
				"Low level Programming",
			],
			languages: [
				LanguageBadge.C,
				LanguageBadge.Bash,
				LanguageBadge.Java,
				LanguageBadge.Python,
				LanguageBadge.ShellScript,
				LanguageBadge.Docker
			],
		},

		{
			title: "Web Development",
			date: "JAN 2016 - DEC 2018",
			location: "Federal Institute of Rio Grande do Sul",
			description: "This is a prestigious national institution that offers a technical course integrated into high school, and requires students to complete an internship to finish the program. Admission to this school also requires passing a selection process.",
			highlights: [
				"Programming fundamentals",
				"development process",
				"Database management",
				"Web ecosystem",
			],
			languages: [
				LanguageBadge.PHP,
				LanguageBadge.JavaScript,
				LanguageBadge.CSS,
				LanguageBadge.HTML,
				LanguageBadge.SASS,
				LanguageBadge.MySQL,
			],
		},


	];
}
