import React, { useEffect, useRef } from "react";
import { Loading } from "../../Components/Loading";
import useImageLoader from "../../Components/ImageLoader";
import { usePage } from '@inertiajs/react'
import MessageParser from "./MessageParser";
import { useGetMessagesQuery, useSendMessageMutation } from "./hooks";
import { useIsMutating } from "@tanstack/react-query";


const Chat = () => {
	const imageUrls = ["/images/chat-gpt-banner.webp", "/images/gpt-black.png"];
	const imageLoaders = imageUrls.map((url) => useImageLoader({ src: url }));
	const allImagesLoaded = imageLoaders.every((imageLoader) => imageLoader.isLoaded) || imageLoaders.some((imageLoader) => imageLoader.isError);

	const { props } = usePage();
	const { data: messages } = useGetMessagesQuery(props.chatId as number);
	const { mutate: sendMessage } = useSendMessageMutation();
	const isMutating = !!useIsMutating();

	function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()

		if (!inputRef.current) return;
		if (inputRef.current?.value.trim() === "") return;

		sendMessage({
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
		if (contentRef.current && messages) {
			contentRef.current.scrollTo({
				top: contentRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [messages, contentRef.current]);

	if (!allImagesLoaded || !messages) {
		return <Loading isChat />;
	}

	const disableSendButton = isMutating || (inputRef.current?.value.trim() === "");

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
							{message.role != "user" ? <MessageParser message={message.content} /> : <p>{message.content}</p>}
							<p className="author">{message.role == "user" ? "You" : "AI Model"}</p>
						</div>
					</div>
				})}

			</div>

			<div className="chat-actions">
				<div className="chat-input">
					<input ref={inputRef} type="text" placeholder="Type a message" />
					<button className="send" disabled={disableSendButton} onClick={handleSubmit}>Send</button>
				</div>
			</div>

		</div>

	</div >;
}

export default Chat;
