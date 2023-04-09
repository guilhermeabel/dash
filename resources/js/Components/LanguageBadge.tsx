import React from "react";
import { ILanguageBadgeImages } from "../Pages/Resume/types";

export enum LanguageBadge {
	JavaScript = 'JavaScript',
	PHP = 'PHP',
	Java = 'Java',
	Python = 'Python',
	TypeScript = 'TypeScript',
	CSS = 'CSS',
	React = 'React',
	Laravel = 'Laravel',
	Bootstrap = 'Bootstrap',
	Jquery = 'jQuery',
	Tailwind = 'Tailwind',
	NextJS = 'NextJS',
	MySQL = 'MySQL',
	SASS = 'SASS',
	WordPress = 'WordPress',
	C = 'C',
	ShellScript = 'Shell Script',
	Bash = 'Bash',
	Docker = 'Docker',
	HTML = 'HTML',
	CSharp = 'C#',
	DotNet = 'DotNet',
	NodeJS = 'NodeJS',
	DynamoDB = 'DynamoDB',
	Blazor = 'Blazor',
	AWS = 'AWS',
	GitHub = 'GitHub',
	MicrosoftAzure = 'Microsoft Azure',
	PowerShell = 'PowerShell',
}

export const LanguageBadgeImages: ILanguageBadgeImages = {
	[LanguageBadge.JavaScript]: () => (
		<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
	),
	[LanguageBadge.PHP]: () => (
		<img src="https://img.shields.io/badge/PHP-4B568B?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
	),
	[LanguageBadge.Java]: () => (
		<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
	),
	[LanguageBadge.Python]: () => (
		<img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
	),
	[LanguageBadge.TypeScript]: () => (
		<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
	),
	[LanguageBadge.CSS]: () => (
		<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
	),
	[LanguageBadge.React]: () => (
		<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
	),
	[LanguageBadge.Laravel]: () => (
		<img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
	),
	[LanguageBadge.Bootstrap]: () => (
		<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
	),
	[LanguageBadge.Jquery]: () => (
		<img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery" />
	),
	[LanguageBadge.Tailwind]: () => (
		<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
	),
	[LanguageBadge.NextJS]: () => (
		<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="NextJS" />
	),
	[LanguageBadge.MySQL]: () => (
		<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL" />
	),
	[LanguageBadge.SASS]: () => (
		<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS" />
	),
	[LanguageBadge.WordPress]: () => (
		<img src="https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white" alt="WordPress" />
	),
	[LanguageBadge.C]: () => (
		<img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
	),
	[LanguageBadge.ShellScript]: () => (
		<img src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Script" />
	),
	[LanguageBadge.Bash]: () => (
		<img src="https://img.shields.io/badge/Bash-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Bash" />
	),
	[LanguageBadge.Docker]: () => (
		<img src="https://img.shields.io/badge/Docker-1095CD?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
	),
	[LanguageBadge.HTML]: () => (
		<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
	),
	[LanguageBadge.CSharp]: () => (
		<img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
	),
	[LanguageBadge.DotNet]: () => (
		<img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white" alt=".Net" />
	),
	[LanguageBadge.NodeJS]: () => (
		<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
	),
	[LanguageBadge.DynamoDB]: () => (
		<img src="https://img.shields.io/badge/DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white" alt="DynamoDB" />
	),
	[LanguageBadge.Blazor]: () => (
		<img src="https://img.shields.io/badge/Blazor-512BD4?style=for-the-badge&logo=blazor&logoColor=white" alt="Blazor" />
	),
	[LanguageBadge.AWS]: () => (
		<img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
	),
	[LanguageBadge.GitHub]: () => (
		<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
	),
	[LanguageBadge.MicrosoftAzure]: () => (
		<img src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="Microsoft Azure" />
	),
	[LanguageBadge.PowerShell]: () => (
		<img src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white" alt="PowerShell" />
	)

};
