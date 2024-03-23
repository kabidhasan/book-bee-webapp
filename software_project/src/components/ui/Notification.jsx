import React from 'react'

function Notification({title, content}) {
    return (
        <div className="collapse collapse-arrow join-item border-2 border-base-300">
            <input type="radio" name='my-accordian'/>
            <div className="collapse-title text-xl font-sans text-white font-bold">
                {title}
            </div>
            <div className="collapse-content text-ter">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Notification