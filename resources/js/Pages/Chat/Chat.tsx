import React, { useEffect, useRef } from "react";
import { Loading } from "../../Components/Loading";
import useImageLoader from "../../Components/ImageLoader";
import { useMutation, useQueryClient } from "react-query";
import { router } from '@inertiajs/react'

const Chat = () => {
	const imageUrls = ["/images/chat-gpt-banner.webp", "/images/gpt-black.png"];
	const imageLoaders = imageUrls.map((url) => useImageLoader({ src: url }));
	const allImagesLoaded = imageLoaders.every((imageLoader) => imageLoader.isLoaded) || imageLoaders.some((imageLoader) => imageLoader.isError);

	const queryClient = useQueryClient()



	const sendRequest = async (data: { content: string }) => {
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
		mutation.mutate({ content: "teste" })
	}

	const contentRef = useRef<HTMLDivElement>(null);

	const messages = [
		{
			id: 1,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 2,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 3,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 4,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 5,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 6,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 7,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 8,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 9,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 10,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 11,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 12,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 13,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 14,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 15,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 16,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 17,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 18,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
		{
			id: 19,
			role: "system",
			content: "Hi, I'm GPT-4, a chatbot that uses the OpenAI API to generate messages.",
		},
		{
			id: 20,
			role: "user",
			content: "My creator is Guilherme Abel, a 22 year old programmer from Brazil.",
		},
	]


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



	const model = "GPT-4";


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

				{messages.map((message) => {
					return <div key={message.id} className={`item message ${message.role}`}>
						<div className="message-content">
							<p>{message.content}</p>
							<p className="author">{message.role == "user" ? "You" : "AI Model"}</p>
						</div>
					</div>
				})}

			</div>

			<div className="chat-actions">
				<div className="chat-input">
					<input type="text" placeholder="Type a message" />
					<button className="send" onClick={handleSubmit}>Send</button>
				</div>
			</div>

		</div>

	</div >;
}

export default Chat;
