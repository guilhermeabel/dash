import React from "react";
import { TimeLineItemProps } from "./types";
import { TechSkillShield } from '../../Components/LanguageBadge';
import { useFetchEducation } from "./hooks/useFetchEducation";

const educationalTimeline = useFetchEducation();

export const Education = () => {
	return (<>
		<p>My journey in software development began in 2016 when I pursued a course in Web Development at the Federal Institute of Rio Grande do Sul. This was followed by two years at the Federal University of Santa Maria studying Computer Networks, which gave me a strong foundation in network administration, security, and cryptography. While I continued to explore various topics on my own through self-learning, I also recently embarked on another course in Analysis and Systems Development at the University of Caxias do Sul. Through a combination of these educational pursuits, online courses, reading books, and working on personal projects, I have developed a strong skillset in programming fundamentals, software development process, web development, network administration, and project management.</p>
		<div className="timeline">
			<div className="timeline-line" />
			{educationalTimeline.map((item, index) => (
				<TimelineItem key={index} {...item} />
			))}
		</div>
	</>);
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
