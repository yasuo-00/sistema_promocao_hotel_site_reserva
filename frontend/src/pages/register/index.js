import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom'
import '../../assets/styles/register.css'
import api from '../../services/api';

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accountType, setAccountType] = useState('hotel')
    const [url, setUrl] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [name, setName] = useState('')
    const [dailyRate, setDailyRate] = useState(0)
    const [city, setCity] = useState('')

    //renderiza campos para registro conforme o tipo de conta (hotel/site_de_reservas)
    function renderAccountFields() {
        if (accountType === 'hotel') {
            return (
                <>
                    <label for="cnpj">CNPJ:</label>
                    <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0]{3}[1-2]-[0-9]{2}" title="Formato de CNPJ incorreto (XX.XXX.XXX/000X-XX)" required onChange={e => setCnpj(e.target.value)} />
                    <label for="name">Nome do Hotel:</label>
                    <input id="name" type="text" placeholder="Nome" required onChange={e => setName(e.target.value)} />
                    <label for="city">Cidade:</label>
                    <input type="text" id="city" name="city" placeholder="Cidade" required onChange={e => setCity(e.target.value)} />
                    <label for="dailyRate">Preço</label>
                    <input type="number" id="dailyRate" name="dailyRate" pattern="[0-9]{2,6}((.|,)[0-9]{1,2})?" title="Preço Inválido" required onChange={e => setDailyRate(e.target.value)} />
                </>
            )
        } else {
            return (
                <>
                    <label for="url">URL:</label>
                    <input type="text" id="url" name="url" placeholder="URL" required />
                </>
            )
        }
    }


    async function submitRegister() {
        console.log('asodjaiso')
    }

    return (
        <div className="registerPage-container">
            <div className="registerPage-header">
                <p>Booking Deals</p>
                <div className="registerPage-home">
                    <div className="registerPage-homeSvg"></div>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <div className="registerPage-pageContent">
                <div className="registerPage-bgImage"></div>
                <div className="registerPage-register">
                    <p className="registerPage-registerTitle">Registrar</p>
                    <form id="registerForm" className="registerPage-registerForm" onSubmit={submitRegister}>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email" pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" required onChange={e => setEmail(e.target.value)} />

                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Senha" required onChange={e => setPassword(e.target.value)} />
                        <label for="confirmPassword">Confirmar Senha:</label>
                        <input type="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Senha" required />
                        <label for="accountType">Escolha seu tipo:</label>
                        <select id="accountType" onChange={e => setAccountType(e.target.value)}>
                            <option value="hotel">Hotel</option>
                            <option value="booking_site">Site de Reservas</option>
                        </select>
                        <div id="accountFields" className="registerPage-accountFields">
                            {renderAccountFields()}
                        </div>
                        <input className="registerPage-registerButton" type="submit" value="REGISTRAR" onsubmit="" />

                    </form>
                    <form className="registerPage-login" action="http://localhost:3333/login">
                        <input type="submit" className="registerPage-loginButton" value="Já possui conta? Clique aqui para logar" />
                    </form>
                </div>
            </div>
        </div>
    )
}