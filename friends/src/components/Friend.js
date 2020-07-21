import React from 'react'



export const Friend = props => {
    const {friend} = props

    return(
        <div className='friend'>
            <h3 className='name'>{friend.name}</h3>
            <p className='age'>{friend.age} years old</p>
            <p className='email'>{friend.email}</p>
        </div>
    )
}