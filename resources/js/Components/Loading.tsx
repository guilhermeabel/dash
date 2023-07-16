import React from "react";

type Props = {
	isChat?: boolean;
};

export const Loading = ({ isChat = false }: Props) => {
	return <div id="loading">
		<div className={`loading-container ${isChat ? 'chat' : ''}`}>
			<div className="loading-value"></div>
		</div>
	</div>;
};
