import React from 'react'

function Message({id, content}) {
  return (
    <div className='font-sans text-lg  text-white p-2'>
      <p>{content}</p>
    </div>
  )
}

export default Message