import React from 'react'
import Message from './Message'

let messages = [
    {
        id: 1,
        content: 'Hello, how are you?'
    },
    {
        id: 2,
        content: 'I am fine, thank you.'
    },
    {
        id: 3,
        content: 'Goodbye!'
    }
]

function MessageList() {
  return (
    <div className='border border-black w-full flex flex-col h-full justify-start items-start rounded-sm'>
        {messages.map((message) => (
            <Message key={message.id} content={message.content} />
        ))}
    </div>
  )
}

export default MessageList