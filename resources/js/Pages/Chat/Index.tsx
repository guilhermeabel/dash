import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Chat from "./Chat";

const Index = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Chat />
		</QueryClientProvider>
	);
};

export default Index;
