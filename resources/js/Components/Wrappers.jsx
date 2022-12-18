export const PageWrapper = ({ pageTitle, children }) => {
	return <div className="container p-2 max-w-screen-lg mx-auto">
		<h1 className="mb-8 mt-8 text-3xl font-bold text-center">{pageTitle}</h1>
		{children}
	</div>;
}

export const Wrapper = ({ children }) => {
	return <div className="wrapper">
		{children}
	</div>;
}

export const Container = ({ children }) => {
	return <div className="items-listing">
		{children}
	</div>;
}
