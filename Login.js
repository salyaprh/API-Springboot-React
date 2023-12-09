// Login.js
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import "../css/stylelogin.css"

const Login = () => {
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const postData = () => {
        axios.post('http://localhost:8081/api/User/createUser', {
            nama,
            id,
            password
        }).then(() => {
            alert('Berhasil membuat akun, silahkan login.')
        })
    }

    return (
        <div>
            <h2 className="main-header">Silahkan membuat akun</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>Nama</label>
                    <input placeholder='Nama...' type = "text" onChange={(e) => setNama(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Id</label>
                    <input placeholder='Id...' type = "text" onChange={(e) => setId(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password...' type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Button class="submit" onClick={postData} type='submit'>Submit</Button>
                <Link to='/token'>
                    <Button class="login">Log in</Button>
                </Link>
            </Form>
        </div>
    );
};

export default Login;