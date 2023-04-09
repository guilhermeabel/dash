export type TimeLineItemProps = {
	title: string,
	location: string,
	date: string,
	description: string,
	highlights: string[],
	languages: string[],
}

export interface ILanguageBadgeImages {
	[key: string]: () => JSX.Element;
}
