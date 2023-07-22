import React from "react";

interface Props {
	label: string,
	isLoading: boolean,
	className?: string,
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ActionButton = ({ label, isLoading, className = "", onClick }: Props) => {
	return (
		<div id="loading-button">
			<button onClick={onClick} className={`loader ${isLoading ? "loading" : ""} ${className}`}>
				<span>{label}</span>
			</button>
		</div >
	);
}
