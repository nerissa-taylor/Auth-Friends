import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({});
    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })

        // const handleChange = e => {
        //     setCredentials: { credentials,
        //         [e.target.name]: e.target.value
        //     }
        // }


        return (
            <div>
                <form onSubmit={this.login}>
                    <input type="text" name="username" value={credentials.username}
                        onChange={this.handleChange} />
                    <input type="password" name="password" value={credentials.password}
                        onChange={this.handleChange} />
                    <button>Login</button>

                </form>
            </div>
        )
    }
    export default Login;