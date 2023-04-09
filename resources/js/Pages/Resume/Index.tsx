import React, { useState, useLayoutEffect, useReducer } from "react";
import { Loading } from "../../Components/Loading";
import { About } from "./About";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Contact } from "./Contact";

type MenuState = {
	currentPage: string;
};

type MenuAction = {
	type: string;
	payload: string;
};

const menuReducer = (state: MenuState, action: MenuAction): MenuState => {
	switch (action.type) {
		case "SET_PAGE":
			return { ...state, currentPage: action.payload };
		default:
			return state;
	}
};

const Index = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [state, dispatch] = useReducer(menuReducer, { currentPage: "about" });

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
				<li className={state.currentPage === "about" ? "active" : ""}>
					<button onClick={() => dispatch({ type: "SET_PAGE", payload: "about" })}>
						about
					</button>
				</li>
				<li className={state.currentPage === "experience" ? "active" : ""}>
					<button onClick={() => dispatch({ type: "SET_PAGE", payload: "experience" })}>
						experience
					</button>
				</li>
				<li className={state.currentPage === "education" ? "active" : ""}>
					<button onClick={() => dispatch({ type: "SET_PAGE", payload: "education" })}>
						education
					</button>
				</li>
				<li className={state.currentPage === "contact" ? "active" : ""}>
					<button onClick={() => dispatch({ type: "SET_PAGE", payload: "contact" })}>
						contact
					</button>
				</li>
			</ul>
		</div>

		<div className="resume-container">
			<div className="info">
				<img src="/images/profile.jpg" alt="profile picture" />
				<div>
					<p>Guilherme Abel</p>
					<p className="tag">guilhermeabel</p>
				</div>
			</div>
			<div className="content">
				{state.currentPage === "about" && <About />}
				{state.currentPage === "experience" && <Experience />}
				{state.currentPage === "education" && <Education />}
				{state.currentPage === "contact" && <Contact />}
				<div className="circle-text">
					<img src="/images/fullstackdev.svg" alt="full stack dev" />
				</div>
			</div>
		</div>
	</div>;
};

export default Index;
