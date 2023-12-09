import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
// import "../css/stylelogin.css"
import { ReactSession } from 'react-client-session';

ReactSession.setStoreType("localStorage");

const Token = () => {
    const [uid, setId] = useState('');
    const [pwd, setPassword] = useState('');
    // const [sessionToken, setToken] = useState('');
    // const navigate = useNavigate();
    var sessionToken;

var url = "http://localhost:8081/api/User/login/?";

const reqToken = () => {

    var theurl = url +"id="+ uid +"&password="+ pwd;
    console.log(theurl);
    axios.get(theurl)

    .then(function (response) {
        console.log(response.data);
        sessionToken = response.data.sessionToken;
        alert('Berhasil mendapatkan token, token anda adalah : ' + uid +", "+ sessionToken);
        ReactSession.set("sessionToken", sessionToken);
    });
}        

    
    return (
        <div>
            <h2 className = "header">Login dan request Token di sini</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>Id</label>
                    <input placeholder='Id...' type = "text" onChange={(e) => setId(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password...' type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Button class="token" onClick={reqToken} type='submit'>Request Token</Button>
                <Link to ='/Fetch_data'>
                    <Button class="reqData">Request Data</Button>
                </Link>
            </Form>
        </div>
    );
};
export default Token;
