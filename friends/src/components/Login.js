import React, { useState } from 'react'
import axios from 'axios'




class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false,
        error: '',
    };

    login = e => {
        e.preventDefault();
        this.setState({isLoading: true});
        axios.post('http://localhost:5000/api/login', {username: 'Lambda School', password: 'i<3Lambd4'})
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friendslist')
                this.setState({isLoading:false});
            })
            .catch(err => console.log(err));
    }

    handleChange = e => {
        this.setState({
            credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value,
            }
        });
    }

    render() {
    return(
        <form className='login-form' onSubmit={this.login}>
            <label>Username:&nbsp;
                <input 
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
            </label>
            <label>Password:&nbsp;
                <input 
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
            </label>
            <button className={this.state.isLoading ? 'loading' : ''}>Log in</button>
        </form>
    )
    }
}

export default Login;