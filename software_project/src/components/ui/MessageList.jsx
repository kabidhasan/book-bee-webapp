import React from "react";
import Message from "./Message";

let messages = [
	{
		user: "Tamim",
		content: "Hello",
	},
	{
		user: "Kabid",
		content: "Hi",
	},
	{
		user: "Rahim",
		content: "How are you?",
	},
];

function MessageList() {
	return (
		<div className="border-2 border-black w-full flex flex-col h-full justify-start items-start rounded-sm bg-prilight">
			{messages.map((message) => (
				<Message
					key={message}
					user={message.user}
					content={message.content}
				/>
			))}
		</div>
	);
}

export default MessageList;
