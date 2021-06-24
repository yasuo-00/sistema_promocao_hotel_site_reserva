import React, { useState } from 'react';
import { useHistory,Link, Redirect } from 'react-router-dom'
import '../../assets/styles/login.css'
import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();


    async function submitLogin(e) {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        try{
            await api.post('/login', data)
                .then(response => {
                    if (response.status === 200) {
                        sessionStorage.setItem('user', JSON.stringify(response.data.user))
                        history.push('/userHome')
                    } else {
                        alert('Email e/ou senha incorretos')
                    }
                })
        }catch{
            alert('Erro ao efetuar login, tente novamente.')
        }
    }

    return (
        <div className="loginPage-container">
            <div className="loginPage-header">
                <p>Booking Deals</p>
                <div className="loginPage-home">
                    <div className="loginPage-homeSvg"></div>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <div className="loginPage-pageContent">
                <div className="loginPage-bgImage"></div>
                <div className="loginPage-login">
                    <p className="loginPage-loginTitle">Login</p>
                    <form id="loginForm" className="loginPage-loginForm" onSubmit={submitLogin}>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email"
                            pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" required onChange={e=>setEmail(e.target.value)}/>
                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Senha" required onChange={e=>setPassword(e.target.value)}/>
                        <input className="loginPage-loginButton" type="submit" value="LOGIN" />
                        <Link to="/register" className="loginPage-registerButton">Não possui conta? Cadastre-se clicando aqui</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}