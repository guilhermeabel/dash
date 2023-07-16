import React from "react";


//FIXME: this barely works, but it's good enough for now
const parser = (response: string) => {
	const lines = response.split("\n");

	let isNested = false;
	let nestedItems = [];
	let parsedResponse = [];

	for (let line of lines) {
		if (line.startsWith("**") && line.endsWith("**")) {
			const text = line.slice(2, -2);
			const formattedText = <strong key={parsedResponse.length}>{text}</strong>;

			if (isNested) {
				// If nested, render bold text inside nestedItems
				nestedItems.push(formattedText);
			} else {
				// If not nested, render bold text as a standalone paragraph
				parsedResponse.push(<p key={parsedResponse.length}>{formattedText}</p>);
			}
		} else if (line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.")) {
			// If a new nested item is encountered
			if (!isNested) {
				isNested = true;
				nestedItems = [];
			} else {
				// If already inside a nested structure, render previous nestedItems as a nested paragraph
				parsedResponse.push(<p key={parsedResponse.length}>{nestedItems}</p>);
				nestedItems = [];
			}

			// Render the nested item
			const listItem = <li key={nestedItems.length}>{line}</li>;
			nestedItems.push(listItem);
		} else {
			// If not bold or a nested item, render as a regular paragraph
			if (isNested) {
				// If currently inside a nested structure, render nestedItems as a nested paragraph
				parsedResponse.push(<p key={parsedResponse.length}>{nestedItems}</p>);
				isNested = false;
			}
			parsedResponse.push(<p key={parsedResponse.length}>{line}</p>);
		}
	}

	// If there are still nestedItems left after parsing
	if (isNested) {
		parsedResponse.push(<p key={parsedResponse.length}>{nestedItems}</p>);
	}

	return parsedResponse;
};

const MessageParser = ({ message }: { message: string }) => {
	const parsedResponse = parser(message);

	return <div>{parsedResponse}</div>;
};

export default MessageParser;
