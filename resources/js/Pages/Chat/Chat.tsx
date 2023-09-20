import React, { useLayoutEffect, useRef, useState } from "react";
import { Loading } from "../../Components/Loading";
import useImageLoader from "../../Components/ImageLoader";
import { usePage } from '@inertiajs/react'
import MessageParser from "./MessageParser";
import { useGetMessagesQuery, useSendMessageMutation } from "./hooks";
import { useIsMutating } from "@tanstack/react-query";
import { ActionButton } from "../../Components/ActionButton";


const Chat = () => {
	const imageUrls = ["/images/chat-gpt-banner.webp", "/images/gpt-black.png"];
	const imageLoaders = imageUrls.map((url) => useImageLoader({ src: url }));
	const allImagesLoaded = imageLoaders.every((imageLoader) => imageLoader.isLoaded) || imageLoaders.some((imageLoader) => imageLoader.isError);

	const [newMessage, setNewMessage] = useState(false);

	const { props } = usePage();
	const { data: messages } = useGetMessagesQuery(props.chatId as number);
	const { mutate: sendMessage } = useSendMessageMutation();
	const isMutating = !!useIsMutating();

	function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		if (!inputRef.current) return;
		if (inputRef.current?.value.trim() === "") return;

		const newMessage = {
			content: inputRef.current.value,
			role: "user",
		};

		sendMessage({
			chatId: props.chatId as number,
			newMessage,
			messageHistory: [defaultFirstMessage, ...messages ?? []],
		});

		displayMessages.push(newMessage);
		inputRef.current.value = "";

		scrollToBottom("smooth");
	}

	const contentRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const defaultFirstMessage = {
		role: "system",
		content: "Hi, I'm GPT-4, a helpful assistant.",
	}

	const model = "GPT-4";

	const displayMessages = [defaultFirstMessage, ...messages ?? []];

	const scrollToBottom = (behavior: ScrollBehavior) => {
		if (contentRef.current) {
			contentRef.current.scrollTo({
				top: contentRef.current.scrollHeight,
				behavior: behavior,
			});
		}
	};

	useLayoutEffect(() => {
		scrollToBottom("instant");
	});

	if (!allImagesLoaded || !messages) {
		return <Loading isChat />;
	}


	const handleAnimationEnd = () => {
		setNewMessage(false);
	};

	return <div id="chat">

		<div className="menu banner">
			<img src="/images/chat-gpt-banner.webp" alt="banner" />

		</div>

		<div className="chat-container">

			<div className="sidebar">
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
					return <div key={idx} onTransitionEnd={handleAnimationEnd} className={`item message ${message.role} ${newMessage && idx === displayMessages.length - 1 ? 'new-message' : ''}`}>
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
					{/* <button className="send loader" disabled={isMutating} onClick={handleSubmit}>Send<span></span></button> */}
					<ActionButton
						label={"Send"}
						isLoading={isMutating}
						onClick={handleSubmit}
					/>
				</div>
			</div>

		</div>

	</div >;
}

export default Chat;

