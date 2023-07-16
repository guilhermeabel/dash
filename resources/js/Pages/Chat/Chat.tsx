import React, { useEffect, useRef } from "react";
import { Loading } from "../../Components/Loading";
import useImageLoader from "../../Components/ImageLoader";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { router, usePage } from '@inertiajs/react'
import axios, { AxiosResponse } from "axios";

const Chat = () => {
	const imageUrls = ["/images/chat-gpt-banner.webp", "/images/gpt-black.png"];
	const imageLoaders = imageUrls.map((url) => useImageLoader({ src: url }));
	const allImagesLoaded = imageLoaders.every((imageLoader) => imageLoader.isLoaded) || imageLoaders.some((imageLoader) => imageLoader.isError);
	const { props } = usePage();

	const getMessages = async (): Promise<Message[]> => {
		const response: AxiosResponse<Message[]> = await axios.get<Message[]>(`/chat/${props.chatId}/messages`);
		return response.data;
	};

	const { data: messages } = useQuery<Message[]>({
		queryKey: ['messages'],
		queryFn: getMessages,
		enabled: !!props.chatId,
	})


	const queryClient = useQueryClient()

	type Message = {
		role: string,
		content: string
	}

	type RequestData = {
		chatId: number,
		newMessage: Message,
		messageHistory: Message[]
	}

	const sendRequest = async (data: RequestData) => {
		const response = await router.post('/chat/store', data);
		return response;
	};

	const mutation = useMutation(sendRequest, {
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()

		if (!inputRef.current) return;
		if (inputRef.current?.value.trim() === "") return;

		mutation.mutate({
			chatId: props.chatId as number,
			newMessage: {
				content: inputRef.current?.value,
				role: "user"
			},
			messageHistory: [defaultFirstMessage, ...messages ?? []],
		})
	}

	const contentRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const defaultFirstMessage = {
		role: "system",
		content: "Hi, I'm GPT-4, a helpful assistant.",
	}


	const model = "GPT-4";

	const displayMessages = [defaultFirstMessage, ...messages ?? []];

	useEffect(() => {
		if (contentRef.current) {

			contentRef.current.scrollTo({
				top: contentRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [messages]);

	if (!allImagesLoaded) {
		return <Loading isChat />;
	}



	return <div id="chat">

		<div className="menu banner">
			<img src="/images/chat-gpt-banner.webp" alt="banner" />

		</div>

		<div className="chat-container">


			<div className="info">
				<div className="rotating-logo">
					<img src="/images/gpt-black.png" alt="gpt" />
				</div>
				<div>
					<p>ChatGPT</p>
					<p className="tag muted">using model <span className="model">{model}</span></p>
				</div>
			</div>

			<div className="content" ref={contentRef}>

				{displayMessages.map((message, idx) => {
					return <div key={idx} className={`item message ${message.role}`}>
						<div className="message-content">
							<p>{message.content}</p>
							<p className="author">{message.role == "user" ? "You" : "AI Model"}</p>
						</div>
					</div>
				})}


			</div>


			<div className="chat-actions">
				<div className="chat-input">
					<input ref={inputRef} type="text" placeholder="Type a message" />
					<button className="send" onClick={handleSubmit}>Send</button>
				</div>
			</div>

		</div>

	</div >;
}

export default Chat;
