import React, { useState } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom'
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
    const history = useHistory()

    async function submitAccountRegister(e) {
        e.preventDefault()
        if (accountType === 'hotel') {
            return submitHotel()
        } else if (accountType === 'booking_site') {
            return submitBookingSite()
        }
    }

    async function submitBookingSite() {
        const data = {
            email: email,
            password: password,
            url: url,
        }
        try {
            await api.post('/bookingSite/register', data)
                .then(response => {
                    if (response.status == 204) {
                        history.pushState('/login')
                    } else {
                        alert('Erro ao cadastrar, verifique os campos e tente novamente')
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    async function submitHotel() {
        const data = {
            email: email,
            password: password,
            name: name,
            cnpj: cnpj,
            city: city,
            daily_rate: dailyRate,
        }
        await api.post('/hotel/register')
            .then(response => {
                if (response.status == 204) {
                    history.pushState('/login')
                } else {
                    alert('Erro ao cadastrar, verifique os campos e tente novamente')
                }
            })

    }

    //renderiza campos para registro conforme o tipo de conta (hotel/site_de_reservas)
    function renderAccountFields() {
        if (accountType === 'hotel') {
            return (
                <>
                    <label htmlFor="cnpj">CNPJ:</label>
                    <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0]{3}[1-2]-[0-9]{2}" title="Formato de CNPJ incorreto (XX.XXX.XXX/000X-XX)" required onChange={e => setCnpj(e.target.value)} />
                    <label htmlFor="name">Nome do Hotel:</label>
                    <input id="name" type="text" placeholder="Nome" required onChange={e => setName(e.target.value)} />
                    <label htmlFor="city">Cidade:</label>
                    <input type="text" id="city" name="city" placeholder="Cidade" required onChange={e => setCity(e.target.value)} />
                    <label htmlFor="dailyRate">Preço</label>
                    <input type="number" id="dailyRate" name="dailyRate" pattern="[0-9]{2,6}((.|,)[0-9]{1,2})?" title="Preço Inválido" required onChange={e => setDailyRate(e.target.value)} />
                </>
            )
        } else {
            return (
                <>
                    <label htmlFor="url">URL:</label>
                    <input type="text" id="url" name="url" placeholder="URL" required onChange={e => setUrl(e.target.value)} />
                </>
            )
        }
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
                    <form id="registerForm" className="registerPage-registerForm" onSubmit={submitAccountRegister}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email" pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" required onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Senha" required onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Senha" required />
                        <label htmlFor="accountType">Escolha seu tipo:</label>
                        <select id="accountType" onChange={e => setAccountType(e.target.value)}>
                            <option value="hotel">Hotel</option>
                            <option value="booking_site">Site de Reservas</option>
                        </select>
                        <div id="accountFields" className="registerPage-accountFields">
                            {renderAccountFields()}
                        </div>
                        <input className="registerPage-registerButton" type="submit" value="REGISTRAR" />
                    </form>
                    <form className="registerPage-login" action="http://localhost:3333/login">
                        <input type="submit" className="registerPage-loginButton" value="Já possui conta? Clique aqui para logar" />
                    </form>
                </div>
            </div>
        </div>
    )
}