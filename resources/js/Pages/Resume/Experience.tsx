import React from "react";
import { TimeLineItemProps } from "./types";
import { TechSkillShield } from '../../Components/LanguageBadge';
import { useFetchExperience } from "./hooks/useFetchExperience";

const professionalTimeline = useFetchExperience();

export const Experience = () => {
	return (<>
		<p>
			I have gained practical software development experience in various positions, starting as a Trainee at IComp IT Solutions. There, I was involved in requirements analysis, project management, and web development using PHP, Laravel, Sass, and MySQL. As a Software Developer at Conexão G Tecnologia, I worked on projects ranging from web design to SEO optimization. Currently, I am a Junior Developer at Tiny ERP, where I have honed my skills in PHP, React, TypeScript, MySQL, and Agile methodologies. Through these experiences, I have gained expertise in project management, web design, PHP code review, refactoring, debugging, and component development, among other skills.
		</p>
		<div className="timeline">
			<div className="timeline-line" />
			{professionalTimeline.map((item, index) => (
				<TimelineItem key={index} {...item} />
			))}
		</div>
	</>
	);
};

const TimelineItem = ({
	title,
	date,
	location,
	description,
	highlights,
	languages,
}: TimeLineItemProps) => {
	return (
		<div className="timeline-item">
			<div className="timeline-dot" />
			<div className="timeline-info">
				<h3>
					{location} - {title}
				</h3>
				<span className="timestamp">{date}</span>
				<div className="timeline-languages">
					{languages.map((language, index) => (
						<span className="language" key={index}>
							{TechSkillShield[language]()}
						</span>
					))}
				</div>
				<p>{description}</p>
				<ul>
					{highlights.map((highlight, index) => (
						<li key={index}>{highlight}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
