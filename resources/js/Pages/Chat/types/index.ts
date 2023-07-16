
namespace ChatProps {

	export interface Message {
		role: string,
		content: string
	}

	export interface RequestData {
		chatId: number,
		newMessage: Message,
		messageHistory: Message[]
	}
}

export default ChatProps;
