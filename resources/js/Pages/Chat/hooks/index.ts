import axios, { AxiosResponse } from "axios";
import ChatProps from "../types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetMessagesQuery = (chatId: number) => {
	return useQuery<ChatProps.Message[]>({
		queryKey: ['chatMessages'],
		queryFn: async (): Promise<ChatProps.Message[]> => {
			const response: AxiosResponse<ChatProps.Message[]> = await axios.get<ChatProps.Message[]>(`/chat/${chatId}/messages`);
			return response.data;
		},
		enabled: !!chatId,
		staleTime: Infinity,
		cacheTime: Infinity
	});
};

export const useSendMessageMutation = () => {
	const queryClient = useQueryClient();

	return useMutation(async (data: ChatProps.RequestData): Promise<AxiosResponse> => {
		const response: AxiosResponse = await axios.post('/chat/store', data);
		return response;
	}, {
		onSuccess: () => {
			queryClient.invalidateQueries(['chatMessages']);
		},
	});
};
