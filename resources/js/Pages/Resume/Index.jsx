import React, { useState, useLayoutEffect } from "react";
import { Loading } from "../../Components/Loading";

const Index = () => {
	const [isLoading, setIsLoading] = useState(true);

	useLayoutEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) return (<Loading />);

	return <div id="resume">
		<div className="stripe">
			<div>
				<span className="site">/guilhermeabel.com/</span>
				<span className="page">index.html</span>
			</div>
		</div>

		<div className="menu">
			<ul>
				<li className="active"><button onClick={() => { }} href="/about">about</button></li>
				<li><button onClick={() => { }} href="/timeline">timeline</button></li>
				<li><button onClick={() => { }} href="/portfolio">portfolio</button></li>
				<li><button onClick={() => { }} href="/contact">contact</button></li>
			</ul>
		</div>

		<div className="resume-container">
			<div className="info">
				<img src="/images/profile.jpg" alt="" />
				<div>
					<p>Guilherme Abel</p>
					<p className="tag">guilhermeabel</p>
				</div>
			</div>
			<div className="content">
				<h2>hey, I'm Abel</h2>
				<p className="subtitle">Programmer, full-stack web developer, handsome</p>
				<p>
					As a full stack developer, I focus on creating innovative solutions while adhering to programming best practices. With 4 years of experience, I have worked on web systems in the fields of business management, e-commerce, and landing pages. I enjoy challenges and seek to understand the intricacies of each project.
				</p>
				<p>
					I am skilled in both teamwork and independent work, using proactive and assertive communication to address problems. My daily tasks involve using the Scrumban methodology with a PHP + JS/TS and React stack. My expertise includes unit testing (PHPUnit), CI/CD (GitHub Actions), log monitoring (Kibana), and TDD.
				</p>
				<p>
					In addition to my professional work, I maintain and update Java and C# projects on GitHub. I use these projects to study different patterns and engage in coding challenges, allowing me to continuously learn and improve my skills.
				</p>

				<div className="circle-text">
					<img src="/images/fullstackdev.svg" alt="" />
				</div>
			</div>
		</div>
	</div>;
};

export default Index;
