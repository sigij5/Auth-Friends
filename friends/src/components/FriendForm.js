// import React from 'react'
// import { axiosWithAuth } from '../utils/axiosWithAuth'



// class FriendForm extends React.Component {
//     state = {
//         newFriend: {
//             id: new Date(),
//             name: '',
//             age: '',
//             email: ''
//         },
//     }

//     handleChanges = e => {
//         this.setState({
//             newFriend: {
//           ...this.state.newFriend,
//           [e.target.name]: e.target.value,
//             }
//         });
//     }

//     addFriend = e => {
//         e.preventDefault();
//         axiosWithAuth()
//             .post('/api/friends', this.state.newFriend)
//             .then(res => console.log(res.data))
//     }

//     render(){
//         return(
//             <form className='friend-form' onSubmit={this.addFriend}>
//                 <h4>Add A Friend:</h4>
//                 <label>Name:&nbsp;
//                     <input 
//                         type='text'
//                         name='name'
//                         value={this.state.newFriend.name}
//                         onChange={this.handleChanges}
//                     />
//                 </label>
//                 <label>Age:&nbsp;
//                     <input 
//                         type='text'
//                         name='age'
//                         value={this.state.newFriend.age}
//                         onChange={this.handleChanges}
//                     />
//                 </label>
//                 <label>Email:&nbsp;
//                     <input 
//                         type='text'
//                         name='email'
//                         value={this.state.newFriend.email}
//                         onChange={this.handleChanges}
//                     />
//                 </label>
//                 <button>Add Friend</button>
//             </form>
//         )
//     }
// }


// export default FriendForm;