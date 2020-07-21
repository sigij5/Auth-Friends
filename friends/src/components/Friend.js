import React from 'react'



export const Friend = props => {
    const {friend} = props

    return(
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}